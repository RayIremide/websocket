const socket = io();
const requestList = document.getElementById('order-request');

socket.emit('driverConnected');

socket.on('orderConfirmed', (orderDetails) => {
    console.log(orderDetails);

    function outputRequest(orderDetails) {
        reqList.innerHTML = '';
        orderDetails.forEach((request) => {
          const li = document.createElement('li');
          li.innerText = request.currentLocation;
          reqList.appendChild(li);
        });
      }


    // const allRequest = document.createElement('div');
    // allRequest.classList.add('request-card');

    // const requestId = document.createElement('div');
    // requestId.textContent = `Request ID: ${orderDetails.id}`;
    // allRequest.appendChild(requestId);

    // const currentLocation = document.createElement('div');
    // currentLocation.textContent = `Current Location: ${orderDetails.currentLocation}`;
    // allRequest.appendChild(currentLocation);

    // const destination = document.createElement('div');
    // destination.textContent = `Destination: ${orderDetails.destination}`;
    // allRequest.appendChild(destination);

    // const price = document.createElement('div');
    // price.textContent = `Price: $${orderDetails.price}`;
    // allRequest.appendChild(price);

    // const senderName = document.createElement('div');
    // senderName.textContent = `Sender Name: ${orderDetails.senderName}`;
    // allRequest.appendChild(senderName);

    // document.querySelector('.request-card').appendChild(div);


    
});

// Assuming pendingRequest is updated elsewhere
// const pendingRequest = [...];

// You can remove the loop for pending requests here as they are now handled inside the socket.on('orderConfirmed', ...) callback









// const allRequest = document.createElement('div')
// allRequest.classList.add('request-card');
// allRequest.id.add('order-request')
// document.getElementById('request-id').textContent = `Request ID: ${socket.id}`;
//     document.getElementById('current-location').textContent = `Current Location: ${orderDetails.currentLocation}`;
//     document.getElementById('destination').textContent = `Destination: ${orderDetails.destination}`;
//     document.getElementById('price').textContent = `Price: $${orderDetails.price}`;
//     document.getElementById('sender-name').textContent = `Sender Name: ${orderDetails.senderName}`;







    
//     document.getElementById('request-id').textContent = `Request ID: ${socket.id}`;
//     document.getElementById('current-location').textContent = `Current Location: ${orderDetails.currentLocation}`;
//     document.getElementById('destination').textContent = `Destination: ${orderDetails.destination}`;
//     document.getElementById('price').textContent = `Price: $${orderDetails.price}`;
//     document.getElementById('sender-name').textContent = `Sender Name: ${orderDetails.senderName}`;



//     // Function to update UI with order details
//     function updateRequest(orderDetails) {
//     document.getElementById('request-id').textContent = `Request ID: ${socket.id}`;
//     document.getElementById('current-location').textContent = `Current Location: ${orderDetails.currentLocation}`;
//     document.getElementById('destination').textContent = `Destination: ${orderDetails.destination}`;
//     document.getElementById('price').textContent = `Price: $${orderDetails.price}`;
//     document.getElementById('sender-name').textContent = `Sender Name: ${orderDetails.senderName}`;
// }

// // Call the function with order details

// updateOrderUI(orderDetails);


