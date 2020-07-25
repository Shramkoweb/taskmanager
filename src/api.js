import axios from 'axios';

class Api {
  constructor(baseURL, authorization) {
    this.api = axios.create({ baseURL });
    this.authorization = authorization;
  }

  // TODO check axios empty config is correct
  get(url, config = {}) {
    return this.api.get(url, config);
  }

  getTasks() {
    return this.get('/tasks', {
      timeout: 2000,
      headers: {
        Authorization: this.authorization,
      },
    });
  }
}

export default Api;
