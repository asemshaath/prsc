import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    { 
      name: 'Industrial Circuit Breaker', 
      category: 'Power Distribution', 
      code: 'PS-ICB-3200',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Heavy-duty 3-phase circuit breaker with 200A capacity for industrial applications'
    },
    { 
      name: 'Variable Frequency Drive', 
      category: 'Motor Control', 
      code: 'PS-VFD-750',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: '75kW VFD with advanced harmonic filtering for precise motor speed control'
    },
    { 
      name: 'Industrial PLC Controller', 
      category: 'Automation', 
      code: 'PS-PLC-5000',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22731c2eaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Programmable logic controller with 32 I/O points and Ethernet connectivity'
    },
    { 
      name: 'Power Monitoring Relay', 
      category: 'Monitoring', 
      code: 'PS-PMR-420',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Three-phase power monitoring relay with LCD display and RS485 communication'
    },
    { 
      name: 'Industrial Contactor', 
      category: 'Switching', 
      code: 'PS-IC-125A',
      image: 'https://images.unsplash.com/photo-1581092918170-1df6d0cb7f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: '125A 3-pole contactor with 230V AC coil for industrial motor control applications'
    },
    { 
      name: 'Control Panel Enclosure', 
      category: 'Enclosures', 
      code: 'PS-CPE-800',
      image: 'https://images.unsplash.com/photo-1581092787075-b9ec84909558?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'IP66-rated steel enclosure for industrial control panels, 800x600x250mm'
    },
  ];

  return (
    <div>
      <section className="hero-section relative" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
      }}>
        <div className="hero-overlay absolute inset-0 flex items-center">
          <div className="container mx-auto text-white text-center">
            <h1 className="text-4xl md:text-5xl mb-3">Industrial Electrical Solutions</h1>
            <p className="text-xl md:text-2xl">High-quality components for factory automation and power systems</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-3xl">Factory Electrical Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="product-card bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    className="w-full h-64 object-cover"
                    alt={product.name}
                    loading="lazy"
                  />
                  <div className="product-badge absolute top-4 right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-semibold">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h5 className="text-xl font-semibold mb-2">{product.name}</h5>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Part #: <span className="font-bold">{product.code}</span></span>
                    <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="hidden md:inline">Inquire</span>
                    </Link>
                  </div>
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