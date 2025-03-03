import React from 'react';

const About = () => {
  return (
    <div className="main-content">
      <section className="hero-section relative" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundPosition: 'center 30%'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-primary/70"></div>
        <div className="hero-overlay absolute inset-0 flex items-center">
          <div className="container mx-auto text-white text-center px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">About Precision Scientific</h1>
            <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto">Excellence in scientific solutions since 1996</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-20">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="w-24 h-1 bg-primary hidden md:block"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 md:ml-6">Our Legacy</h2>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border-t-4 border-primary">
              <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-700">
                Precision Scientific has been serving the industrial, healthcare, life science, education, and electronics markets worldwide since 1996. Whether you work in a lab setting or perform your sampling and testing in the field, we have the products that you need.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Through a combination of world respected manufacturers and continuous improvement of systems and services, we supply our clients with outstanding quality products, service and solutions on time, every time.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="h-3 bg-blue-600"></div>
              <div className="p-8 md:p-10">
                <div className="inline-block p-4 bg-blue-100 rounded-lg mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">EDUCATION</h3>
                <p className="text-gray-600 leading-relaxed">
                  From grade schools to university research labs, Precision Scientific has been a supplier to laboratories for almost a decade. Students, researchers, and faculty members in all fields of science can obtain everything from starter kits for the chemistry lab to sophisticated instrumentation. We also feature water and soil test kits and related reagents to do environmental science tests in the lab or in the field.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="h-3 bg-green-600"></div>
              <div className="p-8 md:p-10">
                <div className="inline-block p-4 bg-green-100 rounded-lg mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">ENVIRONMENT</h3>
                <p className="text-gray-600 leading-relaxed">
                  We can supply products for field sampling and testing, or instruments and equipment for independent testing laboratories. We are a supplier to both government and private agencies worldwide. Precision Scientific has a large selection to fill the needs of the busiest environmental analytical testing laboratory, to the smallest sewage treatment plant.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="h-3 bg-yellow-500"></div>
              <div className="p-8 md:p-10">
                <div className="inline-block p-4 bg-yellow-100 rounded-lg mb-6">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">INDUSTRY</h3>
                <p className="text-gray-600 leading-relaxed">
                  We serve a variety of labs in a diverse market. Whether you work in a petroleum refinery, power plant, clinic, food, beverage, biotechnology, cosmetic, water or agricultural lab, we have the products and the services you need.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="h-3 bg-purple-600"></div>
              <div className="p-8 md:p-10">
                <div className="inline-block p-4 bg-purple-100 rounded-lg mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">INTERNATIONAL</h3>
                <p className="text-gray-600 leading-relaxed">
                  Precision Scientific serves customers throughout the world. We also have the invaluable support of representatives, ready to answer your inquiries and provide professional service before and after the sale. Specific requirements for voltage and frequency are easily handled and many items can be furnished with your specifications. Export documentation is given personalized attention, and our reps can handle all of your questions or product needs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-primary rounded-2xl shadow-2xl overflow-hidden mb-20">
            <div className="p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Global Scientific Leadership</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center transform transition-all duration-300 hover:bg-white/20">
                  <div className="text-5xl font-bold text-white mb-2">25+</div>
                  <div className="text-xl text-white/80">Years of Excellence</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center transform transition-all duration-300 hover:bg-white/20">
                  <div className="text-5xl font-bold text-white mb-2">150+</div>
                  <div className="text-xl text-white/80">Countries Served</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center transform transition-all duration-300 hover:bg-white/20">
                  <div className="text-5xl font-bold text-white mb-2">5000+</div>
                  <div className="text-xl text-white/80">Satisfied Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center transform transition-all duration-300 hover:bg-white/20">
                  <div className="text-5xl font-bold text-white mb-2">4</div>
                  <div className="text-xl text-white/80">Global Facilities</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Ready to Experience the Precision Scientific Difference?</h3>
            <a href="/contact" className="inline-block px-8 py-4 bg-primary hover:bg-blue-700 text-white rounded-lg transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;