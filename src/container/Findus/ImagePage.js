// src/container/ImagePage/ImagePage.js
import React from 'react';
import { images } from '../../constants';

const ImagePage = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    backgroundColor: 'black'  // Optional: Adds a background color for better visibility
  }}>
    <img
      src={images.visting}
      alt='Thank You'
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain',  // Maintains aspect ratio and fits within the container
        borderRadius: '20px'
      }}
    />
  </div>
);

export default ImagePage;

