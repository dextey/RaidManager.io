const Dotenv = require('dotenv-webpack');
 
module.exports = {
  plugins: [
    new Dotenv({
      path: './.env',
      safe: false,
      allowEmptyValues: false,
      systemvars: false,
      silent: false,
      expand: false,
      defaults: false
    })
  ]
};