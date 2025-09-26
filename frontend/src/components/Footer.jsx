import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer 
      id="contact" 
      style={{ 
        background: 'linear-gradient(135deg, #2c3e50, #34495e)',
        color: 'white',
        padding: '60px 0 25px',
        position: 'relative',
        overflow: 'hidden'
      }}
      role="contentinfo"
      aria-label="Contact information and site links"
    >
      {/* Background decorative elements */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'rgba(52, 152, 219, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 6s infinite'
        }}
        aria-hidden="true"
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '8%',
          width: '100px',
          height: '100px',
          background: 'rgba(39, 174, 96, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 8s infinite'
        }}
        aria-hidden="true"
      />

      <Container>
        <Row className="g-4">
          {/* Company Info */}
          <Col lg={4} md={6}>
            <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
              <div className="d-flex align-items-center mb-4">
                <span 
                  className="me-3"
                  style={{ 
                    color: '#3498db',
                    fontSize: '2.5rem',
                    fontWeight: '800'
                  }}
                >
                  🎓
                </span>
                <h4 className="fw-bold mb-0">
                  <span style={{ color: '#3498db' }}>IELTS</span>Excellence
                </h4>
              </div>
              <p style={{ opacity: '0.9', lineHeight: '1.7', fontSize: '1rem' }}>
                Your trusted partner for IELTS success. We provide world-class training 
                with personalized guidance to help you achieve your target band score and unlock global opportunities.
              </p>
              
              {/* Social Media Links */}
              <div className="d-flex gap-3 mt-4">
                {[
                  { icon: '📘', label: 'Facebook', color: '#3b5998' },
                  { icon: '🐦', label: 'Twitter', color: '#1da1f2' },
                  { icon: '📷', label: 'Instagram', color: '#e4405f' },
                  { icon: '💼', label: 'LinkedIn', color: '#0077b5' }
                ].map((social, index) => (
                  <div 
                    key={index}
                    style={{
                      width: '45px',
                      height: '45px',
                      background: `linear-gradient(135deg, ${social.color}, ${social.color}dd)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1) translateY(-3px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1) translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                    }}
                    role="button"
                    tabIndex="0"
                    aria-label={`Visit our ${social.label} page`}
                  >
                    <span style={{ fontSize: '1.2rem' }}>{social.icon}</span>
                  </div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="mt-4 p-3 rounded-3" style={{ 
                background: 'rgba(52, 152, 219, 0.1)',
                border: '1px solid rgba(52, 152, 219, 0.3)'
              }}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span style={{ color: '#2ecc71' }}>✅</span>
                  <small style={{ opacity: '0.9' }}>British Council Certified</small>
                </div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span style={{ color: '#2ecc71' }}>✅</span>
                  <small style={{ opacity: '0.9' }}>IDP Education Partner</small>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span style={{ color: '#2ecc71' }}>✅</span>
                  <small style={{ opacity: '0.9' }}>ISO 9001:2015 Certified</small>
                </div>
              </div>
            </div>
          </Col>
          
          {/* Quick Links */}
          <Col lg={2} md={6}>
            <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <h5 className="fw-bold mb-4" style={{ color: '#3498db' }}>Quick Links</h5>
              <ul className="list-unstyled">
                {[
                  { href: '#home', text: 'Home' },
                  { href: '#features', text: 'Features' },
                  { href: '#testimonials', text: 'Success Stories' },
                  { href: '#contact', text: 'Contact' }
                ].map((link, index) => (
                  <li key={index} className="mb-3">
                    <a 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      style={{ 
                        color: 'white', 
                        textDecoration: 'none',
                        opacity: '0.8',
                        transition: 'all 0.3s ease',
                        fontSize: '0.95rem',
                        position: 'relative',
                        paddingLeft: '20px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.opacity = '1';
                        e.target.style.color = '#3498db';
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.opacity = '0.8';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateX(0)';
                      }}
                      aria-label={`Go to ${link.text} section`}
                    >
                      <span style={{ 
                        position: 'absolute', 
                        left: '0', 
                        color: '#3498db',
                        transition: 'all 0.3s ease'
                      }}>
                        →
                      </span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          
          {/* Courses */}
          <Col lg={3} md={6}>
            <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <h5 className="fw-bold mb-4" style={{ color: '#3498db' }}>Our Courses</h5>
              <ul className="list-unstyled">
                {[
                  { icon: '📚', text: 'General IELTS Training' },
                  { icon: '🎓', text: 'Academic IELTS Prep' },
                  { icon: '🎤', text: 'Speaking Intensive' },
                  { icon: '✍️', text: 'Writing Masterclass' },
                  { icon: '👂', text: 'Listening Skills Pro' },
                  { icon: '📖', text: 'Reading Comprehension' }
                ].map((course, index) => (
                  <li key={index} className="mb-2 d-flex align-items-center">
                    <span style={{ marginRight: '10px', fontSize: '1.1rem' }}>{course.icon}</span>
                    <span style={{ opacity: '0.8', fontSize: '0.9rem' }}>{course.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          
          {/* Contact Info */}
          <Col lg={3} md={6}>
            <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
              <h5 className="fw-bold mb-4" style={{ color: '#3498db' }}>Contact Us</h5>
              <div className="mb-4">
                {[
                  { icon: '📍', text: '123 Education Street, Learning City, LC 12345' },
                  { icon: '📞', text: '+1 (555) 123-4567' },
                  { icon: '✉️', text: 'info@ieltsexcellence.com' },
                  { icon: '🕒', text: 'Mon - Sat: 9AM - 8PM' }
                ].map((contact, index) => (
                  <div key={index} className="d-flex align-items-start mb-3">
                    <span style={{ 
                      marginRight: '12px', 
                      fontSize: '1.2rem',
                      marginTop: '2px',
                      color: '#3498db'
                    }}>
                      {contact.icon}
                    </span>
                    <span style={{ 
                      opacity: '0.9', 
                      fontSize: '0.9rem',
                      lineHeight: '1.5'
                    }}>
                      {contact.text}
                    </span>
                  </div>
                ))}
              </div>
              
              <div 
                className="p-4 rounded-3 mb-4"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.2), rgba(39, 174, 96, 0.1))',
                  border: '1px solid rgba(52, 152, 219, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div className="d-flex align-items-center mb-2">
                    <span style={{ color: '#ffd700', fontSize: '1.2rem', marginRight: '8px' }}>🎯</span>
                    <strong style={{ color: '#ffd700' }}>Free Consultation Available</strong>
                  </div>
                  <p className="mb-3" style={{ opacity: '0.9', fontSize: '0.9rem' }}>
                    Book your personalized assessment call today!
                  </p>
                  <Button 
                    className="btn-custom px-3 py-2"
                    style={{
                      background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                      border: 'none',
                      color: '#2c3e50',
                      fontWeight: '600',
                      borderRadius: '20px',
                      fontSize: '0.85rem'
                    }}
                    aria-label="Book a free consultation"
                  >
                    📞 Book Now
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Bottom Footer */}
        <hr style={{ margin: '50px 0 30px', opacity: '0.3', borderColor: '#3498db' }} />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0" style={{ opacity: '0.8', fontSize: '0.9rem' }}>
              © 2025 IELTS Excellence. All rights reserved. | Empowering students worldwide since 2020
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex justify-content-md-end gap-4 flex-wrap">
              {[
                { href: '#privacy', text: 'Privacy Policy' },
                { href: '#terms', text: 'Terms of Service' },
                { href: '#cookies', text: 'Cookie Policy' }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none',
                    opacity: '0.7',
                    fontSize: '0.85rem',
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        {/* Back to top button */}
        <div className="text-center mt-4">
          <Button 
            variant="outline-light"
            size="sm"
            onClick={handleScrollToTop}
            style={{
              borderRadius: '25px',
              padding: '8px 20px',
              fontSize: '0.85rem',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
            aria-label="Scroll back to top of page"
          >
            ⬆️ Back to Top
          </Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;