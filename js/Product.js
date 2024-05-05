let product=[
    {
        "id": 1,
        "product_name": "Laptop",
        "category": "Electronics",
        "brand_name": "Dell",
        "price": 999.99,
        "images": [
            "https://cdn.dummyjson.com/product-images/6/1.png"
        ],
        "quantity": 10,
        "arrival": true
    },
    {
        "id": 2,
        "product_name": "Smartphone",
        "category": "Electronics",
        "brand_name": "Apple",
        "price": 799.99,
        "images": [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
        ],
        "quantity": 20,
        "arrival": false
    },
    {
        "id": 3,
        "product_name": "T-shirt",
        "category": "Clothing",
        "brand_name": "Nike",
        "price": 29.99,
        "images": [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        "quantity": 50,
        "arrival": true
    },
    {
        "id": 4,
        "product_name": "Headphones",
        "category": "Electronics",
        "brand_name": "Sony",
        "price": 149.99,
        "images": [
            "https://plus.unsplash.com/premium_photo-1680346528789-0ffcc13f5ebf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        "quantity": 30,
        "arrival": false
    },
    {
        "id": 5,
        "product_name": "Sneakers",
        "category": "Footwear",
        "brand_name": "Nike",
        "price": 89.99,
        "images": [
            "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        "quantity": 40,
        "arrival": true
    },
    {
        "id": 6,
        "product_name": "Watch",
        "category": "Accessories",
        "brand_name": "Rolex",
        "price": 4999.99,
        "images": [
            "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        "quantity": 5,
        "arrival": false
    },
    {
        "id": 7,
        "product_name": "Camera",
        "category": "Electronics",
        "brand_name": "Canon",
        "price": 799.99,
        "images": [
            "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        "quantity": 15,
        "arrival": false
    },
    {
        "id": 8,
        "product_name": "Jeans",
        "category": "Clothing",
        "brand_name": "Levi's",
        "price": 59.99,
        "images": [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        "quantity": 25,
        "arrival": false
    },
    {
        "id": 9,
        "product_name": "Backpack",
        "category": "Accessories",
        "brand_name": "JanSport",
        "price": 39.99,
        "images": [
            "https://images.unsplash.com/photo-1621609764049-5ee1db3d7c35?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        "quantity": 35,
        "arrival": false
    },
    {
        "id": 10,
        "product_name": "Desk",
        "category": "Furniture",
        "brand_name": "IKEA",
        "price": 149.99,
        "images": [
            "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ],
        "quantity": 10,
        "arrival": false
    }
] 
let filter={
    sort:'1_10',
    brand:'',
    category:'',
    max:1001,
    min:11
}
let content=document.getElementById('content')
let category=document.getElementById('category')
let brand=document.getElementById('brand')
let search=document.getElementById('search')
let sort=document.getElementById('sort')
let clear=document.getElementById('clear')
let price=document.getElementById('price')
 //this is for the searching
 search.addEventListener('keyup',searchHandler)
 search.addEventListener('search',()=>{
    print(product)
 })
 function searchHandler()
 {
    let serachStirng=search.value
     let searchData= product.filter((item)=>{
        return item.brand_name.toLowerCase().trim().includes(serachStirng.toLowerCase().trim())
      }) 
       
      print(searchData)
 }


//this is for the priniting the card
print(product)
function print(arg)
{
    let str=''
    arg.slice(0,9).map((item)=>{
        
            str+=`   <div class="col-md-3 m-2">
            <div class="card">
               <div class="card-body">
                   <img src="${item.images[0]}"  class="img-fluid"/>
                   <p><b>${item.product_name}</b></p>
                   <p>${item.category}</p>
                   <p><strong>${item.brand_name}</strong></p>
                   <p>Rs. ${item.price} </p>
                   <button class="btn btn-primary" onclick="detailsPageHandler(${item.id})">More</button>
               </div>
            </div>
       </div>`
        
     
    })
    content.innerHTML=str
}
categoryHandler()


//this is for the category genration
function categoryHandler()
{
   let categoryData= product.map((item)=>{
        return item.category
    })
    let str=''
    let uniqueArray=[... new Set(categoryData)]
    uniqueArray.map((item)=>{
        str+=`<button class="link" value="${item}" onclick="categoryValueHandler(event)">${item}</button> <br/>`
    })
  
    category.innerHTML=str
}
brandHandler()
//this is for the brand genration
function brandHandler()
{
    
   let brandData= product.map((item)=>{
    return item.brand_name
})
let str=''
let uniqueArray=[... new Set(brandData)]
uniqueArray.map((item)=>{
    str+=`<button class="link" value="${item}" onclick="brandValueHandler(event)">${item}</button> <br/>`
})

brand.innerHTML=str
}
//category value handler
function categoryValueHandler(arg)
{
     filter.category=arg.target.value
     console.log(filter)
     filterHandler()
}
//brand value handler
function brandValueHandler(arg)
{
     filter.brand=arg.target.value
     console.log(filter)
     filterHandler()
}
 
 //sorting value handler
sort.addEventListener('change',sortHandler)
  function sortHandler()
  {
       filter.sort=sort.value 
        filterHandler()
  }

  price.addEventListener('change',()=>{
    filter.max=price.value
    let rangeData=document.getElementById('rangeData')
    rangeData.innerText=price.value
    filterHandler()
  })

  //this is for filteration
  function filterHandler()
  {
    let filterArray=[...product]
    if(filter.sort=="1_10")
    {
          filterArray.sort((a,b)=>{
              return a.price-b.price
          })
    }
    if(filter.sort=="10_1")
    {
        filterArray.sort((a,b)=>{
            return b.price-a.price
        })  
    }
    if(filter.sort=="Z_A")
    {
        filterArray.sort(function(a, b) {
            const nameA = a.product_name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.product_name.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
            return 0;
          });   
    }
    if(filter.sort=="A_Z")
    {
        filterArray.sort(function(a, b) {
            const nameA = a.product_name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.product_name.toUpperCase(); // ignore upper and lowercase
            if (nameA > nameB) {
              return 1;
            }
            if (nameA < nameB) {
              return -1;
            }
            return 0;
          });  
    }
     if(filter.brand)
     {
        filterArray=filterArray.filter((item)=>{
            return item.brand_name==filter.brand
        })
     }
     if(filter.category)
     {
        filterArray=filterArray.filter((item)=>{
            return item.category==filter.category
        })
     }
     if(filter.max || filter.min)
        {
            filterArray=filterArray.filter((item)=>{
                return (item.price<filter.max)
            })
        }
      print(filterArray)
  }
  
  //this is for the clear filter
  clear.addEventListener('click',()=>{
    window.location.reload()
  })

  //this is for the single details page
  function detailsPageHandler(id)
{
    
    window.location.href=`DetailsPage.html?id=${id}`
}

