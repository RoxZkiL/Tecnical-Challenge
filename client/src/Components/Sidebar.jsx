/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Sidebar.css";

export const Sidebar = ({
  products,
  selectedCategories,
  setSelectedCategories,
  selectedCondition,
  setSelectedCondition,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  searchQuery,
  setSearchQuery,
}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(getUniqueCategories(products));
  }, [products]);

  const getUniqueCategories = (data) => {
    return [...new Set(data.map((item) => item.category))];
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCategories((prevSelectedCategories) => {
      if (checked) {
        return [...prevSelectedCategories, value];
      } else {
        return prevSelectedCategories.filter((category) => category !== value);
      }
    });
  };

  const handleConditionChange = (event) => {
    setSelectedCondition(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    products.some((product) => product.category === category)
  );

  return (
    <div className="sidebar-container">
      <h2 className="main-title">Filtros</h2>
      <div className="category-elements">
        <h3 className="category-title">Categorías</h3>
        {filteredCategories.map((category) => (
          <div key={category}>
            <label>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
              />
              {category}
            </label>
          </div>
        ))}
      </div>
      <div className="condition-filter">
        <h3>Condición</h3>
        <label>
          <input
            type="checkbox"
            value="new"
            checked={selectedCondition === "new"}
            onChange={handleConditionChange}
          />
          Nuevo
        </label>
        <label>
          <input
            type="checkbox"
            value="used"
            checked={selectedCondition === "used"}
            onChange={handleConditionChange}
          />
          Usado
        </label>
      </div>
      <div className="price-filter">
        <h3>Precio</h3>
        <input
          type="text"
          placeholder="Mínimo"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <label>-</label>
        <input
          type="text"
          placeholder="Máximo"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
        <input type="submit" placeholder="Máximo" value=">" />
      </div>
      <div className="search-filter">
        <h3>Búsqueda</h3>
        <input
          type="text"
          placeholder="Busque su producto"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
        <input type="submit" value="Buscar" />
      </div>
    </div>
  );
};
