import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/SignIn.css';
import '../styles/responsive.css';

const SignIn = ({ onSignIn }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle sign in logic here
    if (onSignIn) {
      onSignIn();
    }
    navigate('/dashboard');
  };

  const handleReset = () => {
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div className="signin-page">
      <Header />
      <main>
        <section className="contact-area pt-120 pb-120 p-relative fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="contact-img3">
                  <img src="/static/img/bg/contact-img.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-bg02 contact-bg-gry2">
                  <div className="section-title mb-20 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                    <h5>
                      <img src="/static/img/bg/sub-icon.png" alt="icon01" /> TAKE A SERIAL
                    </h5>
                    <h2>Sign In</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="contact-form mt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-subject mb-20">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-name mb-30">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="slider-btn">
                          <button type="button" onClick={handleReset} className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">
                            <span>Reset<i className="fa-light fa-refresh"></i></span>
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="slider-btn">
                          <button type="submit" className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">
                            <span>Sign In<i className="fa-light fa-sign-in"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;

