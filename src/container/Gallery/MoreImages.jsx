// MoreImages.js
import React from 'react';
import { images } from '../../constants';
import './MoreImages.css';

const MoreImages = () => (
  <div className="more-images-container">
    {/* <h1 className="headtext__cormorant">More Images</h1> */}
    <div className="more-images-gallery">
      {[images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05,images.gallery06,images.gallery07,images.gallery08,images.gallery09,images.gallery11,images.gallery13,images.gallery14].map((image, index) => (
        <div className="more-images-card" key={`more_image-${index + 1}`}>
          <img src={image} alt={`more_image-${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
);

export default MoreImages;
