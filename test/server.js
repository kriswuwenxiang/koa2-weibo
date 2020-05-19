/**
 * @description 单元测试 server
 * @author wuwx
 */

 const request = require('supertest')
 const server = require('../src/app').callback()
 module.exports = request(server)