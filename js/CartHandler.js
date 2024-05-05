let priceTemplate = document.getElementById("priceTemplate");
function findCartLengthHandler() {
  return localStorage.getItem("ecom")
    ? JSON.parse(localStorage.getItem("ecom"))
    : [];
}
let cartTemp = document.getElementById("cart-temp");
let price = document.getElementById("price");
let totalPrice = document.getElementById("totalprice");

print();
//this is for continueshopping handler
function continueShoppingHandler()
{
  
  window.location.href='Product.html'
}
function deleteCart(id) {
  let newcartData = findCartLengthHandler().filter((item) => {
    return item.id != id;
  });
  localStorage.setItem("ecom", JSON.stringify(newcartData));
  window.location.reload();
}
function print() {
  let str = "";
  if (findCartLengthHandler().length > 0) {
    findCartLengthHandler().map((item) => {
      str += `  <tr>
        <td>${item.product_name}</td>
        <td>
          <img
            src=${item.images[0]}
            class="img-fluid" style="height: 55px; width: 55px;"
          />
        </td>
        <td>${item.price}</td>
        <td>${item.count}</td>
        <td><button class="btn btn-danger" onclick="deleteCart(${item.id})">Remove</button></td>
      </tr>`;
    });
    priceTemplate.classList.remove('hide');
  } else {
    str = `<div class="container">
      <div class="row" style="height: 50vh;">
        <div class="col d-flex flex-column justify-content-center align-items-center">
        <div>
        <h1>No Data In Cart</h1></div>
        
          <div>
          <button class="btn btn-primary" onclick="continueShoppingHandler()"> Continue shopping</button>
          </div>
        </div>
      </div>
     </div>`;
    priceTemplate.className = "hide";
  }

  cartTemp.innerHTML = str;
}
priceHandler();
function priceHandler() {
  // console.log(typeof findCartLengthHandler())
  let priceofproduct = findCartLengthHandler().reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);
  let sumofPrice = Math.ceil(priceofproduct) + 25;

  price.innerText = Math.ceil(priceofproduct);
  totalPrice.innerText = sumofPrice;
}
