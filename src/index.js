/* eslint-disable */

// Do this once before any other code in your app
import 'babel-polyfill'


window.jQuery = window.$ =  require("jquery");
window.moment = require('moment');
window._ = require('lodash');

import 'core-js/es6/array'
import 'core-js/es6/promise'
import 'core-js/es6/object'
import 'jquery-ui-npm/jquery-ui.min.js'
//import 'imports-loader?jQuery=jquery!jquery-color/jquery.color.js'


require("bootstrap");

/** Notes: require.ensure is specific to webpack
 * Webpack statically parses for require.ensure() in the code while building.
 * Any module that is referenced as a dependency or require()'d within the
 * callback function, will be added to a new chunk. 
 * */ 
require.ensure([], () => {
    require('./app');
})