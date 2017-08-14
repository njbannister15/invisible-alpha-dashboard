import fetch from 'isomorphic-fetch';

require('dotenv').config();

export default (path, opts) => {
  
  if (process.env.NODE_ENV === 'production') {   
    return fetch("/api" + path, opts);
  } else {    
    return fetch(path, opts);
  }
}