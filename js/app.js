
function updatePrice(priceSetUp) {
    const memoryInput = document.getElementById('memory-price');
    // const memoryPriceR = memoryInput.innerText;
    const storageInput = document.getElementById('storage-price');
    const deliveryInput = document.getElementById('delivery-price');

    /* MEMORY */
    if (priceSetUp == 'regular-memory') {
        memoryInput.innerText = 0;

    }
    if (priceSetUp == 'premium-memory') {
        memoryInput.innerText = 180;

    }
    /* STORAGE */
    if (priceSetUp == 'regular-storage') {
        storageInput.innerText = 0;

    }
    if (priceSetUp == 'storage-512GB') {
        storageInput.innerText = 100;

    }
    if (priceSetUp == 'storage-1TB') {
        storageInput.innerText = 180;

    }
    /* DELIVERY-COST */
    if (priceSetUp == 'regular-00') {
        deliveryInput.innerText = 0;


    }
    if (priceSetUp == 'premium-20') {
        deliveryInput.innerText = 20;

    }
    // calculatetotal call
    calculateTotal();
};
/* -------------
CALCULATE TOTAL
--------------- */
function getInputValue(product) {
    const productInput = document.getElementById(product + '-price');
    const productPrice = parseInt(productInput.innerText);
    return productPrice;
}
function calculateTotal() {
    const bestTotal = getInputValue('best');
    const memoryTotal = getInputValue('memory');
    const storageTotal = getInputValue('storage');
    const deliveryTotal = getInputValue('delivery');
    const totalPrice = bestTotal + memoryTotal + storageTotal + deliveryTotal;
    // update on the html
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('max-price').innerText = totalPrice;

};

/* ------------
APPLY PROMOCODE
---------------*/
function applyPromo() {
    console.log('genaarating')
    const promoInput = document.getElementById('promo-input')
    const promoCode = promoInput.value;

    if (promoCode == 'stevekaku') {
        const totalpriceInput = document.getElementById('total-price');


        const totalPriceNumber = parseInt(totalpriceInput.innerText);
        const costInPercentaze = (totalPriceNumber / 100) * 20;
        const afterDiscountPrice = totalPriceNumber - costInPercentaze;

        //  update on the html
        document.getElementById('total-price').innerText = afterDiscountPrice;
        document.getElementById('max-price').innerText = afterDiscountPrice;
    }
};
/* -------------
    Memory start
--------------- */
// regular memory
document.getElementById('regular-memory').addEventListener('click', function () {

    updatePrice('regular-memory');
});
// premium memory
document.getElementById('premium-memory').addEventListener('click', function () {
    updatePrice('premium-memory');


});
/* --------------
    storage start
----------------- */
// regular storage
document.getElementById('regular-storage').addEventListener('click', function () {

    updatePrice('regular-storage');
});
// premium storage
document.getElementById('premium-storage').addEventListener('click', function () {
    updatePrice('storage-512GB');


});
//extra premium storage
document.getElementById('extra-premium-storage').addEventListener('click', function () {
    updatePrice('storage-1TB');


});

/* --------------
    Delivery Cost
----------------- */
// regular deliver
document.getElementById('delivery-regular').addEventListener('click', function () {
    console.log('cllick')
    updatePrice('regular-00');
});
// premium delivery
document.getElementById('delivery-premium').addEventListener('click', function () {
    updatePrice('premium-20');


});