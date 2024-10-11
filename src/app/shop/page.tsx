import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Hydrating Face Cream',
    price: '$29.99',
    image: '/images.jpeg',
  },
  {
    id: 2,
    name: 'Nourishing Serum',
    price: '$39.99',
    image: '/serum.jpeg',
  },
  {
    id: 3,
    name: 'Revitalizing Facial Mask',
    price: '$19.99',
    image: '/facemask.jpeg',
  },
  {
    id: 4,
    name: 'Soothing Eye Cream',
    price: '$24.99',
    image: '/eyecream.jpeg',
  },
];

const Shop = () => {
  return (
    <div className="bg-[#f3f4f6] p-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-purple-700">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 text-center">
            <Image 
              src={product.image} 
              alt={product.name} 
              width={300} 
              height={300} 
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-md text-gray-600">{product.price}</p>
            <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
