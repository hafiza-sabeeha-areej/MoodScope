import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';
import '../styles/responsive.css';

const Header = ({ isAuthenticated = false, onSignOut }) => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const headerClass = isHomePage ? 'header-area header-three' : 'header-area header-two';

  return (
   
 <header className={headerClass}>
      {isHomePage && (
        <div className="header-top second-header d-none d-md-block">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2"></div>
              <div className="col-lg-6 col-md-7 d-none d-md-block">
                <div className="header-cta">
                  <ul>
                    <li>
                      <div className="call-box">
                        <div className="icon">
                          <i className="fa-regular fa-phone"></i>
                        </div>
                        <div className="text">
                          <strong><a href="tel:+921234567890">+92 123 4567890</a></strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="call-box">
                        <div className="icon">
                          <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className="text">
                          <strong><a href="mailto:info@moodscope.pk">info@moodscope.pk</a></strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="call-box">
                        <div className="icon">
                          <i className="fa-regular fa-location-dot"></i>
                        </div>
                        <div className="text">
                          <strong>Multan</strong>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-3 text-right d-none d-md-block">
                <div className="header-social">
                  <span>
                    <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" title="LinkedIn"><i className="fab fa-instagram"></i></a>
                    <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" title="YouTube"><i className="fab fa-youtube"></i></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div id="header-sticky" className={`menu-area ${isSticky ? 'sticky' : ''}`}>
        <div className={isHomePage ? 'container-fluid' : 'container'}>
          <div className="second-menu">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-12">
                <div className="logo">
                  <Link to="/">
                    <img 
                      src={isHomePage ? '/static/MOODSCOPE.png' : '/static/MOODSCOPE.png'} 
                      alt="logo" 
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 text-center">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      {isAuthenticated ? (
                        <>
                          <li className="has-sub">
                            <Link to="/dashboard">Dashboard</Link>
                          </li>
                          <li><Link to="/predict">Prediction</Link></li>
                          <li><Link to="/train-model">Model Training</Link></li>
                        </>
                      ) : (
                        <>
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/contact">Contact Us</Link></li>
                          <li><Link to="/sign-up">Sign Up</Link></li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 text-right d-none d-lg-block mt-10 mb-10">
                {isAuthenticated ? (
                  <button onClick={onSignOut} className="btn">Sign Out</button>
                ) : (
                  <Link to="/sign-in" className={isHomePage ? 'btn' : 'top-btn mt-15 mb-15'}>
                    Sign In {!isHomePage && <i className="fa-light fa-sign-in"></i>}
                  </Link>
                )}
              </div>
              <div className="col-12">
                <div className="mobile-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Header;













 
        
  
