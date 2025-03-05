// Callback Hell Example
// Purpose: Simulates a sequence of asynchronous API calls.
const cart = ["shoes", "pant", "kurta"];

api.createOrder(cart, function () {
    api.proceedToPayment(function () {
        api.showOrderSummary(function () {
            api.updateWallet();
        });
    });
});

// Callback Hell is also known as Pyramid of Doom because of its nested structure.
// This can be resolved using Promises or Async/Await.