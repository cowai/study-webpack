import _ from 'lodash';

// from sub.js
var sub = require("./sub.js");
// sub.hello();

// require("./style.css");
require("./style.scss");

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());