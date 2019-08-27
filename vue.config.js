/*
 * @Author: whisperer
 * @Date: 2019-08-02 13:45:37
 * @LastEditors: whisperer
 * @Description: 
 */
const path = require('path');

module.exports = {
    "outputDir":"docs",
    "publicPath":"/blog/",
    "configureWebpack": {
        "resolve":{
            "alias":{
                "@assets": path.join(__dirname, '/src/', 'assets')
            }
        }
    }
}