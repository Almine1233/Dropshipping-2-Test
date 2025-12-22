let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id){
  cart.push(products.find(p=>p.id===id));
  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Producto añadido al carrito");
}

function renderCart(){
  const c=document.getElementById("cartItems");
  let total=0;
  cart.forEach((p,i)=>{
    total+=p.price;
    c.innerHTML+=`<p>${p.name} - $${p.price}</p>`;
  });
  document.getElementById("total").textContent=total.toFixed(2);
}
