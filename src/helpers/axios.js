import axios from 'axios';
import auth from './auth';

module.exports = function(_method, _url, data, _csrf) {
  if (_method === 'GET') {
    return  axios({
      method: _method,
      url: _url,
      baseURL: process.env.API_URL,
      params: data,
      headers:{
        'Content-type': 'application/json', // multipart/form-data
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': auth.getAuthHeader().Authorization,
        'X-CSRF-Token': _csrf
      },
      responseType: 'json',
      withCredentials: false
    });
  }else {
    return  axios({
      method: _method,
      url: _url,
      baseURL: process.env.API_URL,
      data: data,
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': auth.getAuthHeader().Authorization,
        'X-CSRF-Token': _csrf
      },
      responseType: 'json',
      withCredentials: false
    });
  }

};