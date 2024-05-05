let cartTempx=document.getElementById('cart')
 
cartLengthHandler()
function findCartLengthHandler()
{
    return localStorage.getItem('ecom')?JSON.parse(localStorage.getItem('ecom')):[]
}
function cartLengthHandler()
{
     cartTempx.innerText=findCartLengthHandler().length
}