// Cart 

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
else{
    ready()
}

function ready(){
    // Remove item from cart
    var removeCartItemButtons = document.getElementsByClassName('btn-remove-cart')
    for(var i=0; i<removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem) 
    }

    // Quantity change
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i=0; i<quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    // Add item from cart
    var addToCartButtons = document.getElementsByClassName('add-to-cart-btn')
    for (var i=0; i<addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('purchase-btn')[0].addEventListener('click', purchaseClicked)
} 

// Remove item from cart
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove() 
    updateCartTotal()
} 

// Quantity change
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
} 

// Add to cart Btn
function addToCartClicked(event){
    var button = event.target
    var storeItem = button.parentElement.parentElement
    var title = storeItem.getElementsByClassName('item-title')[0].innerText
    var price = storeItem.getElementsByClassName('item-price')[0].innerText
    var imageSrc = storeItem.getElementsByClassName('item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
} 

// Cart section
function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title') 
    for(var i=0; i<cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
            alert('This item is already added to the cart!');
            return
        }
    } 

    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-remove-cart" type="button">REMOVE</button>
        </div>`

    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-remove-cart')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

// Update total bill  
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0] 
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for(var i=0; i<cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
        [0] 
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
    
// Form
function purchaseClicked(){
    var name = document.getElementById('fullname').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;

    if(name.length == '' || number.length == '' || email.length == '' || address.length == '') {
        alert("Please fill the form correctly !");
        return false;
    }

    if(name.length < 10){
        alert("Please enter the valid name !");
        return false;
    }

    if(isNaN(number) || number.length < 10){
        alert("Please enter the valid phone number !");
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 10){
        alert("Please enter the valid E-mail !");
        return false;
    }

    if(address.length < 10){
        alert("Please enter the valid address !");
        return false;
    }

    else{

        // displays the summary 
        document.getElementById("cartClone").innerHTML = localStorage.getItem("cart");
        document.getElementById("formSummaryView").style.display = 'block';
        document.getElementById("formSummaryView").innerHTML =	'<dl class="formSummary"><dt class="topic">~~~~~ Invoice Details ~~~~~</dt>'+
                                                        '<dt class="topic">Full Name: </dt>'+
                                                        '<dd class="value">'+name+'</dd>'+
                                                        '<dt class="topic">Contact Number: </dt>'+
                                                        '<dd class="value">'+number+'</dd>'+
                                                        '<dt class="topic">Email: </dt>'+
                                                        '<dd class="value">'+email+'</dd>'+
                                                        '<dt class="topic">Shipping Address: </dt>'+
                                                        '<dd class="value">'+address+'</dd></dl>'+
                                                        '<div class="alignCenter"><button class="okButton" type="button" value="submitted" onclick="clearAll(this.form)">OK</button></div>'
    }

}
    
// Clear
function clearAll(){
    alert("Thank you for your order. Your order will receive within 3-7 days. Please collect it at your doorstep.")
    document.getElementById("formSummaryView").style.display = 'none';
    document.getElementById("form").reset();
}
