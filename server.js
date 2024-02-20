const express = require('express')
const path = require("path");
const socketio = require('socket.io')
const http = require('http')
const {allRequest}= require('./public/js/orders')


const app = express()
PORT = 6900
const server = http.createServer(app)
const io = socketio(server)




// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// SOCKET.IO CONNECTION  



io.on('connection', (socket) => {
    console.log(`A User Connected ${socket.id}`);

    // Handle sender connection
    socket.on('senderConnected', () => {
        console.log(`Sender connected: ${socket.id}`);
    });

    // Handle driver connection
    socket.on('driverConnected', () => {
        console.log(`Driver connected: ${socket.id}`);
    });

    // Handle order request
    socket.on('order', (orderData) => {
        console.log(`Order request received from ${socket.id}:`, orderData);
        
        io.emit('orderConfirmed', orderData);
    });


    // Handle Socket Disconnection
    socket.on('disconnect', () => {
        console.log(`User ${socket.id} disconnected`);
    });
});



server.listen(PORT,()=>{
    console.log(`Server started successfully ${PORT}`)
})