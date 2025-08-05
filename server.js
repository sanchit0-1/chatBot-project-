require('dotenv').config()
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generator = require('./src/services/ai.service')






const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log("connected")
    socket.on("disconnect",()=>{
        console.log("disconnected")
    })
    // ai building

    socket.on("ai-message", async (data)=>{
        // printing what data I got
        console.log("data: ",data.prompt);
        // I wiil use json format to send data that's why I using prompt as a prop passed over .
        // after all we send this data to ai using generator function
        const answer = await generator(data.prompt)
        // now what we got answer we will print it 
        console.log("Ai answer is: ", answer);
    })
    

});



httpServer.listen(3000,()=>{
    console.log("server started !")
});