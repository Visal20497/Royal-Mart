let product = [
  {
    id: 1,
    product_name: "Laptop",
    category: "Electronics",
    brand_name: "Dell",
    price: 999.99,
    images: ["https://cdn.dummyjson.com/product-images/6/1.png"],
    quantity: 10,
    arrival: true,
    count: 1,
  },
  {
    id: 2,
    product_name: "Smartphone",
    category: "Electronics",
    brand_name: "Apple",
    price: 799.99,
    images: ["https://cdn.dummyjson.com/product-images/1/1.jpg"],
    quantity: 20,
    arrival: false,
    count: 1,
  },
  {
    id: 3,
    product_name: "T-shirt",
    category: "Clothing",
    brand_name: "Nike",
    price: 29.99,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quantity: 50,
    arrival: true,
    count: 1,
  },
  {
    id: 4,
    product_name: "Headphones",
    category: "Electronics",
    brand_name: "Sony",
    price: 149.99,
    images: [
      "https://plus.unsplash.com/premium_photo-1680346528789-0ffcc13f5ebf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quantity: 30,
    arrival: false,
    count: 1,
  },
  {
    id: 5,
    product_name: "Sneakers",
    category: "Footwear",
    brand_name: "Nike",
    price: 89.99,
    images: [
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quantity: 40,
    arrival: true,
    count: 1,
  },
  {
    id: 6,
    product_name: "Watch",
    category: "Accessories",
    brand_name: "Rolex",
    price: 4999.99,
    images: [
      "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quantity: 5,
    arrival: false,
    count: 1,
  },
  {
    id: 7,
    product_name: "Camera",
    category: "Electronics",
    brand_name: "Canon",
    price: 799.99,
    images: [
      "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quantity: 15,
    arrival: false,
    count: 1,
  },
  {
    id: 8,
    product_name: "Jeans",
    category: "Clothing",
    brand_name: "Levi's",
    price: 59.99,
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quantity: 25,
    arrival: false,
    count: 1,
  },
  {
    id: 9,
    product_name: "Backpack",
    category: "Accessories",
    brand_name: "JanSport",
    price: 39.99,
    images: [
      "https://images.unsplash.com/photo-1621609764049-5ee1db3d7c35?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quantity: 35,
    arrival: false,
    count: 1,
  },
  {
    id: 10,
    product_name: "Desk",
    category: "Furniture",
    brand_name: "IKEA",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    quantity: 10,
    arrival: false,
    count: 1,
  },
];
const searchParams = new URLSearchParams(window.location.search);
let searchId = searchParams.get("id");
let details = document.getElementById("details");
let cart = [];
function setItem(data) {
  localStorage.setItem("ecom", JSON.stringify(data));
}
function getItem() {
  return localStorage.getItem("ecom")
    ? JSON.parse(localStorage.getItem("ecom"))
    : [];
}
function cartHandler(data) {
  let findCartData = product.find((item) => {
    return item.id == data;
  });
  cart = getItem();
  let findinDb = cart.find((item) => {
    return item.id == findCartData.id;
  });
  if (findinDb) {
    cart = cart.map((item) => {
      if (item.id == findCartData.id) {
        let incCout = ++item.count;
        return {
          ...item,
          count: incCout,
        };
      } else {
        return item;
      }
    });
  } else {
    cart.push(findCartData);
  }

  setItem(cart);
  window.location.reload();
}
print();

function print() {
  let findData = product.find((item) => {
    return item.id == searchId;
  });
  let str = "";
  if (findData) {
    str += ` <div class="col-md-5 ">
           <img src="${
             findData.images[0]
           }" class="img"  style="height:300px;"/>
           <div class=" m-3">
               <button class="btn btn-primary" id="cart" onclick="cartHandler(${
                 findData.id
               })">AddToCart</button>
           </div>
         
        </div>
        <div class="col-md-5">
           <p>Product Name :  ${findData.product_name}</p>
           <p>Brand Name :  ${findData.brand_name}</p>
           <p>category : ${findData.category}</p>
           <p> description : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam eligendi rem adipisci iusto pariatur est libero.</p>
           <p>Price : Rs. ${findData.price}</p>
           <p> In stock : ${
             findData.quantity > 0 ? `Available` : "<span>Out Of Stock</span>"
           }</p>
           
        </div>`;
  } else {
    str = "NO DATA MATCH";
  }
  details.innerHTML = str;
}
