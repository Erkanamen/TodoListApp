import fetch from 'isomorphic-fetch';
import Config from '../../server/config';

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

      // console.log("response in callapi is " + response);
      // if(response !== null)
      //   return response.json();
      // else
      //   return "";
      //console.log(response)
      return response;
  })
  // .then(function(stories) {
  //     console.log("stories is" + stories);
  //     return stories;  
  // })

  // .then(response => response.json().then(json => ({ json, response })))
  // .then(({ json, response }) => {
  //   if (!response.ok) {
  //     return Promise.reject(json);
  //   }
  //   return json;
  // })
  // .then(
  //   response => response,
  //   error => error
  // );
}

