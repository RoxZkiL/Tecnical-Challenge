const products = require("../Database/database.json");

function getAllProducts() {
  return products;
}

function filterProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

function filterProductsByPrice(minPrice, maxPrice) {
  return products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
}

function filterPorductsByMinPrice(minPrice) {
  return products.filter((product) => product.price >= minPrice);
}

function filterPorductsByMaxPrice(maxPrice) {
  return products.filter((product) => product.price >= maxPrice);
}

function filterProductsByCondition(condition) {
  return products.filter((product) => product.condition === condition);
}

function filterProductsByTitle(title) {
  return products.filter((product) => product.title === title);
}

module.exports = {
  getAllProducts,
  filterProductsByCategory,
  filterProductsByPrice,
  filterProductsByCondition,
  filterPorductsByMinPrice,
  filterPorductsByMaxPrice,
  filterProductsByTitle,
};
