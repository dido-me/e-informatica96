export const authHeader =
  'Basic ' + btoa(process.env.WOOUSERAPIKEY + ':' + process.env.WOOPASSAPIKEY)
