const Koa = require('koa')
const app = new Koa()

app.use((ctx) => {
  ctx.body = "hello world"
}).listen(3000)
