export default class Api {
    constructor(url, method, parameters = null) {
      this.url = url;
      this.method = method.toUpperCase();
      this.parameters = parameters;
    }
  
    async call() {
      const headers = {
        Accept: "application/json",
        // LOgica de token
      };
  
      const init = {
        method: this.method,
        headers,
      };
  
      if (this.method !== "GET") {
        headers["Content-Type"] = "application/json"; 
        init.body = JSON.stringify(this.parameters); 
      }
  
      try {
        const response = await fetch(this.url, init);
        if (response.ok) {
          return await response.json();
        } else {
          return {
            response: false,
            result: response.status,
          };
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
  