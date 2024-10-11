import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'The Importance of Skincare',
    excerpt: 'Skincare is not just a luxury; it is a necessity for maintaining healthy skin.',
    date: 'October 10, 2024',
    slug: 'importance-of-skincare',
  },
  {
    id: 2,
    title: 'Top 5 Natural Ingredients for Your Skin',
    excerpt: 'Discover the top 5 natural ingredients that can benefit your skin immensely.',
    date: 'October 8, 2024',
    slug: 'natural-ingredients-for-skin',
  },
  {
    id: 3,
    title: 'How to Create a Skincare Routine',
    excerpt: 'Learn how to create an effective skincare routine tailored to your skin type.',
    date: 'October 5, 2024',
    slug: 'skincare-routine',
  },
  {
    id: 4,
    title: 'The Benefits of Hydration for Skin Health',
    excerpt: 'Understanding the impact of hydration on skin health and appearance.',
    date: 'October 1, 2024',
    slug: 'hydration-for-skin',
  },
  {
    id: 5,
    title: 'Sunscreen: Your Skin’s Best Friend',
    excerpt: 'Learn why applying sunscreen daily is essential for skin protection.',
    date: 'September 28, 2024',
    slug: 'sunscreen-skin-friend',
  },
  {
    id: 6,
    title: 'Understanding Different Skin Types',
    excerpt: 'A guide to help you identify your skin type and its specific needs.',
    date: 'September 25, 2024',
    slug: 'understanding-skin-types',
  },
  {
    id: 7,
    title: 'DIY Face Masks for Every Skin Type',
    excerpt: 'Explore some easy-to-make face masks for various skin types.',
    date: 'September 20, 2024',
    slug: 'diy-face-masks',
  },
  {
    id: 8,
    title: 'Tips for Maintaining Healthy Skin During Winter',
    excerpt: 'Winter can be tough on your skin; here are some tips to keep it hydrated.',
    date: 'September 15, 2024',
    slug: 'winter-skin-care-tips',
  },
];

const Blog = () => {
  return (
    <div className="bg-[#f3f4f6] p-10">
      <h1 className="text-4xl font-bold text-center mb-6 text-purple-700">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-500 mb-4">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-purple-600 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
