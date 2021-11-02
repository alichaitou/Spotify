import  { useEffect,useState } from "react";
const request = require('request');


export default function Auth(code){
  const [accessToken,setAccessToken]=useState();
  var client_id = "344e2726b64c4af1a80cf9657157f6d4";
  var client_secret="f81f909b5b3744029232ce0f073f4c32";

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
     grant_type: 'client_credentials'
     },
    json: true
  };

useEffect(()=>{
request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
    setAccessToken(token);
  }
})},[code]);
return accessToken;
}