import React from 'react';
import Image from 'next/image';

const productData = {
    productId1: '/Paris.jpg',
  };
  

export default function Checkout() {
    return (
        <div>
      <h1>Checkout Page</h1>
      <a href={productData["productId1"]} target="_blank" rel="noopener noreferrer">
        <Image
          src={productData["productId1"]}
          alt="hero"
          width={200}
          height={300}
          layout="fixed"
        />
      </a>
      </div>
      
    );
  };
  
  