

import React from 'react';

const ProductSection: React.FC = () => {
  return (
    <section className="bg-secondary px-10 py-20 text-center">
      <h2 className="text-4xl font-semibold mb-4">New Summer Collection</h2>
      <div className="flex items-center justify-center h-screen">
  <img 
    className="w-[600px] h-[450px] object-cover" 
    src="https://akns-images.eonline.com/eol_images/Entire_Site/2022926/rs_1024x759-221026114925-1024-anti-redness-skincare9.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top" 
    alt="description" 
  />
</div>
      <div className="flex justify-left mb-10 ">
        <button className="mt-4 px-2 py-2 w-60 border border-primary rounded-full text-primary hover:bg-primary hover:text-white bg-[#047857] text-white">
          Explore Now &rarr;
        </button>
      </div>
      <h3 className="text-2xl font-semibold mb-6">POPULAR RIGHT NOW</h3>
      <div className="flex justify-center space-x-4 mb-10  ">
        {['Serums', 'Moisturizer', 'Lipbalm', 'Facewash', 'Face Mask'].map((tag) => (
          <button
            key={tag}
            className="px-4 py-2 bg-white-100 text-black-600  border border-black rounded-full w-35 rounded-full hover:bg-primary hover:text-[#c084fc] "
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="flex justify-center space-x-7" >
        {[
          { src: 'https://microless.com/cdn/products/37b7e1ac56938a97991719927a23176a-md.jpg', title: 'Skin Bliss AHA + BHA Exfoliating Glow Serum' },
          {  src: 'https://img.freepik.com/premium-psd/skin-care-moisturizing-product-advertisement_99236-294.jpg?w=740', title: 'Skin Bliss moisturizing cosmetic premium '  },
          { src: 'https://cdn.prod.website-files.com/6256995755a7ea0a3d8fbd11/633b057a2f551a5fce434aa7_sknc-6.jpg', title: 'Skin Bliss Clarifying Cleanser' },
          { src: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-260w,f_auto,q_auto:best/newscms/2023_18/1858069/screen_shot_2022-03-25_at_3-50-19_pm.png', title: 'Skin Bliss 10% Niacinamide Night Mask' },
        ].map((product, index) => (
          <div key={index} className="text-center">
            <img src={product.src} alt={product.title}
             className=" w-40 h-44 mx-auto rounded-full shadow-lg border border-black rounded-full" />
            <p className="mt-4 text-lg font-semibold">{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
