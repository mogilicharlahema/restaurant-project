import React from 'react';
import { images } from '../../constants';
import './NoMoreItems.css';

const NoMoreItems = () => (
  <div className="no-more-items-container">
    <img src={images.card} className="no-more-items-image" alt="No more items" />
  </div>
);

export default NoMoreItems;

