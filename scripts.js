const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

document.getElementById("productName").innerHTML = urlParams.get("product_name");
document.getElementById("productPrice").innerHTML = urlParams.get("product_price");
document.getElementById("customerName").innerHTML = urlParams.get("customer_name");
document.getElementById("customerEmail").innerHTML = urlParams.get("customer_email");
document.getElementById("cardType").innerHTML = urlParams.get("card_type");
document.getElementById("cardNumber").innerHTML = urlParams.get("card_number");
document.getElementById("expirationDate").innerHTML = urlParams.get("expiration_date");