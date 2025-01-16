import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventCategories = ({ setFilteredEvents }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch categories from the backend
  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Handle category change
  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);

    if (category === '') {
      setFilteredEvents([]); // Reset when no category is selected
    } else {
      try {
        const response = await axios.get(`http://localhost:3000/api/events/category/${category}`);
        setFilteredEvents(response.data);
      } catch (error) {
        console.error('Error fetching events by category:', error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h4>Filter by Category</h4>
      <select
        className="form-control"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EventCategories;
