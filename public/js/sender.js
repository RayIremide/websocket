// const socket = io()

// const orderForm = document.getElementById('orderForm');
//     orderForm.addEventListener('submit', function(e) {
//       e.preventDefault();
//       const currentLocation = document.getElementById('currentLocation').value;
//       const destination = document.getElementById('destination').value;
//       const price = document.getElementById('price').value;
//       const senderName = document.getElementById('senderName').value;

//       // Emit an 'order' event with the order data
//       socket.emit('order', { 
//         currentLocation: currentLocation,
//         destination: destination,
//         price: price,
//         senderName: senderName
//       });
      
//     //   // Clear the input fields after sending the order
//     //   document.getElementById('currentLocation').value = '';
//     //   document.getElementById('destination').value = '';
//     //   document.getElementById('price').value = '';
//     //   document.getElementById('senderName').value = '';
//     });

//     function previewOrder() {
//         const currentLocation = document.getElementById('currentLocation').value;
//         const destination = document.getElementById('destination').value;
//         const price = document.getElementById('price').value;
//         const senderName = document.getElementById('senderName').value;

//         document.getElementById('previewCurrentLocation').textContent = currentLocation;
//         document.getElementById('previewDestination').textContent = destination;
//         document.getElementById('previewPrice').textContent = price;
//         document.getElementById('previewSenderName').textContent = senderName;

//         document.getElementById('orderForm').style.display = 'none';
//         document.getElementById('orderPreview').style.display = 'block';
//     }

//     function editOrder() {
//         document.getElementById('orderForm').style.display = 'block';
//         document.getElementById('orderPreview').style.display = 'none';
//     }
  
//         // Emit an 'orderConfirmed' event with the order details to the server
//         socket.emit('orderConfirmed', { 
//           currentLocation: currentLocation,
//           destination: destination,
//           price: price,
//           senderName: senderName
//         });
    


const socket = io()
socket.emit('senderConnected');
const orderForm = document.getElementById('orderForm');
orderForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const currentLocation = document.getElementById('currentLocation').value;
  const destination = document.getElementById('destination').value;
  const price = document.getElementById('price').value;
  const senderName = document.getElementById('senderName').value;

  // Emit an 'order' event with the order data
  socket.emit('order', { 
    currentLocation: currentLocation,
    destination: destination,
    price: price,
    senderName: senderName
  });
});

function previewOrder() {
    const currentLocation = document.getElementById('currentLocation').value;
    const destination = document.getElementById('destination').value;
    const price = document.getElementById('price').value;
    const senderName = document.getElementById('senderName').value;

    document.getElementById('previewCurrentLocation').textContent = currentLocation;
    document.getElementById('previewDestination').textContent = destination;
    document.getElementById('previewPrice').textContent = price;
    document.getElementById('previewSenderName').textContent = senderName;

    document.getElementById('orderForm').style.display = 'none';
    document.getElementById('orderPreview').style.display = 'block';

    // Emit an 'orderConfirmed' event with the order details to the server
    socket.emit('orderConfirmed', { 
      currentLocation: currentLocation,
      destination: destination,
      price: price,
      senderName: senderName
    });
}

function editOrder() {
    document.getElementById('orderForm').style.display = 'block';
    document.getElementById('orderPreview').style.display = 'none';
}
