// add iphone and update item number
function addQuantity(id) {
  let priviusNumber = parseFloat(document.getElementById(id).value);
  document.getElementById(id).value = priviusNumber + 1;
  let updateNumb = document.getElementById(id).value;
  return updateNumb;
}
function minusQuantity(id) {
  let priviusNumber = parseFloat(document.getElementById(id).value);
  document.getElementById(id).value = priviusNumber - 1;
  let updateNumb = document.getElementById(id).value;

  return updateNumb;
}
function UpdateiphonePrice(id, quantity, price) {
  let totalPrice = price * quantity;
  console.log(totalPrice);
  document.getElementById(id).innerText = totalPrice;
  totalPrice = parseFloat(document.getElementById(id).innerText);
  return totalPrice;
}

function subTotal() {
  const phoneInputValue = document.getElementById("iphone-count");
  const caseInputValue = document.getElementById("phone-cas-quantity");
  const subTotal = phoneInputValue.value * 340 + caseInputValue.value * 59;
  document.getElementById("sub-total").innerText = subTotal;
  return subTotal;
}

function addTax(subtotal) {
  let taxAmount = Math.round((subtotal / 100) * 15);
  document.getElementById("tax").innerText = taxAmount;
  return taxAmount;
}

function grandTotal(subtotal, tax) {
  let grandTotal = subtotal + tax;
  document.getElementById("total-amount").innerText = grandTotal;
}

// Iphone item count and update price
document.getElementById("add-iphone").addEventListener("click", function () {
  let itemQuantity = addQuantity("iphone-count");
  UpdateiphonePrice("iphone-price", itemQuantity, 340);
  let subtotal = subTotal();
  let tax = addTax(subtotal);
  grandTotal(subtotal, tax);
});

document.getElementById("minus-iphone").addEventListener("click", function () {
  let itemQuantity = minusQuantity("iphone-count");
  UpdateiphonePrice("iphone-price", itemQuantity, 340);
  let subtotal = subTotal();
  let tax = addTax(subtotal);
  grandTotal(subtotal, tax);
});

// Phone case update count and update price

document.getElementById("add-case").addEventListener("click", function () {
  let itemQuantity = addQuantity("phone-cas-quantity");

  UpdateiphonePrice("case-price", itemQuantity, 59);
  let subtotal = subTotal();
  let tax = addTax(subtotal);
  grandTotal(subtotal, tax);
});

document.getElementById("minus-case").addEventListener("click", function () {
  let itemQuantity = minusQuantity("phone-cas-quantity");
  UpdateiphonePrice("case-price", itemQuantity, 59);
  let subtotal = subTotal();
  let tax = addTax(subtotal);
  grandTotal(subtotal, tax);
});
