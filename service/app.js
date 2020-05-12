
const { connect } = require("./database/init")
const Koa = require("koa");

// 链接数据库
;(async ()=>{
    await connect()
})

const app = new Koa()



app.use(ctx=>{
    ctx.body = "hello koa"
}).listen(3000)