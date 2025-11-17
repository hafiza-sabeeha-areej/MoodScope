import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/SignUp.css';
import '../styles/responsive.css'

const SignUp = ({ onSignUp }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    age: '',
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
    // Handle sign up logic here
    if (onSignUp) {
      onSignUp();
    }
    navigate('/dashboard');
  };

  const handleReset = () => {
    setFormData({
      firstname: '',
      lastname: '',
      gender: '',
      age: '',
      email: '',
      password: ''
    });
  };

  const ageOptions = Array.from({ length: 13 }, (_, i) => i + 5);

  return (
    <div className="signup-page">
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
                    <h2>Sign Up</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="contact-form mt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="contact-field p-relative c-name mb-20">
                          <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="First Name"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-field p-relative c-name mb-20">
                          <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Last Name"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-field p-relative c-name mb-20">
                          <select name="gender" id="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-field p-relative c-name mb-20">
                          <select name="age" id="age" value={formData.age} onChange={handleChange} required>
                            <option value="">Age</option>
                            {ageOptions.map(age => (
                              <option key={age} value={age}>{age}</option>
                            ))}
                          </select>
                        </div>
                      </div>
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
                            <span>Sign Up<i className="fa-light fa-user-plus"></i></span>
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

export default SignUp;

