import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-primary flex items-center justify-between px-10 py-20 text-white bg-[#d8b4fe] text-white h-screen flex items-center justify-center">
      <div className="flex flex-col space-y-4">
      <h2 className="text-5xl font-semibold">
  Access to all kinds
  <span className="block mt-4"> {/* 'block' class se naya line aur 'mt-4' se gap */}
    of skincare products
  </span>
</h2>
        <p className="text-lg">A single store for all your needs.</p>
        <button className="mt-2 px-3 py-3 w-32 border border-white rounded-full text-white hover:bg-white hover:text-primary">
          Explore Now
        </button>
      </div>
      <div className="relative w-64 h-74 border border-black rounded-full">
        <img
          src="https://pharmacystories.gr/8999-xml_default/caudalie-vinoperfect-serum-eclat-anti-taches-oros-lampsis-30ml.jpg"
         
          className="w-[360px] h-[355px] object-cover rounded-full"
        />
   
      </div>
    </section>
  );
};

export default HeroSection;
