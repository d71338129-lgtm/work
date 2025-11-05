// 配置路由
const express=require('express')
const router=express.Router()
// 路由处理
const handler=require('./handler')
// 注册
router.post('/reguser',handler.reguser)
// 登录
router.post('/login',handler.login)


// 导出路由
module.exports=router