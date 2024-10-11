import React from 'react';

const FeaturedProduct: React.FC = () => {
  return (
    <section className="flex items-center justify-center bg-white py-16 px-10">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src="https://i.pinimg.com/564x/a4/8f/f3/a48ff34121600a403b8e26ccac4af078.jpg" // Replace with the actual path to your image
          alt="Skin Bliss Smoothing Serum"
          className="w-[310px] h-[360px] object-cover rounded-full relative w-64 h-74 border border-black rounded-full"
        />
      </div>
      
      {/* Product Details */}
      <div className="ml-10 max-w-lg text-left">
        <h2 className="text-3xl font-semibold mb-2">Skin Bliss Smoothing Serum</h2>
        <hr className="w-10 border-t-2 border-gray-300 mb-4" />
        <p className="mb-6 text-gray-700 font-medium">
          Skin Bliss Smoothing serum is a naturally derived retinol-alternative serum to help smooth
          the appearance of fine lines and wrinkles while sealing in hydration. Bakuchiol, the key 
          ingredient, is sourced sustainably from the Ayurvedic Bauchi plant.
        </p>
        
<div className="flex justify-center md:justify-start">
<button className="bg-transparent border-2 border-purple-500 text-purple-500 rounded-full px-4 py-2 mr-2 hover:bg-purple-500 hover:text-white transition duration-300">
  Learn more
</button>
<button className="bg-purple-500 text-white rounded-full px-4 py-2 hover:bg-purple-700 transition duration-300">
  Buy now
</button>
</div>
      </div>
    </section>
  );
};

export default FeaturedProduct;


