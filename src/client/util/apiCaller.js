import fetch from 'isomorphic-fetch';
import Config from '../../server/config';

//We are going to use the address of '/api' as for communication with server
export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';

export function callApi(endpoint, method = 'post', body) {

	var result;
	if(method == 'get')
		result = fetch(`${API_URL}/${endpoint}`, {
		    headers: { 
		      'Accept': 'application/json',
		      'Content-type': 'application/json' 
		    },
		    method: method
		  })
		  .then(function(response) {
		      if (response.status >= 400) {
		          throw new Error("Bad response from server");
		      }
			  var json = response.json();
		      return json;
		  });
	  else
	  	result = fetch(`${API_URL}/${endpoint}`, {
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
			  console.log(response);
		      return response;
		  });
	return result;
}
