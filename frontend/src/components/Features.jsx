import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';

const Features = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  const features = [
    {
      icon: '🎤',
      title: 'Speaking Practice',
      description: 'Interactive speaking sessions with native speakers and AI-powered pronunciation feedback to boost your confidence.',
      color: '#e74c3c',
      benefits: ['Native Speaker Sessions', 'AI Pronunciation Analysis', 'Real-time Feedback'],
      stats: { students: '2,500+', improvement: '+1.5 avg', sessions: '10,000+' },
      details: 'Practice with certified native English speakers from the UK, US, Canada, and Australia. Our AI analyzes your pronunciation, fluency, and grammar in real-time.',
      popular: true
    },
    {
      icon: '📝',
      title: 'Mock Tests',
      description: 'Full-length practice tests that simulate real IELTS conditions with detailed performance analytics.',
      color: '#f39c12',
      benefits: ['Real Exam Simulation', 'Detailed Analytics', 'Progress Tracking'],
      stats: { tests: '50+', accuracy: '99%', students: '5,000+' },
      details: 'Access our comprehensive library of official-style IELTS tests. Get detailed feedback on each section with personalized improvement strategies.',
      popular: false
    },
    {
      icon: '🤖',
      title: 'AI Band Score Prediction',
      description: 'Advanced AI technology predicts your band score and provides personalized improvement recommendations.',
      color: '#9b59b6',
      benefits: ['Accurate Predictions', 'Personalized Tips', 'Weakness Analysis'],
      stats: { accuracy: '94%', predictions: '15,000+', features: '50+' },
      details: 'Our proprietary AI algorithm analyzes your performance across all four skills and predicts your actual IELTS band score with 94% accuracy.',
      popular: true
    },
    {
      icon: '👨‍🏫',
      title: 'Personal Mentorship',
      description: 'One-on-one guidance from certified IELTS trainers to address your specific weaknesses and goals.',
      color: '#27ae60',
      benefits: ['1-on-1 Sessions', 'Certified Trainers', 'Custom Study Plans'],
      stats: { trainers: '25+', success: '98%', hours: '5,000+' },
      details: 'Work directly with certified IELTS examiners and experienced trainers. Get personalized study plans tailored to your specific needs and target score.',
      popular: false
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

    const cards = sectionRef.current?.querySelectorAll('.feature-card');
    cards?.forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleGetStarted = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-4" 
      style={{ 
        backgroundColor: '#f8f9fa',
        position: 'relative'
      }}
      aria-label="IELTS Program Features"
    >
      {/* Background decorative elements */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'rgba(52, 152, 219, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 5s infinite'
        }}
        aria-hidden="true"
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '80px',
          height: '80px',
          background: 'rgba(231, 76, 60, 0.1)',
          borderRadius: '50%',
          animation: 'pulse 7s infinite'
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
                Why Choose Our <span className="gradient-text">IELTS Program?</span>
              </h2>
              <p 
                className="lead"
                style={{ color: '#6c757d', fontSize: '1.1rem', lineHeight: '1.7' }}
              >
                Our comprehensive approach combines cutting-edge technology with expert instruction 
                to give you the best chance of achieving your target band score.
              </p>
            </div>
          </Col>
        </Row>
        
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col lg={3} md={6} key={index}>
              <Card 
                className={`feature-card h-100 shadow-sm border-0 card-hover ${
                  visibleCards.includes(index) ? 'scale-in visible' : 'scale-in'
                } ${hoveredCard === index ? 'feature-hovered' : ''}`}
                style={{ 
                  borderRadius: '20px',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  transitionDelay: `${index * 0.1}s`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
                role="article"
                aria-label={`${feature.title} feature`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveFeature(index)}
              >
                {/* Popular Badge */}
                {feature.popular && (
                  <Badge 
                    style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                      color: 'white',
                      fontSize: '0.75rem',
                      padding: '6px 12px',
                      borderRadius: '15px',
                      zIndex: 2,
                      boxShadow: '0 2px 8px rgba(255, 107, 107, 0.3)'
                    }}
                  >
                    🔥 Popular
                  </Badge>
                )}

                {/* Hover Effect Overlay */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${feature.color}05, ${feature.color}15)`,
                    opacity: hoveredCard === index ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 1
                  }}
                />

                <Card.Body className="text-center p-4" style={{ position: 'relative', zIndex: 2 }}>
                  <div 
                    className="mb-4"
                    style={{
                      fontSize: '3.5rem',
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}10)`,
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      border: `3px solid ${feature.color}30`,
                      transition: 'all 0.3s ease',
                      transform: hoveredCard === index ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                      boxShadow: hoveredCard === index ? `0 8px 25px ${feature.color}40` : '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                  >
                    {feature.icon}
                  </div>
                  
                  <Card.Title 
                    className="fw-bold mb-3"
                    style={{ 
                      color: '#2c3e50',
                      fontSize: '1.3rem',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {feature.title}
                  </Card.Title>
                  
                  <Card.Text 
                    style={{ 
                      color: '#6c757d',
                      lineHeight: '1.6',
                      marginBottom: '20px',
                      fontSize: '0.95rem'
                    }}
                  >
                    {feature.description}
                  </Card.Text>

                  {/* Stats Row */}
                  <div className="mb-3">
                    <Row className="g-2">
                      {Object.entries(feature.stats).map(([key, value], statIndex) => (
                        <Col key={statIndex} className="text-center">
                          <div 
                            style={{
                              background: `${feature.color}15`,
                              borderRadius: '8px',
                              padding: '8px 4px',
                              border: `1px solid ${feature.color}30`
                            }}
                          >
                            <div 
                              className="fw-bold"
                              style={{ 
                                color: feature.color, 
                                fontSize: '0.9rem',
                                lineHeight: '1.2'
                              }}
                            >
                              {value}
                            </div>
                            <div 
                              style={{ 
                                fontSize: '0.7rem', 
                                color: '#666',
                                textTransform: 'capitalize'
                              }}
                            >
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>

                  {/* Benefits list */}
                  <div className="mb-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div 
                        key={benefitIndex}
                        className="d-flex align-items-center mb-2"
                        style={{ 
                          fontSize: '0.85rem', 
                          color: '#555',
                          transition: 'all 0.3s ease',
                          transform: hoveredCard === index ? 'translateX(5px)' : 'translateX(0)',
                          transitionDelay: `${benefitIndex * 0.1}s`
                        }}
                      >
                        <span 
                          style={{ 
                            color: feature.color, 
                            marginRight: '8px',
                            fontSize: '0.9rem',
                            transition: 'transform 0.3s ease'
                          }}
                        >
                          ✓
                        </span>
                        {benefit}
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <Button 
                    variant="outline"
                    size="sm"
                    style={{
                      borderColor: feature.color,
                      color: feature.color,
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      padding: '6px 16px',
                      transition: 'all 0.3s ease',
                      opacity: hoveredCard === index ? 1 : 0.7,
                      transform: hoveredCard === index ? 'translateY(-2px)' : 'translateY(0)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = feature.color;
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = feature.color;
                    }}
                  >
                    Learn More →
                  </Button>
                  
                  <div 
                    style={{
                      height: '4px',
                      background: `linear-gradient(90deg, ${feature.color}, ${feature.color}80)`,
                      borderRadius: '2px',
                      marginTop: '20px',
                      transform: hoveredCard === index ? 'scaleX(1.1)' : 'scaleX(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Feature Detail Showcase */}
        <Row className="mt-4">
          <Col lg={12}>
            <div 
              className="p-3 rounded-4 fade-in"
              style={{ 
                background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                border: '2px solid #e9ecef',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div className="text-center mb-3">
                <h4 className="fw-bold mb-2" style={{ color: '#2c3e50' }}>
                  🎯 Featured: {features[activeFeature].title}
                </h4>
                <p className="text-muted mb-0">
                  {features[activeFeature].details}
                </p>
              </div>
              
              <Row className="align-items-center">
                <Col md={6}>
                  <div className="text-center">
                    <div 
                      style={{
                        fontSize: '6rem',
                        background: `linear-gradient(135deg, ${features[activeFeature].color}20, ${features[activeFeature].color}10)`,
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        border: `4px solid ${features[activeFeature].color}30`,
                        animation: 'pulse 3s infinite'
                      }}
                    >
                      {features[activeFeature].icon}
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="ps-md-4">
                    <h5 className="fw-bold mb-3" style={{ color: features[activeFeature].color }}>
                      Why Choose {features[activeFeature].title}?
                    </h5>
                    <ul className="list-unstyled">
                      {features[activeFeature].benefits.map((benefit, index) => (
                        <li key={index} className="mb-2 d-flex align-items-center">
                          <span 
                            style={{ 
                              color: features[activeFeature].color, 
                              marginRight: '10px',
                              fontSize: '1.1rem'
                            }}
                          >
                            ✓
                          </span>
                          <span style={{ fontSize: '0.95rem' }}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-3">
                      <Button 
                        variant="outline"
                        size="sm"
                        style={{
                          borderColor: features[activeFeature].color,
                          color: features[activeFeature].color,
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          padding: '8px 20px'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = features[activeFeature].color;
                          e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = features[activeFeature].color;
                        }}
                      >
                        Try {features[activeFeature].title} Now
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col className="text-center">
            <div 
              className="p-4 rounded-4 fade-in"
              style={{ 
                background: 'linear-gradient(135deg, #3498db, #2c3e50)',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background pattern */}
              <div 
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  animation: 'pulse 4s infinite'
                }}
                aria-hidden="true"
              />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h4 className="fw-bold mb-2">Ready to Start Your IELTS Journey?</h4>
                <p className="mb-3" style={{ opacity: '0.9' }}>
                  Join thousands of successful students who achieved their dream scores
                </p>
                
                <div className="d-flex justify-content-center gap-5 flex-wrap mb-3">
                  <div className="text-center">
                    <div className="fw-bold" style={{ fontSize: '2rem', color: '#ffd700' }}>10,000+</div>
                    <small>Students Trained</small>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold" style={{ fontSize: '2rem', color: '#2ecc71' }}>95%</div>
                    <small>Success Rate</small>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold" style={{ fontSize: '2rem', color: '#e74c3c' }}>8.5</div>
                    <small>Average Band Score</small>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold" style={{ fontSize: '2rem', color: '#f39c12' }}>24/7</div>
                    <small>Support Available</small>
                  </div>
                </div>

                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Button 
                    className="btn-custom px-5 py-3"
                    onClick={handleGetStarted}
                    style={{
                      background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                      border: 'none',
                      color: '#2c3e50',
                      fontWeight: '700',
                      borderRadius: '50px',
                      boxShadow: '0 4px 15px rgba(255, 215, 0, 0.4)'
                    }}
                    aria-label="Get started with IELTS Excellence program"
                  >
                    🚀 Get Started Today
                  </Button>
                  
                  <Button 
                    variant="outline-light"
                    className="px-4 py-3"
                    style={{
                      borderRadius: '50px',
                      fontWeight: '600',
                      border: '2px solid rgba(255, 255, 255, 0.8)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    📞 Book Free Consultation
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

export default Features;