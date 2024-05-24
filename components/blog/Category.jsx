"use client"
import React, { useState, useEffect } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://statecraft.in/wp-json/wp/v2/categories')
      .then(response => response.json())
      .then(categories => {
        setCategories(categories);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <ul className="style-none">
      {categories.map((category, index) => (
        <li key={index}>
          <a href="#">
            {category.name}
            <span className="float-end">({category.count})</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Category;
