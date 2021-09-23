/*
 * File: server.js
 * Project: watcher
 * File Created: Thursday, 23rd September 2021 6:44:18 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 23rd September 2021 6:44:18 am
 * -----
 * Copyright 2020 - 2021 WhileGeek, https://umar.tech
 */

var connect = require('connect');
var serveStatic = require('serve-static');

connect()
    .use(serveStatic(__dirname+'/build'))
    .listen(5000, () => console.log('Server running on 5000...'));