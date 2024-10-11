// src/pages/about.tsx
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-[#f3f4f6] p-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-purple-700">About Us</h1>
      <p className="text-lg mb-4 text-gray-700">
        Skin Bliss is dedicated to providing the best skincare products tailored to your unique skin needs. 
        We believe that everyone deserves to feel confident and beautiful in their own skin.
      </p>
      <p className="text-lg mb-4 text-gray-700">
        Founded in 2022, our mission is to empower individuals by providing quality products that promote healthy skin. 
        Our vision is to become a trusted source for skincare enthusiasts around the globe, 
        offering products that are not only effective but also ethically sourced.
      </p>
      <h2 className="text-3xl font-semibold mt-6 mb-2 text-purple-600">Our Values</h2>
      <ul className="list-disc ml-5 mb-4 text-gray-700">
        <li>Quality: We ensure every product meets high standards.</li>
        <li>Integrity: We are transparent about our ingredients and sourcing.</li>
        <li>Customer Focus: Our customers are at the heart of everything we do.</li>
        <li>Innovation: We continuously strive to improve our product offerings.</li>
      </ul>
      <h2 className="text-3xl font-semibold mt-6 mb-2 text-purple-600">Meet Our Team</h2>
      <p className="text-lg mb-4 text-gray-700">
        Our team consists of skincare experts, dermatologists, and beauty enthusiasts who work tirelessly 
        to curate the best products for you. We are passionate about skincare and are here to help you 
        every step of the way.
      </p>
      
      {/* Add a sample image */}
      <div className="my-6 flex justify-center">
        <Image 
          src="/images/about.jpg"
          alt="Our Team" 
          width={600} 
          height={400} 
          className="rounded-lg shadow-lg"
        />
      </div>
      
      <h2 className="text-3xl font-semibold mt-6 mb-2 text-purple-600">Our Story</h2>
      <p className="text-lg mb-4 text-gray-700">
        It all started with a simple idea: to create a brand that prioritizes skin health over everything else. 
        We noticed a gap in the market for products that are both effective and safe for all skin types, 
        and decided to take action. Our products are designed with love and care, ensuring that they cater to 
        every individuals skin journey.
      </p>

      {/* Add a closing statement */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold text-purple-600">Join Us on Our Journey!</h3>
        <p className="text-lg text-gray-700 mt-2">
          Together, let’s explore the world of skincare and discover the perfect products for you.
        </p>
      </div>
    </div>
  );
};

export default About;
