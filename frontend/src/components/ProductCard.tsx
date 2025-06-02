import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="bg-white rounded shadow p-4 border w-full max-w-xs text-center">
      {product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-32 h-32 mx-auto object-contain mb-4"
        />
      ) : (
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500">
          No Image
        </div>
      )}
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
