import React from 'react';

interface CartProps {
  image: string;
  title: string;
  address: string;
  price: string;
}

const Cart: React.FC<CartProps> = ({ image, title, address, price }) => {
  return (
    <div className="flex flex-col p-6 gap-2 hover:bg-gray-100 transition-all duration-300">
      <img src={image} alt={title} className="hover:scale-105 transition-all duration-300" />
      <p className="font-bold text-[16px] hover:text-blue-600 transition-all duration-300">{title}</p>
      <p className="text-[14px] text-[#71717A] hover:text-gray-600 transition-all duration-300">{address}</p>
      <p className="font-bold text-[16px] hover:text-green-600 transition-all duration-300">{price}</p>
    </div>
  );
};

export default Cart;