import axios from 'axios';

class Api {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
  }

  // TODO check axios empty config is correct
  get(url, config = {}) {
    return this.api.get(url, config);
  }

  getTasks() {
    return this.get('/tasks', {
      timeout: 2000,
      headers: {
        Authorization: 'Basic er883jdzbdw',
      },
    });
  }
}

export default Api;
