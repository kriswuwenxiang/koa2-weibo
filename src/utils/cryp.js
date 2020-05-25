/**
 * @description 加密方法
 * @author wuwx
 */

const crypto = require('crypto')
const { CRYPTO_SECRET_KEY } = require('../config/constant')

/**
 * md5 加密
 * @param {string} content 明文
 */
function md5(content) {
    const md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

/**
 * 加密方法
 * @param {string} content 明文
 */
function doCrypto(content) {
    const str = `password=${content}&key=${CRYPTO_SECRET_KEY}`
    return md5(str)
}

module.exports = doCrypto
