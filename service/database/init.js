const mongoose = require("mongoose")
const db = "mongodb+srv://hengxuz:ruqqS9e5BGbwR87@cluster0-yar3q.mongodb.net/test?retryWrites=true&w=majority"
mongoose.Promise = global.Promise

exports.connect = ()=>{

}

mongoose.connect(db)

mongoose.connection.on('disconnected',() => {

})

mongoose.connection.on('error',(err) => {
    console.log(err)
})

mongoose.connection.on('open',() => {
    console.log("数据库链接成功")
})
