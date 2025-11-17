import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import '../styles/responsive.css';

const Footer = ({ isAuthenticated = false }) => {
  return (
    <footer 
      className="footer-bg footer-two footer-p" 
      style={{ backgroundImage: 'url(/static/img/bg/footer-bg.png)' }}
    >
      <div className="footer-top pt-90 pb-30">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30" data-aos="fade-up" data-aos-duration="1000">
                <div className="f-widget-title">
                  <h2><img src="/static/img/logo/f_logo.png" alt="img" /></h2>
                </div>
                <div className="f-contact pr-10">
                  <p>
                    Empowering mental health through innovative technology, we strive to create
                    accessible solutions for early detection and intervention in children's mental
                    well-being, ensuring a brighter and healthier future for all.
                  </p>
                </div>
                <div className="footer-social mt-10">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="footer-widget mb-30" data-aos="fade-up" data-aos-duration="1400">
                <div className="f-widget-title">
                  <h2>Important Links</h2>
                </div>
                <div className="footer-link">
                  <ul>
                    {isAuthenticated ? (
                      <>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/predict">Prediction</Link></li>
                        <li><Link to="/train-model">Model Training</Link></li>
                      </>
                    ) : (
                      <>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/sign-in">Sign In</Link></li>
                        <li><Link to="/sign-up">Sign Up</Link></li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="footer-widget mb-30" data-aos="fade-up" data-aos-duration="1800">
                <div className="f-widget-title">
                  <h2>Contact Us</h2>
                </div>
                <div className="f-contact pr-10">
                  <ul>
                    <li>
                      <div className="icon">
                        <i className="icon fal fa-envelope"></i>
                        <span><a href="mailto:info@moodscope.pk">info@moodscope.pk</a></span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon fal fa-location-dot"></i>
                        <span>Multan, Lahore, Faisalabad, Punjab</span>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="icon fal fa-phone"></i>
                        <span><a href="tel:+921234567890">+92 123 4567890</a></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              Copyright © DDCV2025. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

