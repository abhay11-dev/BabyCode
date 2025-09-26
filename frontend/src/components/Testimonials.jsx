import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'Canada',
      score: '8.5',
      image: '👩‍🦰',
      text: 'The personalized mentorship and AI feedback helped me improve from 6.5 to 8.5 in just 3 months. The speaking practice sessions were incredibly effective!',
      course: 'General IELTS',
      improvement: '+2.0',
      duration: '3 months'
    },
    {
      name: 'Ahmed Al-Rashid',
      country: 'UAE',
      score: '8.0',
      image: '👨‍💼',
      text: 'Excellent mock tests that prepared me perfectly for the real exam. The detailed analytics showed exactly where I needed to improve.',
      course: 'Academic IELTS',
      improvement: '+1.5',
      duration: '4 months'
    },
    {
      name: 'Priya Sharma',
      country: 'India',
      score: '9.0',
      image: '👩‍🎓',
      text: 'I achieved my dream score of 9.0! The comprehensive study materials and expert guidance made all the difference in my preparation journey.',
      course: 'General IELTS',
      improvement: '+2.5',
      duration: '5 months'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
    cards?.forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials (commented out for now)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [testimonials.length]);

  const handleJoinNow = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-4" 
      style={{ 
        backgroundColor: 'white',
        position: 'relative'
      }}
      aria-label="Student Success Stories"
    >
      {/* Background decorative elements */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          right: '8%',
          width: '120px',
          height: '120px',
          background: 'rgba(39, 174, 96, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 6s infinite'
        }}
        aria-hidden="true"
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '25%',
          left: '8%',
          width: '80px',
          height: '80px',
          background: 'rgba(52, 152, 219, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 8s infinite'
        }}
        aria-hidden="true"
      />

      <Container>
        <Row className="mb-4">
          <Col lg={8} className="mx-auto text-center">
            <div className="fade-in">
              <h2 
                className="display-5 fw-bold mb-3"
                style={{ color: '#2c3e50' }}
              >
                Success Stories from Our <span className="gradient-text">Students</span>
              </h2>
              <p 
                className="lead"
                style={{ color: '#6c757d', lineHeight: '1.7' }}
              >
                Hear from students who achieved their target band scores and transformed their futures
              </p>
            </div>
          </Col>
        </Row>
        
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col lg={4} md={6} key={index}>
              <Card 
                className={`testimonial-card h-100 shadow border-0 card-hover ${
                  visibleCards.includes(index) ? 'fade-in visible' : 'fade-in'
                }`}
                style={{ 
                  borderRadius: '25px',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  transitionDelay: `${index * 0.2}s`
                }}
                role="article"
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                {/* Score Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #27ae60, #2ecc71)',
                    color: 'white',
                    padding: '10px 18px',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    zIndex: 1,
                    boxShadow: '0 4px 15px rgba(39, 174, 96, 0.3)'
                  }}
                >
                  Band {testimonial.score}
                </div>

                {/* Improvement Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                    color: 'white',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    zIndex: 1,
                    boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)'
                  }}
                >
                  {testimonial.improvement}
                </div>
                
                <Card.Body className="p-4">
                  <div className="text-center mb-4">
                    <div 
                      style={{
                        fontSize: '4.5rem',
                        marginBottom: '15px',
                        animation: 'pulse 3s infinite'
                      }}
                    >
                      {testimonial.image}
                    </div>
                    
                    <h5 
                      className="fw-bold mb-1"
                      style={{ color: '#2c3e50', fontSize: '1.2rem' }}
                    >
                      {testimonial.name}
                    </h5>
                    
                    <p 
                      className="text-muted mb-2"
                      style={{ fontSize: '0.9rem' }}
                    >
                      {testimonial.country} • {testimonial.course}
                    </p>

                    <div 
                      className="d-flex justify-content-center align-items-center gap-2 mb-3"
                      style={{ fontSize: '0.85rem', color: '#666' }}
                    >
                      <span>⏱️</span>
                      <span>{testimonial.duration}</span>
                    </div>
                  </div>
                  
                  <div className="mb-3 text-center">
                    <div className="text-warning mb-2" style={{ fontSize: '1.1rem' }}>
                      {'⭐'.repeat(5)}
                    </div>
                  </div>
                  
                  <blockquote 
                    className="mb-0"
                    style={{ 
                      fontSize: '0.95rem',
                      lineHeight: '1.7',
                      color: '#555',
                      fontStyle: 'italic',
                      position: 'relative',
                      paddingLeft: '25px',
                      paddingRight: '10px'
                    }}
                  >
                    <div 
                      style={{
                        position: 'absolute',
                        left: '0',
                        top: '-8px',
                        fontSize: '2.5rem',
                        color: '#3498db',
                        opacity: '0.2',
                        fontFamily: 'serif'
                      }}
                    >
                      "
                    </div>
                    {testimonial.text}
                  </blockquote>
                </Card.Body>

                {/* Bottom accent */}
                <div 
                  style={{
                    height: '5px',
                    background: 'linear-gradient(90deg, #27ae60, #2ecc71)',
                    borderRadius: '0 0 25px 25px'
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-4">
          <Col className="text-center">
            <div 
              className="d-inline-flex align-items-center gap-3 p-4 rounded-4 fade-in"
              style={{ 
                background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                border: '2px dashed #3498db',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background pattern */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '100px',
                  height: '100px',
                  background: 'rgba(52, 152, 219, 0.1)',
                  borderRadius: '50%',
                  animation: 'pulse 4s infinite'
                }}
                aria-hidden="true"
              />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏆</div>
                <div>
                  <h5 className="mb-2" style={{ color: '#2c3e50', fontSize: '1.3rem' }}>
                    Join Our Success Community
                  </h5>
                  <p className="mb-2 text-muted" style={{ fontSize: '1rem' }}>
                    Start your journey to IELTS success today
                  </p>
                  <Button 
                    className="btn-custom px-4 py-2"
                    onClick={handleJoinNow}
                    style={{
                      background: 'linear-gradient(135deg, #3498db, #2980b9)',
                      border: 'none',
                      borderRadius: '25px',
                      fontWeight: '600'
                    }}
                    aria-label="Join IELTS Excellence program"
                  >
                    🚀 Start Your Journey
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;