import React from 'react';
import { FaWhatsapp, FaNodeJs, FaAws, FaDocker, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiExpress, SiNestjs, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si';

// Images (gunakan URL dari Pexels CC0)
const images = {
  hero: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
  instructor: 'https://images.pexels.com/photos/3779448/pexels-photo-3779448.jpeg',
  training: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
  avatar1: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  avatar2: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
  avatar3: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
  techPattern: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg'
};

const QuantumBitLanding = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/6281266489547?text=Saya%20tertarik%20dengan%20pelatihan%20Quantum%20Bit', '_blank');
  };

  return (
    <div className="quantum-bit-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <span className="text-primary">Quantum</span><span className="text-light">Bit</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Keunggulan</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tech">Teknologi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#curriculum">Kurikulum</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Testimoni</a>
              </li>
              <li className="nav-item ms-lg-3">
                <button className="btn btn-primary" onClick={openWhatsApp}>
                  <FaWhatsapp className="me-2" /> Konsultasi
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${images.hero})` }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold text-white mb-4">
                <span className="text-primary">Transformasi</span> Tim Backend Anda
              </h1>
              <p className="lead text-white-50 mb-5">
                Pelatihan intensif Quantum Bit untuk meningkatkan skill backend developer tim Anda dalam 8 minggu
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg px-4" onClick={openWhatsApp}>
                  <FaWhatsapp className="me-2" /> Hubungi Kami
                </button>
                <button className="btn btn-outline-light btn-lg px-4">
                  Lihat Program
                </button>
              </div>
              <div className="d-flex gap-5 mt-5 text-white">
                <div>
                  <h3 className="text-primary fw-bold">40+</h3>
                  <p>Developer Terlatih</p>
                </div>
                <div>
                  <h3 className="text-primary fw-bold">5+</h3>
                  <p>Perusahaan Klien</p>
                </div>
                <div>
                  <h3 className="text-primary fw-bold">4.9/5</h3>
                  <p>Rating Pelatihan</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="card bg-dark bg-opacity-50 border-light p-3">
                <pre className="text-success m-0">
                  {`// Quantum Bit Training
const quantumTraining = {
  level: 'Advanced',
  duration: '8 Minggu',
  format: 'Hybrid',
  outcome: 'Tim backend yang lebih kuat'
};`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Mengapa <span className="text-primary">Quantum Bit</span>?</h2>
            <p className="lead text-muted">Solusi pelatihan backend modern untuk perusahaan Anda</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-4 mx-auto" style={{ width: '70px', height: '70px' }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2zm0 2.8L18 10v8h-2v-6H8v6H6v-8l6-5.2z"/>
                    </svg>
                  </div>
                  <h4 className="mb-3">Kurikulum Quantum</h4>
                  <p className="text-muted">Materi terupdate dengan pendekatan berbasis quantum learning untuk hasil maksimal</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-4 mx-auto" style={{ width: '70px', height: '70px' }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.557 1.522 4.82 3.889 6.115l-.78 2.77 3.116-1.65c.88.275 1.823.425 2.775.425 4.97 0 9-3.186 9-7.115C21 6.186 16.97 3 12 3z"/>
                    </svg>
                  </div>
                  <h4 className="mb-3">Instruktur Expert</h4>
                  <p className="text-muted">Pengajar praktisi dengan pengalaman langsung di proyek enterprise</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-4 mx-auto" style={{ width: '70px', height: '70px' }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
                    </svg>
                  </div>
                  <h4 className="mb-3">Project-Based</h4>
                  <p className="text-muted">Pembelajaran melalui proyek nyata dengan code review mendalam</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 mb-4 mx-auto" style={{ width: '70px', height: '70px' }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/>
                    </svg>
                  </div>
                  <h4 className="mb-3">Enterprise Ready</h4>
                  <p className="text-muted">Fokus pada solusi untuk tantangan backend skala enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech" className="py-5" style={{ backgroundImage: `url(${images.techPattern})`, backgroundSize: 'cover' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Stack Teknologi <span className="text-primary">Quantum</span></h2>
            <p className="lead text-white-50">Teknologi modern yang akan dikuasai tim Anda</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { icon: <FaNodeJs size={40} />, name: 'Node.js' },
              { icon: <SiExpress size={40} />, name: 'Express' },
              { icon: <SiNestjs size={40} />, name: 'NestJS' },
              { icon: <SiMongodb size={40} />, name: 'MongoDB' },
              { icon: <SiPostgresql size={40} />, name: 'PostgreSQL' },
              { icon: <SiRedis size={40} />, name: 'Redis' },
              { icon: <FaDocker size={40} />, name: 'Docker' },
              { icon: <FaAws size={40} />, name: 'AWS' }
            ].map((tech, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="card bg-dark bg-opacity-50 text-center text-white border-0 p-4 h-100 hover-scale transition">
                  <div className="mb-3">{tech.icon}</div>
                  <h5 className="m-0">{tech.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Kurikulum <span className="text-primary">Quantum</span></h2>
            <p className="lead text-muted">Program 8 minggu yang dirancang untuk transformasi skill tim</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="curriculumAccordion">
                {[
                  {
                    title: "Quantum Fundamental",
                    items: [
                      "Arsitektur backend modern",
                      "RESTful API & GraphQL",
                      "Autentikasi JWT & OAuth",
                      "Dasar database & caching"
                    ]
                  },
                  {
                    title: "Advanced Quantum",
                    items: [
                      "Microservices architecture",
                      "Message queues & event streaming",
                      "Optimasi performa API",
                      "Error handling & logging",
                      "Testing & debugging"
                    ]
                  },
                  {
                    title: "Quantum Deployment",
                    items: [
                      "Containerization dengan Docker",
                      "CI/CD Pipeline",
                      "Deployment ke cloud",
                      "Monitoring & observability",
                      "Security best practices"
                    ]
                  }
                ].map((item, index) => (
                  <div className="accordion-item border-0 shadow-sm mb-3" key={index}>
                    <h3 className="accordion-header" id={`heading${index}`}>
                      <button 
                        className="accordion-button collapsed bg-white" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${index}`}
                      >
                        {item.title}
                      </button>
                    </h3>
                    <div 
                      id={`collapse${index}`} 
                      className="accordion-collapse collapse" 
                      data-bs-parent="#curriculumAccordion"
                    >
                      <div className="accordion-body">
                        <ul className="list-unstyled">
                          {item.items.map((point, i) => (
                            <li key={i} className="mb-2 d-flex">
                              <span className="text-primary me-2">✓</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Hasil <span className="text-primary">Quantum</span></h2>
            <p className="lead text-muted">Apa kata perusahaan yang telah menggunakan layanan kami</p>
          </div>
          <div className="row g-4">
            {[
              {
                quote: "Setelah pelatihan Quantum Bit, tim kami mampu mengurangi bug production sebesar 60% dan meningkatkan kecepatan development.",
                name: "Budi Santoso",
                position: "VP Engineering, FinTech Corp"
              },
              {
                quote: "Pelatihan yang sangat aplikatif. Dalam 3 bulan, tim backend kami sudah menerapkan microservices dengan baik.",
                name: "Anita Wijaya",
                position: "CTO, E-Commerce Platform"
              },
              {
                quote: "Instruktur Quantum Bit benar-benar mengerti kebutuhan enterprise. ROI pelatihan ini sangat worth it.",
                name: "Dewo Putra",
                position: "Head of IT, Bank Digital"
              }
            ].map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <p className="fst-italic mb-4">"{testimonial.quote}"</p>
                    <div className="d-flex align-items-center">
                      <div>
                        <h5 className="mb-1">{testimonial.name}</h5>
                        <p className="text-muted small mb-0">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container py-5 text-center">
          <h2 className="fw-bold mb-4">Siap Mengambil <span className="text-dark">Lompatan Quantum</span>?</h2>
          <p className="lead mb-5">
            Diskusikan kebutuhan pelatihan tim backend perusahaan Anda dengan ahli kami
          </p>
          <button className="btn btn-dark btn-lg px-5" onClick={openWhatsApp}>
            <FaWhatsapp className="me-2" /> Konsultasi Gratis via WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container py-4">
          <div className="row g-4">
            <div className="col-lg-4">
              <h3 className="fw-bold mb-4">
                <span className="text-primary">Quantum</span><span className="text-light">Bit</span>
              </h3>
              <p className="text-white-50">
                Spesialis pelatihan backend developer untuk perusahaan dengan pendekatan quantum learning dan solusi enterprise.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href="#" className="text-white-50 hover-primary"><FaWhatsapp size={20} /></a>
                <a href="#" className="text-white-50 hover-primary"><FaLinkedin size={20} /></a>
                <a href="#" className="text-white-50 hover-primary"><FaTwitter size={20} /></a>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <h5 className="fw-bold mb-4">Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#features" className="text-white-50 hover-primary">Keunggulan</a></li>
                <li className="mb-2"><a href="#tech" className="text-white-50 hover-primary">Teknologi</a></li>
                <li className="mb-2"><a href="#curriculum" className="text-white-50 hover-primary">Kurikulum</a></li>
                <li className="mb-2"><a href="#testimonials" className="text-white-50 hover-primary">Testimoni</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5 className="fw-bold mb-4">Kontak</h5>
              <ul className="list-unstyled text-white-50">
                <li className="mb-2">+62 812 6648 9547</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <h5 className="fw-bold mb-4">Galeri</h5>
              <div className="row g-2">
                <div className="col-4">
                  <img src={images.training} alt="Training" className="img-fluid rounded" />
                </div>
                <div className="col-4">
                  <img src={images.instructor} alt="Instructor" className="img-fluid rounded" />
                </div>
                <div className="col-4">
                  <img src={images.hero} alt="Hero" className="img-fluid rounded" />
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4 border-secondary" />
          <div className="text-center text-white-50 small">
            © {new Date().getFullYear()} Quantum Bit. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <div 
        className="position-fixed bottom-4 end-4 bg-success text-white rounded-circle p-3 shadow hover-scale" 
        style={{ width: '60px', height: '60px', cursor: 'pointer' }}
        onClick={openWhatsApp}
      >
        <FaWhatsapp size={24} className="position-absolute top-50 start-50 translate-middle" />
      </div>
    </div>
  );
};

export default QuantumBitLanding;