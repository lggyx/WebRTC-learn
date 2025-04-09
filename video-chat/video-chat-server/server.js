//引入依赖项
const express = require('express');
const socket= require('socket.io');
const cors=require('cors');
const {v4: uuidv4} = require('uuid');

//服务器初始化
const app = express();
const PORT=process.env.PORT || 5000;

//cors包解决跨域问题
app.use(cors);

//监听端口号启动服务器
const server = app.listen(PORT, () => {
    console.log(`服务运行在端口：${PORT}`);
});

//传递server对象，创建socket.io实例
const io = socket(server, {
    cors: {
        origin: '*',// 允许所有来源地址
        methods: ['GET', 'POST'],// 允许的请求方法
        allowedHeaders: ['Content-Type'],// 允许的请求头
    }
});

//监听客户端socket连接事件
io.on('connection', (socket) => {
    socket.emit('connection', null);
    console.log('新用户连接:', socket.id);
})