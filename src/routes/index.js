const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  // const session = ctx.session
  // if (session.num == null) {
  //   session.num = 0
  // }
  // session.num++
  
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
