const productServices = require("../Services/productServices.js");

function getAllProducts(req, res) {
  const allProducts = productServices.getAllProducts();
  res.send(allProducts);
}

function filterProducts(req, res) {
  const { category, minPrice, maxPrice, condition, title } = req.query;

  let products = productServices.getAllProducts();

  if (category) {
    products = productServices.filterProductsByCategory(category);
  }

  if (minPrice && maxPrice) {
    products = productServices.filterProductsByPrice(
      parseFloat(minPrice),
      parseFloat(maxPrice)
    );
  }

  if (minPrice && !maxPrice) {
    products = productServices.filterPorductsByMinPrice(parseFloat(minPrice));
  }

  if (!minPrice && maxPrice) {
    products = productServices.filterPorductsByMinPrice(parseFloat(maxPrice));
  }

  if (condition) {
    products = productServices.filterProductsByCondition(condition);
  }

  if (title) {
    products = productServices.filterProductsByTitle(title);
  }

  if (!products.length) {
    products = "The product that you are looking for does not exist";
  }

  res.status(200).send(products);
}

module.exports = {
  getAllProducts,
  filterProducts,
};
