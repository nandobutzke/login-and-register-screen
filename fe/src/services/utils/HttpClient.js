export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  post(path, options) {
    return this.makeRequest(path, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    });
  }

  async makeRequest(path, options) {
    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        headers.append(key, value);
      });
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    });

    const contentType = response.headers.get('Content-Type');

    let responseBody = null;
    if (contentType?.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new Error('API Error');
  }
}
