require('dotenv').config()
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generator = require('./src/services/ai.service')






const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection",async (socket) => {
    socket.on("message",(data)=>{})

    

    const reply = await generator(data)
    socket.on("reply: ",{reply})

});

httpServer.listen(3000,()=>{
    console.log("server started !")
});