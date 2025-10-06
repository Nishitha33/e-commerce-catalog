// ✅ Nested Document Structure (like MongoDB)
const catalogData = [
  {
    categoryId: 1,
    categoryName: "Electronics",
    subcategories: [
      {
        subcategoryId: 11,
        name: "Smartphones",
        products: [
          {
            productId: 101,
            name: "iPhone 15 Pro",
            price: 1299,
            variants: [
              { color: "Black", storage: "128GB" },
              { color: "Silver", storage: "256GB" }
            ]
          },
          {
            productId: 102,
            name: "Samsung Galaxy S24",
            price: 999,
            variants: [
              { color: "Gray", storage: "128GB" },
              { color: "Blue", storage: "512GB" }
            ]
          }
        ]
      },
      {
        subcategoryId: 12,
        name: "Laptops",
        products: [
          {
            productId: 103,
            name: "MacBook Air M3",
            price: 1599,
            variants: [
              { color: "Silver", ram: "8GB", storage: "256GB" },
              { color: "Gold", ram: "16GB", storage: "512GB" }
            ]
          }
        ]
      }
    ]
  },
  {
    categoryId: 2,
    categoryName: "Home Appliances",
    subcategories: [
      {
        subcategoryId: 21,
        name: "Refrigerators",
        products: [
          {
            productId: 201,
            name: "LG Double Door",
            price: 700,
            variants: [
              { capacity: "250L", color: "Silver" },
              { capacity: "350L", color: "Black" }
            ]
          }
        ]
      },
      {
        subcategoryId: 22,
        name: "Washing Machines",
        products: [
          {
            productId: 202,
            name: "Samsung Front Load",
            price: 550,
            variants: [
              { capacity: "6kg", color: "White" },
              { capacity: "7kg", color: "Silver" }
            ]
          }
        ]
      }
    ]
  }
];

// ✅ Render Function
function renderCatalog(catalog) {
  const container = document.getElementById("catalog");
  container.innerHTML = "";

  catalog.forEach(category => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = `📦 ${category.categoryName}`;
    categoryDiv.appendChild(categoryTitle);

    category.subcategories.forEach(subcat => {
      const subDiv = document.createElement("div");
      subDiv.classList.add("subcategory");

      const subTitle = document.createElement("h3");
      subTitle.textContent = `📁 ${subcat.name}`;
      subDiv.appendChild(subTitle);

      subcat.products.forEach(prod => {
        const prodDiv = document.createElement("div");
        prodDiv.classList.add("product");

        prodDiv.innerHTML = `
          <h4>🛒 ${prod.name}</h4>
          <p><b>Price:</b> $${prod.price}</p>
        `;

        const variantDiv = document.createElement("div");
        variantDiv.classList.add("variants");

        prod.variants.forEach(v => {
          const vItem = document.createElement("div");
          vItem.classList.add("variant");
          vItem.textContent = `• ${Object.entries(v).map(([k, val]) => `${k}: ${val}`).join(", ")}`;
          variantDiv.appendChild(vItem);
        });

        prodDiv.appendChild(variantDiv);
        subDiv.appendChild(prodDiv);
      });

      categoryDiv.appendChild(subDiv);
    });

    container.appendChild(categoryDiv);
  });
}

// ✅ Initialize Catalog
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog(catalogData);
});
