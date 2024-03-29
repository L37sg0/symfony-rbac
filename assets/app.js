/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import "../node_modules/bootstrap/scss/bootstrap-grid.scss";
import "../node_modules/bootstrap/scss/bootstrap-reboot.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/bootstrap/scss/bootstrap-utilities.scss";

const $ = require('../node_modules/jquery');
require('../node_modules/bootstrap');
require('../node_modules/@popperjs/core');
require('../node_modules/feather-icons');
require('./js/dashboard');