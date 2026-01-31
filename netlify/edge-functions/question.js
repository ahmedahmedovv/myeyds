// Netlify Edge Function to proxy Mistral API requests
// This keeps the API key server-side

export default async (request, context) => {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { prompt, model, temperature, maxTokens } = await request.json();
    
    // API key is stored in Netlify environment variable
    const apiKey = Netlify.env.get('MISTRAL_API_KEY');
    
    if (!apiKey) {
      return new Response('API key not configured', { status: 500 });
    }

    const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model || 'mistral-small-latest',
        messages: [{ role: 'user', content: prompt }],
        temperature: temperature || 0.8,
        max_tokens: maxTokens || 1024,
        response_format: { type: 'json_object' }
      })
    });

    if (!res.ok) {
      const error = await res.text();
      return new Response(`API error: ${error}`, { status: res.status });
    }

    const data = await res.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (err) {
    return new Response(`Error: ${err.message}`, { status: 500 });
  }
};
