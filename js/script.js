document.getElementById("orderBtn").addEventListener("click", () => {
    alert("Thank you for choosing Pizza Hub! 🍕");
});

const cartButtons = document.querySelectorAll(".pizza-card button");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Pizza added to cart successfully! 🛒");
    });
});