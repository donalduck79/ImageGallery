// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('/api/images');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="app">
      <h1>Image Gallery</h1>
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={image.title} />
      ))}
    </div>
  );
};

export default App;
