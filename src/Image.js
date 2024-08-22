import React from 'react';
import product from './product';

const Image = () => {
  return <img src={product.imageURL} alt={product.name} style={{ width: '150px', height: '150px' }} />;
};

export default Image;
