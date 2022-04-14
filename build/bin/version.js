/*
 * @Description: 文档版本管理
 * @Date: 2022-04-12 17:27:27
 * @LastEditors: lmf
 * @LastEditTime: 2022-04-14 18:40:18
 * @FilePath: \element\build\bin\version.js
 */
// 原version.js
// var fs = require('fs');
// var path = require('path');
// var version = process.env.VERSION || require('../../package.json').version;
// var content = { '1.4.13': '1.4', '2.0.11': '2.0', '2.1.0': '2.1', '2.2.2': '2.2', '2.3.9': '2.3', '2.4.11': '2.4', '2.5.4': '2.5', '2.6.3': '2.6', '2.7.2': '2.7', '2.8.2': '2.8', '2.9.2': '2.9', '2.10.1': '2.10', '2.11.1': '2.11', '2.12.0': '2.12', '2.13.2': '2.13', '2.14.1': '2.14' };
// if (!content[version]) content[version] = '2.15';
// fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content));

// 改进后的version.js
const fs = require('fs');
const path = require('path');
const versions = require('../../examples/versions.json');
const version = process.env.VERSION || require('../../package.json').version;
const versionMinor = version.match(/^(\d+\.\d+)/)[0];
const key = Object.keys(versions).find((key => new RegExp(`${versionMinor}.`).test(key)));
if (key) delete versions[key];
versions[version] = versionMinor;
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(versions));
