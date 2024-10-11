import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6  bg-[#d8b4fe] justify-center ">
      {/* Logo Section */}
      <div className="text-left mb-8">
        <h2 className="text-xl font-bold">SKIN BLISS.</h2>
        <hr className="border-t-4 border-[#f8fafc] w-100 mx-auto mt-6" />
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 border-b border-gray-400 pb-8">
        {/* Products */}
        <div>
          <h3 className="font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Skincare</a></li>
            <li><a href="#" className="hover:underline">Women</a></li>
            <li><a href="#" className="hover:underline">New In</a></li>
            <li><a href="#" className="hover:underline">Weekly Pick</a></li>
          </ul>
        </div>

        {/* Blog */}
        <div>
          <h3 className="font-semibold mb-3">Blog</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Dermatologist recs</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="font-semibold mb-3">Company Info</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Payment Options</a></li>
            <li><a href="#" className="hover:underline">Track Order</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-3">Follow us</h3>
          <div className="flex flex-col space-y-4">
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Links */}
      
      <div className="text-center space-x-6 bg-[#e9d5ff] w-34 h-34 p-6 text-lg">
        <a href="#" className="hover:underline">Data settings</a>
        <a href="#" className="hover:underline">Cookie settings</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms And Conditions</a>
        <a href="#" className="hover:underline">Imprint</a>
      </div>
    </footer>
  );
};

export default Footer;



























// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-primary text-black p-6">
//       <div className="flex justify-between">
//         <div>
//           <h3 className="font-bold">Products</h3>
//           <ul>
//             <li><a href="#" className="hover:underline">Serums</a></li>
//             <li><a href="#" className="hover:underline">Moisturizers</a></li>
//             <li><a href="#" className="hover:underline">Cleansers</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-bold">Blog</h3>
//           <ul>
//             <li><a href="#" className="hover:underline">Skincare Tips</a></li>
//             <li><a href="#" className="hover:underline">Our Story</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-bold">Company Info</h3>
//           <ul>
//             <li><a href="#" className="hover:underline">About Us</a></li>
//             <li><a href="#" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="font-bold">Follow Us</h3>
//           <ul className="flex space-x-4">
//             <li><a href="#"><i className="fab fa-facebook"></i></a></li>
//             <li><a href="#"><i className="fab fa-instagram"></i></a></li>
//             <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
