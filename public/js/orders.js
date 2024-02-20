const pendingRequest= [];

// Get all pending requests
function allRequest (id,currentLocation,destination,price,senderName){
    const newRequest = {id,currentLocation,destination,price,senderName}

    pendingRequest.push(newRequest);

    return newRequest;
}

// function requestExpired(id){

// }



module.exports= {
    allRequest

}




