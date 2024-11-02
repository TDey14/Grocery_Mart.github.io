document.getElementById('orderForm').addEventListener('submit', function(event) {

    event.preventDefault(); 

 

    

    const customerName = document.getElementById('customerName').value;

    const mobile = document.getElementById('mobile').value;

    const address = document.getElementById('address').value;

    const groceryItems = document.getElementById('groceryItems').value;

    const deliveryDate = document.getElementById('deliveryDate').value;

    const specialInstructions = document.getElementById('specialInstructions').value;

 

    
    const messageDiv = document.getElementById('message');

    messageDiv.innerHTML = `<strong>Thank you, ${customerName}!</strong><br>

                            Your order for the following items has been submitted:<br>

                            <strong>Items:</strong> ${groceryItems}<br>

                            <strong>Delivery Address:</strong> ${address}<br>

                            <strong>Preferred Delivery Date:</strong> ${deliveryDate}<br>

                            <strong>Special Instructions:</strong> ${specialInstructions || 'None'}<br>`;

    messageDiv.style.color = 'green';

 



    document.getElementById('orderForm').reset();

});