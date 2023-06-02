import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import "./Products.css";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedCondition !== "") {
      filtered = filtered.filter(
        (product) => product.condition === selectedCondition
      );
    }

    if (minPrice !== "") {
      filtered = filtered.filter(
        (product) => product.price >= parseFloat(minPrice)
      );
    }

    if (maxPrice !== "") {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(maxPrice)
      );
    }

    if (searchQuery !== "") {
      const searchQueryLowercase = searchQuery.toLowerCase();
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQueryLowercase)
      );
    }

    setFilteredProducts(filtered);
  }, [
    selectedCategories,
    selectedCondition,
    minPrice,
    maxPrice,
    searchQuery,
    products,
  ]);

  return (
    <div className="app-container">
      <div className="products-container">
        <h1 className="main-title">Lista de Productos</h1>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-grid">
              <h2 className="product-title">{product.title}</h2>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <p className="product-price">Precio: {product.price} $</p>
            </div>
          ))}
        </div>
      </div>
      <Sidebar
        products={products}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedCondition={selectedCondition}
        setSelectedCondition={setSelectedCondition}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};
