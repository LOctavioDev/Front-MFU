export default class Api {
  constructor(url, method, parameters = null, token = null) {
    this.url = url;
    this.method = method.toUpperCase();
    this.parameters = parameters;
    this.token = token;
  }

  async call() {
    const headers = {
      Accept: 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    if (this.method !== 'GET') {
      headers['Content-Type'] = 'application/json';
    }

    const init = {
      method: this.method,
      headers: headers,
    };

    if (this.method !== 'GET') {
      init.body = JSON.stringify(this.parameters);
    }

    try {
      const response = await fetch(this.url, init);
      if (response.ok) {
        return await response.json();
      } else if (response.status === 401) {
        return {
          response: false,
          result: 401,
        };
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (error) {
      return {
        response: false,
        result: [],
        message: error.message,
      };
    }
  }
}
