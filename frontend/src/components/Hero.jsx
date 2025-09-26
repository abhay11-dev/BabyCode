import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = () => {
    // Scroll to features section
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewCourses = () => {
    // Scroll to testimonials section
    const testimonialsSection = document.querySelector('#testimonials');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="py-4"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        marginTop: '76px',
        position: 'relative',
        overflow: 'hidden'
      }}
      role="banner"
      aria-label="Hero section - Master IELTS with Expert Guidance"
    >
      {/* Background decorative elements */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 4s infinite'
        }}
        aria-hidden="true"
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          animation: 'pulse 6s infinite'
        }}
        aria-hidden="true"
      />

      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="text-white">
            <div 
              className={`slide-in-left ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.2s' }}
            >
              <h1 
                className="display-4 fw-bold mb-4"
                style={{ 
                  lineHeight: '1.2',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Master IELTS with 
                <span 
                  className="gradient-text"
                  style={{ 
                    color: '#ffd700',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                > Expert Guidance</span>
              </h1>
              
              <p 
                className="lead mb-4"
                style={{ 
                  fontSize: '1.25rem',
                  opacity: '0.95',
                  lineHeight: '1.7',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                Achieve your target band score with our comprehensive IELTS preparation program. 
                Get personalized coaching, practice tests, and AI-powered feedback to excel in your IELTS exam.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-4">
                <Button 
                  size="lg" 
                  className="btn-custom px-4 py-3"
                  style={{
                    background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                    border: 'none',
                    color: '#2c3e50',
                    fontWeight: '700',
                    borderRadius: '50px',
                    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)',
                    textTransform: 'none'
                  }}
                  onClick={handleCTAClick}
                  aria-label="Start your IELTS journey with a free trial"
                >
                  🚀 Join Now - Free Trial
                </Button>
                
                <Button 
                  variant="outline-light" 
                  size="lg" 
                  className="px-4 py-3"
                  style={{
                    borderRadius: '50px',
                    fontWeight: '600',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                  onClick={handleViewCourses}
                  aria-label="View our IELTS courses and programs"
                >
                  📚 View Courses
                </Button>
              </div>
              
              <div className="mt-4">
                <div 
                  className="d-flex align-items-center gap-3 flex-wrap"
                  style={{ opacity: '0.9' }}
                >
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>⭐</span>
                    <small>Trusted by 10,000+ students</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>🎯</span>
                    <small>95% success rate</small>
                  </div>
                  <div className="d-flex align-items-center">
                    <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>🌍</span>
                    <small>Worldwide recognition</small>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6} md={12} className="text-center mt-4 mt-lg-0">
            <div 
              className={`slide-in-right ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div 
                className="hero-image-container"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '25px',
                  padding: '40px',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Floating elements */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '60px',
                    height: '60px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    animation: 'pulse 3s infinite'
                  }}
                  aria-hidden="true"
                >
                  📈
                </div>
                
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    width: '50px',
                    height: '50px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    animation: 'pulse 4s infinite'
                  }}
                  aria-hidden="true"
                >
                  🏆
                </div>

                <div 
                  style={{
                    width: '100%',
                    height: '320px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.85))',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: '#2c3e50',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div 
                    style={{ 
                      fontSize: '5rem', 
                      marginBottom: '20px',
                      animation: 'pulse 2s infinite'
                    }}
                    aria-hidden="true"
                  >
                    🎓
                  </div>
                  <h3 className="fw-bold mb-2">IELTS Success</h3>
                  <p className="mb-3 text-muted">Your Gateway to Global Opportunities</p>
                  
                  {/* Success metrics */}
                  <div className="d-flex justify-content-center gap-4 mt-3">
                    <div className="text-center">
                      <div className="fw-bold" style={{ color: '#27ae60', fontSize: '1.5rem' }}>8.5</div>
                      <small className="text-muted">Avg Score</small>
                    </div>
                    <div className="text-center">
                      <div className="fw-bold" style={{ color: '#3498db', fontSize: '1.5rem' }}>95%</div>
                      <small className="text-muted">Success Rate</small>
                    </div>
                    <div className="text-center">
                      <div className="fw-bold" style={{ color: '#e74c3c', fontSize: '1.5rem' }}>3</div>
                      <small className="text-muted">Months</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;