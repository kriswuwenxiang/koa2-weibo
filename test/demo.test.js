/**
 * @description 单元测试
 * @author wuwx
 */

 const server = require('./server')

test('10 + 10 应该等于20', () => {
    expect(10 + 10).toBe(20)
})

test('json 接口返回数据格式正确', async () => {
    const res = await server.get('/json')
    expect(res.body).toEqual({
        title: 'koa2 json'
    })
})