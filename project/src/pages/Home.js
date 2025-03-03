import React from 'react';

const Home = () => {
  return (
    <div>
      <section className="hero-section flex items-center" style={{
        background: 'linear-gradient(45deg, rgba(42,92,130,0.9) 0%, rgba(90,191,157,0.9) 100%), url("https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl mb-4 animate__animated animate__fadeInDown">Precision Scientific</h1>
          <p className="text-xl mb-5 animate__animated animate__fadeInUp animate__delay-1s">Our actions are guided by an unwavering commitment to achieve Total Quality Performance</p>
          <a href="#about" className="inline-block px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-blue-900 transition duration-300 animate__animated animate__fadeInUp animate__delay-2s">Explore Our Mission</a>
        </div>
      </section>

      <section className="mission-section py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mission-card p-8 rounded-xl shadow-lg">
                <div className="icon-wrapper mb-4">
                  <img src="https://img.icons8.com/3d-fluency/100/test-tube.png" alt="Science" className="w-20" />
                </div>
                <h2 className="mb-4 text-4xl font-bold">Our Mission</h2>
                <p className="text-xl mb-4">Provide high quality service and solutions to our clients worldwide in healthcare and industrial applications.</p>
                <div className="gradient-line"></div>
              </div>
            </div>
            <div>
              <div className="environment-card p-8 rounded-xl h-full">
                <h3 className="mb-4 text-3xl font-bold">Environment & Health</h3>
                <p className="mb-4">Preserving resources makes sense – environmentally and economically. We take our responsibilities seriously through:</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Sustainable operational practices
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Eco-friendly product development
                  </li>
                  <li className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Continuous improvement initiatives
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="global-commitment py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8">Global Scientific Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="stat-item p-6">
                  <div className="stat-number text-4xl mb-2">25+</div>
                  <div className="stat-label text-xl">Years Experience</div>
                </div>
              </div>
              <div>
                <div className="stat-item p-6">
                  <div className="stat-number text-4xl mb-2">150+</div>
                  <div className="stat-label text-xl">Countries Served</div>
                </div>
              </div>
              <div>
                <div className="stat-item p-6">
                  <div className="stat-number text-4xl mb-2">5000+</div>
                  <div className="stat-label text-xl">Satisfied Clients</div>
                </div>
              </div>
            </div>
            <a href="#contact" className="inline-block px-8 py-3 bg-white text-gray-900 hover:bg-yellow-400 hover:text-white transition duration-300 rounded-full font-semibold">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;