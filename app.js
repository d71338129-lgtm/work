// 配置express
const express=require('express')
const app=express()
// 导入路由
const router=require('./router/router')
app.use('/api',router)
// 解析x-www类型的表单数据
app.use(express.urlencoded({extended:false}))

// 开启服务
app.listen(3000,()=>{
    console.log('ok,run on 127.0.0.1:3000')
})