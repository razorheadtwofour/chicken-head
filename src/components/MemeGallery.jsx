import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import chickenhead1 from '../pictures/chicken1.jpg';
import chickenhead2 from '../pictures/chicken2.jpg';
import chickenhead3 from '../pictures/chicken3.jpg';
import chickenhead4 from '../pictures/chicken4.jpg';
import chickenhead5 from '../pictures/chicken5.jpg';
import chickenhead6 from '../pictures/chicken6.jpg';
import chickenhead7 from '../pictures/chicken7.jpg';
import chickenhead8 from '../pictures/chicken8.jpg';
import chickenhead9 from '../pictures/chicken9.jpg';
import chickenhead10 from '../pictures/chicken10.jpg';

const images = [
  chickenhead1, chickenhead2, chickenhead3, chickenhead4, chickenhead5,
  chickenhead6, chickenhead7, chickenhead8, chickenhead9, chickenhead10
];

function MemeGallery() {
  return (
    <div className="container mt-4">
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className={`photo photo-${index + 1}`}>
              <img src={image} alt={`Chicken head ${index + 1}`} className="img-fluid fixed-size" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemeGallery;
