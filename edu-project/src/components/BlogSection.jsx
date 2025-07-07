// BlogSection.js
import React from 'react';
import BlogCard from './BlogCard';

const blogData = [
  {
    image: 'https://img.freepik.com/free-photo/young-woman-sitting-floor-using-laptop_23-2148677737.jpg',
    author: 'Admin',
    date: 'Jan. 18, 2021',
    comments: 3,
    title: 'Build your Dream Software & Engineering Career',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    image: 'https://img.freepik.com/free-photo/businessman-analyzing-documents_23-2148893470.jpg',
    author: 'Admin',
    date: 'Apr. 25, 2022',
    comments: 5,
    title: 'Build your Dream Software & Engineering Career',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  },
  {
    image: 'https://img.freepik.com/free-photo/happy-business-team-office_23-2148893475.jpg',
    author: 'User',
    date: 'May. 15, 2022',
    comments: 10,
    title: 'Build your Dream Software & Engineering Career',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
  }
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-orange-600 font-semibold">OUR BLOG</p>
        <h2 className="text-3xl font-bold mb-10">Recent From Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
