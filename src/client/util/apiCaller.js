import fetch from 'isomorphic-fetch';
import Config from '../../server/config';

//We are going to use the address of '/api' as for communication with server
export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';

export function callApi(endpoint, method = 'get', body) {
  return fetch(`${API_URL}/${endpoint}`, {
    headers: { 
      'Accept': 'application/json',
      'Content-type': 'application/json' 
    },
    method: method,
    body: JSON.stringify(body),
  })
  .then(function(response) {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response;
  })
}
