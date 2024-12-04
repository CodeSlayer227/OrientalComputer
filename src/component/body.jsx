import React from 'react';
import './body.css';
import images from '../Data/imageData'; // Ensure images is an array
import contentData from '../Data/contentData'; // Ensure contentData has contentTitle & contentSubtitle
import image from './orderNow.webp'

export default function BodyContent() {
  const itemsToDisplay = 6;

  return (
    <div className='contentBox'>
      {Array.from({ length: itemsToDisplay }).map((_, index) => (
        <div key={index} className="productItem">
         
         <h1>{contentData.contentTitle[index % contentData.contentTitle.length]}</h1>
          <h2>{contentData.contentSubtitle[index % contentData.contentSubtitle.length]}</h2>
          <img src={images[index % images.length]} alt={`Product ${index + 1}`} />

          <h3>Spesifikasi</h3>
          
          <p>
            <strong>Memori (RAM)   :</strong> {""+contentData.contentSpecifications[index % contentData.contentSpecifications.length].ram }
          </p>
          <p>
            <strong>Penyimpanan    :</strong> {contentData.contentSpecifications[index % contentData.contentSpecifications.length].storage }
          </p>
          <p>
            <strong>Layar:</strong> {contentData.contentSpecifications[index % contentData.contentSpecifications.length].display }
          </p>
          <p>
            <strong>Baterai dan Daya:</strong> {contentData.contentSpecifications[index % contentData.contentSpecifications.length].battery }
          </p>
          <p>
            <strong>Port:</strong> {contentData.contentSpecifications[index % contentData.contentSpecifications.length].ports }
          </p>
          <p>
            <strong>Kamera dan Audio:</strong> {contentData.contentSpecifications[index % contentData.contentSpecifications.length].cameraAudio }
          </p>
          <p>
            <strong>Konektivitas Nirkabel:</strong> {contentData.contentSpecifications[index % contentData.contentSpecifications.length].wireless }
          </p>
          <p>
            <strong>Sistem Operasi:</strong> {contentData.contentSpecifications[index % contentData.contentSpecifications.length].os }
          </p>
          <p>
            <strong>Dimensi dan Berat:</strong> {contentData.contentSpecifications[index % contentData.contentSpecifications.length].dimensions }
          </p>
          <h1>{contentData.contentSpecifications[index % contentData.contentSpecifications.length].price   }</h1>
          <div className="order-now">
         <a href='https://www.linktr.ee/orientalcomputer'><img src={image} alt="Order Now" /></a>
          
            
            
          </div>
          
        </div>
      ))}
    </div>
  );
}
