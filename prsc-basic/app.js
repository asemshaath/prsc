// app.js
document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    
    // Router
    const router = () => {
        const hash = window.location.hash;
        
        switch(hash) {
            case '#about':
                renderAbout();
                break;
            case '#products':
                renderProducts();
                break;
            case '#contact':
                renderContact();
                break;
            default:
                renderHome();
        }
    };

    // Navigation handling
    window.addEventListener('hashchange', router);
    router();

    // Page templates
    function renderHome() {
        contentDiv.innerHTML = `

                <section class="hero-section d-flex align-items-center">
                    <div class="container text-center text-white">
                        <h1 class="display-3 mb-4 animate__animated animate__fadeInDown">Precision Scientific</h1>
                        <p class="lead mb-5 fs-4 animate__animated animate__fadeInUp animate__delay-1s">Our actions are guided by an unwavering commitment to achieve Total Quality Performance</p>
                        <a href="#about" class="btn btn-outline-light btn-lg animate__animated animate__fadeInUp animate__delay-2s">Explore Our Mission</a>
                    </div>
                </section>
    
            <section class="mission-section py-7">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6">
                            <div class="mission-card p-5 rounded-4 shadow-lg">
                                <div class="icon-wrapper mb-4">
                                    <img src="https://img.icons8.com/3d-fluency/100/test-tube.png" alt="Science" class="img-fluid" style="width: 80px;">
                                </div>
                                <h2 class="mb-4 display-5 fw-bold">Our Mission</h2>
                                <p class="lead mb-4">Provide high quality service and solutions to our clients worldwide in healthcare and industrial applications.</p>
                                <div class="gradient-line"></div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="environment-card p-5 rounded-4 h-100">
                                <h3 class="mb-4 display-6 fw-bold">Environment & Health</h3>
                                <p class="mb-4">Preserving resources makes sense – environmentally and economically. We take our responsibilities seriously through:</p>
                                <ul class="eco-list">
                                    <li class="d-flex align-items-center mb-3">
                                        <i class="bi bi-recycle me-3 fs-4"></i>
                                        Sustainable operational practices
                                    </li>
                                    <li class="d-flex align-items-center mb-3">
                                        <i class="bi bi-leaf me-3 fs-4"></i>
                                        Eco-friendly product development
                                    </li>
                                    <li class="d-flex align-items-center">
                                        <i class="bi bi-graph-up me-3 fs-4"></i>
                                        Continuous improvement initiatives
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section class="global-commitment py-5 py-lg-7 bg-dark text-white">
                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8">
                            <h2 class="display-5 mb-4 mb-lg-5">Global Scientific Leadership</h2>
                            <div class="row g-3 g-lg-4 mb-4 mb-lg-5">
                                <div class="col-12 col-md-4">
                                    <div class="stat-item p-3 p-lg-4">
                                        <div class="stat-number display-6 mb-2">25+</div>
                                        <div class="stat-label fs-5">Years Experience</div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="stat-item p-3 p-lg-4">
                                        <div class="stat-number display-6 mb-2">150+</div>
                                        <div class="stat-label fs-5">Countries Served</div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-4">
                                    <div class="stat-item p-3 p-lg-4">
                                        <div class="stat-number display-6 mb-2">5000+</div>
                                        <div class="stat-label fs-5">Satisfied Clients</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#contact" class="btn btn-light btn-lg px-4 px-lg-5 py-2 py-lg-3 rounded-pill">
                                Contact Us Today
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    function renderAbout() {
        contentDiv.innerHTML = `
            <div class="main-content">

            <section class="hero-section" style="background-image: url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')">
                <div class="hero-overlay w-100 h-100 d-flex align-items-center">
                    <div class="container text-white text-center">
                        <h1 class="display-3 mb-4 animate__animated animate__fadeInDown">Our Legacy</h1>
                        <p class="lead fs-3">Pioneering scientific solutions since 1996</p>
                    </div>
                </div>
            </section>

            <section class="py-7 bg-light">
                <div class="container">
                    <h2 class="section-heading">Global Impact</h2>
                    <div class="row g-5">
                        <div class="col-md-6 col-lg-3 text-center">
                            <div class="icon-box bg-primary text-white">
                                <i class="bi bi-globe"></i>
                            </div>
                            <h4>150+ Countries</h4>
                            <p>Worldwide distribution network</p>
                        </div>
                        <div class="col-md-6 col-lg-3 text-center">
                            <div class="icon-box bg-secondary text-white">
                                <i class="bi bi-people"></i>
                            </div>
                            <h4>5000+ Clients</h4>
                            <p>Serving leading organizations</p>
                        </div>
                        <div class="col-md-6 col-lg-3 text-center">
                            <div class="icon-box bg-accent text-dark">
                                <i class="bi bi-award"></i>
                            </div>
                            <h4>35 Awards</h4>
                            <p>Industry recognition</p>
                        </div>
                        <div class="col-md-6 col-lg-3 text-center">
                            <div class="icon-box bg-dark text-white">
                                <i class="bi bi-building"></i>
                            </div>
                            <h4>12 Facilities</h4>
                            <p>Global manufacturing centers</p>
                        </div>
                    </div>

                    <div class="about-timeline">
                        <div class="timeline-item mb-5">
                            <h3 class="text-primary">1996</h3>
                            <div class="card shadow-sm">
                                <div class="card-body">
                                    <h5>Founded in California</h5>
                                    <p>Started as regional laboratory supplier</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item mb-5">
                            <h3 class="text-primary">2005</h3>
                            <div class="card shadow-sm">
                                <div class="card-body">
                                    <h5>Global Expansion</h5>
                                    <p>Established European headquarters</p>
                                </div>
                            </div>
                        </div>
                        <div class="timeline-item">
                            <h3 class="text-primary">2020</h3>
                            <div class="card shadow-sm">
                                <div class="card-body">
                                    <h5>Sustainability Initiative</h5>
                                    <p>100% eco-friendly packaging implemented</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        `;
    }

    function renderProducts() {
        const products = [
            { name: 'Analytical Balances', category: 'Measurement', code: 'PS-AB200' },
            { name: 'Electron Microscopes', category: 'Imaging', code: 'PS-EM450' },
            { name: 'Spectrophotometers', category: 'Analysis', code: 'PS-SP900' },
            { name: 'Centrifuges', category: 'Separation', code: 'PS-CF300' },
            { name: 'PCR Systems', category: 'Molecular Biology', code: 'PS-PCR50' },
            { name: 'Incubators', category: 'Cultivation', code: 'PS-IN400' },
        ];

        contentDiv.innerHTML = `
                   <section class="hero-section" style="background-image: url('https://images.unsplash.com/photo-1605722243979-fe0be8158232?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')">
            <div class="hero-overlay w-100 h-100 d-flex align-items-center">
                <div class="container text-white text-center">
                    <h1 class="display-4 display-lg-3 mb-3">Innovative Solutions</h1>
                    <p class="lead fs-5 fs-lg-3">Precision-engineered scientific equipment</p>
                </div>
            </div>
        </section>

        <section class="py-5 py-lg-7">
            <div class="container">
                <h2 class="section-heading">Our Product Range</h2>
                <div class="row g-3 g-lg-4">
                    ${products.map(product => `
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="product-card card h-100 shadow-sm">
                                <div class="position-relative overflow-hidden">
                                    <img src="https://source.unsplash.com/random/600x400/?${product.category},lab" 
                                         class="card-img-top" 
                                         alt="${product.name}"
                                         loading="lazy">
                                    <div class="product-badge">${product.category}</div>
                                </div>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${product.name}</h5>
                                    <div class="mt-auto d-flex justify-content-between align-items-center">
                                        <span class="text-muted small">${product.code}</span>
                                        <button class="btn btn-primary btn-sm">
                                            <i class="bi bi-info-circle"></i> <span class="d-none d-md-inline">Details</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        `;
    }

    function renderContact() {
        contentDiv.innerHTML = `
            <section class="hero-section" style="background-image: url('https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')">
                <div class="hero-overlay w-100 h-100 d-flex align-items-center">
                    <div class="container text-white text-center">
                        <h1 class="display-3 mb-4">Connect With Us</h1>
                        <p class="lead fs-3">Your innovation partner</p>
                    </div>
                </div>
            </section>

            <section class="py-7">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6">
                            <div class="contact-card">
                                <h2 class="section-heading mb-4">Contact Information</h2>
                                <div class="d-flex align-items-start mb-4">
                                    <i class="bi bi-geo-alt fs-4 me-3 text-primary"></i>
                                    <div>
                                        <h5>Headquarters</h5>
                                        <p class="mb-0">123 Science Park Road<br>San Francisco, CA 94107</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-start mb-4">
                                    <i class="bi bi-telephone fs-4 me-3 text-primary"></i>
                                    <div>
                                        <h5>Phone</h5>
                                        <p class="mb-0">+1 (800) 555-1234<br>Mon-Fri: 8AM - 5PM PST</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-start">
                                    <i class="bi bi-envelope fs-4 me-3 text-primary"></i>
                                    <div>
                                        <h5>Email</h5>
                                        <p class="mb-0">contact@prscusa.com<br>support@prscusa.com</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="map-container mt-5">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.365085812722!2d-122.3994359846821!3d37.78627697975925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d10af6e51%3A0x1122879c36e6f3fe!2sScience%20Park!5e0!3m2!1sen!2sus!4v1623947356781!5m2!1sen!2sus" 
                                        style="border:0;" 
                                        allowfullscreen="" 
                                        loading="lazy">
                                </iframe>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="contact-card">
                                <h2 class="section-heading mb-4">Send Message</h2>
                                <form id="contactForm">
                                    <div class="mb-4">
                                        <label class="form-label">Your Name</label>
                                        <input type="text" class="form-control" required>
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label">Email Address</label>
                                        <input type="email" class="form-control" required>
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label">Message</label>
                                        <textarea class="form-control" rows="5" required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100 py-3">
                                        Send Message <i class="bi bi-send ms-2"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const submitBtn = form.querySelector('button[type="submit"]');
            
            submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...`;
            submitBtn.disabled = true;
        
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = 'Message Sent <i class="bi bi-check-circle"></i>';
                setTimeout(() => {
                    submitBtn.innerHTML = 'Send Message <i class="bi bi-send"></i>';
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }, 1500);
        });
    }
});
