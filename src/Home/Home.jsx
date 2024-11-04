import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Detils from '../Detils/Detils';

import productsData from '../../public/products.json'; // একটি ইমপোর্ট স্টেটমেন্ট রাখুন
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // JSON ডেটা লোড করা
    setProducts(productsData);
    setFilteredProducts(productsData); // প্রথমে সব প্রোডাক্ট দেখানোর জন্য
  }, []);

  // ক্যাটাগরি অনুযায়ী ফিল্টার করার ফাংশন
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* ক্যাটাগরি লিস্ট */}
      <main className="flex-grow flex p-8 mt-[80px]">
        <aside className="w-[15%] p-4 bg-gray-200 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>
              <button onClick={() => handleCategoryClick('All')} className="hover:text-purple-600">All Products</button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Laptops')} className="hover:text-purple-600">Laptops</button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Phones')} className="hover:text-purple-600">Phones</button>
            </li>
            <li>
              <button onClick={() => handleCategoryClick('Accessories')} className="hover:text-purple-600">Accessories</button>
            </li>
          </ul>
        </aside>

        {/* নির্দিষ্ট ক্যাটাগরির প্রোডাক্ট */}
        <div className="flex-grow p-4 bg-white rounded-lg ml-4">
          <h1 className="text-2xl font-bold mb-4">{selectedCategory} Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.product_id} className="p-4 border rounded-lg shadow">
                <img src={product.product_image} alt={product.product_title} className="w-full h-48 object-cover rounded mb-4" />
                <h3 className="text-lg font-semibold">{product.product_title}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="font-bold mt-2">${product.price}</p>
                <Link to="/detils" className='border border-black rounded-full mt-3 btn w-[130px] p-2 text-sm'>View Detils</Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
