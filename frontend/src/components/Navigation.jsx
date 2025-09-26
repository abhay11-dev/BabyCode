import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setExpanded(false);
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar 
        expand="lg" 
        bg={scrolled ? "white" : "transparent"}
        variant="light" 
        fixed="top" 
        className={`transition-all ${scrolled ? 'shadow-sm' : ''}`}
        style={{ 
          zIndex: 1030,
          transition: 'all 0.3s ease',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'
        }}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container>
          <Navbar.Brand 
            href="#home" 
            className="fw-bold fs-3 d-flex align-items-center"
            style={{ 
              color: '#2c3e50',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="IELTS Excellence - Go to Home"
          >
            <span 
              className="me-2"
              style={{ 
                color: '#3498db',
                fontSize: '2rem',
                fontWeight: '800'
              }}
            >
              🎓
            </span>
            <span style={{ color: '#3498db' }}>IELTS</span>Excellence
          </Navbar.Brand>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            aria-label="Toggle navigation menu"
            style={{ border: 'none' }}
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link 
                href="#home" 
                className="fw-semibold mx-2 nav-link-custom"
                onClick={(e) => handleNavClick(e, '#home')}
                aria-label="Go to Home section"
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#features" 
                className="fw-semibold mx-2 nav-link-custom"
                onClick={(e) => handleNavClick(e, '#features')}
                aria-label="Go to Features section"
              >
                Features
              </Nav.Link>
              <Nav.Link 
                href="#testimonials" 
                className="fw-semibold mx-2 nav-link-custom"
                onClick={(e) => handleNavClick(e, '#testimonials')}
                aria-label="Go to Testimonials section"
              >
                Success Stories
              </Nav.Link>
              <Nav.Link 
                href="#contact" 
                className="fw-semibold mx-2 nav-link-custom"
                onClick={(e) => handleNavClick(e, '#contact')}
                aria-label="Go to Contact section"
              >
                Contact
              </Nav.Link>
              <Button 
                className="btn-custom ms-3 mt-2 mt-lg-0"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(e, '#home');
                  // Scroll to hero section and focus on CTA
                  setTimeout(() => {
                    const ctaButton = document.querySelector('.btn-custom');
                    if (ctaButton) ctaButton.focus();
                  }, 1000);
                }}
                aria-label="Start your IELTS journey - Free trial"
              >
                Start Free Trial
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <style jsx>{`
        .nav-link-custom {
          color: #2c3e50 !important;
          font-size: 16px;
          position: relative;
          transition: all 0.3s ease;
          padding: 8px 16px !important;
          border-radius: 8px;
        }
        
        .nav-link-custom:hover {
          color: #3498db !important;
          background-color: rgba(52, 152, 219, 0.1);
          transform: translateY(-2px);
        }
        
        .nav-link-custom::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: #3498db;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link-custom:hover::after {
          width: 80%;
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        @media (max-width: 991px) {
          .nav-link-custom {
            margin: 4px 0 !important;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;