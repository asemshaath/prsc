import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    { 
      name: 'Air Compressor', 
      category: 'Industrial Equipment', 
      code: 'PS-AC-2000',
      image: '/images/air-compressor.png',
      description: 'A portable, heavy‐duty air compressor ideal for powering pneumatic tools on the jobsite.'
    },
    { 
      name: 'Safety Glasses', 
      category: 'Personal Protective Equipment', 
      code: 'PS-SG-500',
      image: '/images/safety-glasses.png',
      description: 'Industrial safety glasses designed to meet ANSI standards for eye protection in demanding work environments.'
    },
    { 
      name: 'Work Gloves', 
      category: 'Personal Protective Equipment', 
      code: 'PS-WG-350',
      image: '/images/gloves.png',
      description: 'Durable, cut‐resistant gloves suitable for handling rough materials and equipment safely.'
    },
    { 
      name: 'Random Orbital Sander', 
      category: 'Power Tools', 
      code: 'PS-ROS-750',
      image: '/images/idk.png',
      description: 'A power sander that provides efficient material removal with minimal surface damage, ideal for finishing applications.'
    },
    { 
      name: 'HVAC Filter', 
      category: 'HVAC Supplies', 
      code: 'PS-HF-100',
      image: '/images/hvac.png',
      description: 'An industrial-grade filter designed to improve air quality by trapping dust, allergens, and particulates in HVAC systems.'
    },
    { 
      name: 'Industrial Storage Rack', 
      category: 'Storage Solutions', 
      code: 'PS-ISR-800',
      image: '/images/rack.png',
      description: 'A robust storage solution for organizing tools, parts, or materials in workshops and warehouses.'
    },
  ];

  return (
    <div>
      <section className="hero-section relative" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="hero-overlay absolute inset-0 flex items-center">
          <div className="container mx-auto text-white text-center">
            <h1 className="text-4xl md:text-5xl mb-3">Industrial Equipment & Safety</h1>
            <p className="text-xl md:text-2xl">High-quality components for workplace safety and efficiency</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-3xl">Industrial Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="product-card bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    className="w-full h-64 object-cover transform transition-transform duration-300 hover:scale-105"
                    alt={product.name}
                    loading="lazy"
                  />
                  <div className="product-badge absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-semibold mb-2">{product.name}</h5>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link 
                    to="/contact" 
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;