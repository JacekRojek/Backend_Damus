'use strict';
var fs = require('fs');
fs.createReadStream('.development-env')
  .pipe(fs.createWriteStream('.env'));