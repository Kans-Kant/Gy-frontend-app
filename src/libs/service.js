import axios from 'axios';

class Service {

  constructor() {
    let service = axios.create({
    });
    service.baseUrl = 'https://api.github.com';
    this.service = service;
  }


  
  get(path) {
    let url = `${this.service.baseUrl}/${path}`;
    return this.service.get(`${url}`)
  }

  patch(path, payload) {

    let url = `${this.service.baseUrl}/${path}`;

    return this.service.request({
      method: 'PATCH',
      url: `${url}`,
      responseType: 'json',
      data: payload
    })
  }

  post(path, payload) {
    let url = `${this.service.baseUrl}/${path}`;
    return this.service.request({
      method: 'POST',
      url: `${url}`,
      responseType: 'json',
      data: payload
    })
  }
}

export default new Service();