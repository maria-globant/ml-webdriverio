//merge parent conf object + add new changes in uat conf (baseurl, connectiontimeout)

const merge = require('deepmerge');
const wdioConf = require('./wdio.conf.js');

exports.config = merge(wdioConf.config, {

    baseUrl: 'https://rahulshettyacademyUAT.com/',
    waitforTimeout: 50000,

})

console.log('FINAL BASE URL: -----------------', exports.config.baseUrl)