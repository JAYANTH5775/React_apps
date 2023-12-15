const express = require('express')
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const app = express();
const moment = require('moment');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');
const port = 5000

moment().format(); 
