document.addEventListener("DOMContentLoaded", function () {
    const ticketType = document.getElementById("ticket-type");
    const ticketQuantity = document.getElementById("ticket-quantity");
    const totalPrice = document.getElementById("total-price");
    const form = document.getElementById("ticket-form");
    const successMessage = document.getElementById("success-message");

   
    function updateTotal() {
        let pricePerTicket = parseFloat(ticketType.value);
        let quantity = parseInt(ticketQuantity.value);
        totalPrice.textContent = `$${(pricePerTicket * quantity).toFixed(2)}`;
    }

    ticketType.addEventListener("change", updateTotal);
    ticketQuantity.addEventListener("input", updateTotal);

    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
       
        setTimeout(() => {
            successMessage.style.display = "block";
            form.reset();
            totalPrice.textContent = "$99"; 
        }, 1000);
    });
});