const products = [
  { name: 'Phone', category: 'electronics', price: 50000, rating: 4.5 },
  { name: 'Laptop', category: 'electronics', price: 100000, rating: 4.7 },
  { name: 'Shirt', category: 'clothes', price: 700, rating: 4.1 },
  { name: 'Jeans', category: 'clothes', price: 1000, rating: 4.3 }
];

const container = document.getElementById('productContainer');
const categoryFilter = document.getElementById('categoryFilter');
const sortPrice = document.getElementById('sortPrice');

function displayProducts(items) {
  container.innerHTML = '';
  items.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<h3>${p.name}</h3><p>Category: ${p.category}</p><p>Price: $${p.price}</p><p>Rating: ${p.rating}</p>`;
    container.appendChild(div);
  });
}

function filterAndSort() {
  let filtered = [...products];

  if (categoryFilter.value !== 'all') {
    filtered = filtered.filter(p => p.category === categoryFilter.value);
  }

  if (sortPrice.value === 'low') {
    filtered.sort((a,b) => a.price - b.price);
  } else if (sortPrice.value === 'high') {
    filtered.sort((a,b) => b.price - a.price);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener('change', filterAndSort);
sortPrice.addEventListener('change', filterAndSort);

window.addEventListener('load', () => displayProducts(products));
