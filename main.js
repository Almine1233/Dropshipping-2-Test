const grid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts(){
  products.forEach(p=>{
    const card=document.createElement("div");
    card.className="product-card";
    card.innerHTML=`
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="price">$${p.price}</div>
      <a href="producto.html?id=${p.id}">
        <button>Ver producto</button>
      </a>
    `;
    grid.appendChild(card);
  });
}
cartCount.textContent=cart.length;
renderProducts();
