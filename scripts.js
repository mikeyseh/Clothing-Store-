const helpers = {
    hidden: function (element) {
        element.classList.add("u-hidden");
    },
    display: function (element) {
        element.classList.remove("u-hidden");
    },
    checkForExistence: function (element, errorType) {
        if (element) {
            return element;
        } else {
            throw errorMessages[errorType];
        }
    }
};

const errorMessages = {
    behaviorMsg: 'No data-behavior defined on the openChatContainer element.',
    availableMsg: 'No available msg defined, please add openChatLabel-available ID on the available label.',
    unavailableMsg: 'No unavailable msg defined, please add openChatLabel-unavailable ID on the unavailable label.',
    chatButton: 'No chat button defined, please add openChatButton.'
};

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    // Simulating a product being added to the cart
    const product = {
        id: productId,
        name: "Product " + productId,
        price: 100 + productId * 50
    };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart-count').innerText = `${cart.length} items in cart`;
}

function updateCartDisplay() {
    const cartCount = cart.length;
    document.getElementById('cart-count').innerText = `${cartCount} items in cart`;
}

updateCartDisplay();
