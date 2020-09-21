let removeCartItemButtons = document.getElementsByClassName("btn-danger");

for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  button.addEventListener("click", function (event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    totalprice();
  });
}

let plusbutton = document.getElementsByClassName("add");

for (let plus of plusbutton) {
  plus.addEventListener("click", function () {
    plus.nextElementSibling.innerHTML++;
    totalprice();
  });
}

let minusbutton = document.getElementsByClassName("minus-btn");
for (let i = 0; i < minusbutton.length; i++) {
  minusbutton[i].addEventListener("click", function () {
    if (minusbutton[i].previousElementSibling.innerHTML > 0) {
      minusbutton[i].previousElementSibling.innerHTML--;
    }
    totalprice();
  });
}

let wish = document.getElementsByClassName("btn-heart");
for (let wishbtn of wish) {
  wishbtn.addEventListener("click", function () {
    wishbtn.classList.toggle("successful");
  });
}

function totalprice() {
  let quantity = document.getElementsByClassName("cart-quantity-input");
  let prices = document.getElementsByClassName("price");
  //  console.log(prices[1].innerHTML.replaceAll("$", ""))
  let quantityprices = 0;
  for (let i = 0; i < prices.length; i++) {
    let pricenumber = parseFloat(prices[i].innerHTML.replaceAll("$", ""));
    //    console.log(pricenumber)
    quantityprices += parseFloat(quantity[i].innerHTML) * pricenumber;
  }
  document.getElementById("totalprice").innerHTML =
    parseFloat(quantityprices) + "" + "$";
}
