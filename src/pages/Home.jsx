import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';
import '../styles/responsive.css';

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState('collapseThree');

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="home-page">
      <Header />
      <main>
        {/* Slider Area */}
        <section
          id="parallax"
          className="slider-area slider-bg second-slider-bg d-flex align-items-center justify-content-center fix"
          style={{ backgroundImage: 'url(/static/img/slider/slider_bg.png)', backgroundSize: 'cover' }}
        >
          <div className="single-slider slider-bg d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="slider-content s-slider-content mt-100">
                    {/* <h5 className="wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                      DDCV<span><img src="/static/img/slider/h-line.png" alt="shape" /></span>
                    </h5> */}
                    <h2 className="wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                      Depression Detection <span>In Children</span> With Voice
                    </h2>
                    <p className="wow fadeInUp animated" data-animation="fadeInUp" data-delay=".6s">
                      Depressed children may exhibit symptoms such as persistent sadness, low energy, and changes in
                      appetite or sleep patterns.
                    </p>
                    <div className="slider-btn mt-50 mb-105">
                      <Link to="/predict" className="btn ss-btn mr-15 wow fadeInUp animated" data-delay=".7s">
                        Predict Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 p-relative text-right">
                  <div className="slider-img wow fadeInRight animated" data-delay=".6s">
                    <img src="/static/img/slider/man_header.png" alt="shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="service-three p-relative fix pt-120 pb-90">
          <div className="animations-01">
            <img src="/static/img/bg/ani-img-01.png" alt="an-img-01" />
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center mb-50">
              <div className="col-lg-6 col-md-12">
                <div className="section-title center-align text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                  <h5>
                    <img src="/static/img/bg/sub-icon.png" alt="icon01" /> Our Services
                  </h5>
                  <h2>Detect Depression With The Followings Models</h2>
                </div>
              </div>
            </div>
            <div className="row sbox">
              {[
                { title: 'Logistic Regression', description: 'Health care is an essential category that many encompasses a wide range of services aimed at promoting and maintaining' },
                { title: 'Random Forest', description: 'Health care is an essential category that many encompasses a wide range of services aimed at promoting and maintaining' },
                { title: 'SVM Gaussian Kernal', description: 'Health care is an essential category that many encompasses a wide range of services aimed at promoting and maintaining' },
                { title: 'SVM Linear Kernal', description: 'Health care is an essential category that many encompasses a wide range of services aimed at promoting and maintaining' }
              ].map((service, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="services-box mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="sr-contner">
                      <div className="icon">
                        <div className="icon-hover-one">
                          <img src="/static/img/icon/sve-icon1.png" alt="icon01" />
                        </div>
                        <div className="icon-hover-two">
                          <img src="/static/img/icon/sve-icon-w1.png" alt="icon01" />
                        </div>
                      </div>
                      <div className="text">
                        <h3><a href="#services">{service.title}</a></h3>
                        <p>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Area */}
        <section className="about-area about-p pt-120 pb-180 p-relative fix" style={{ background: '#F2F2F2' }}>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="about-content s-about-content mb-50 wow fadeInRight animated" data-animation="fadeInRight" data-delay=".4s">
                  <div className="section-title second-title pb-25">
                    <h5>
                      <img src="/static/img/bg/sub-icon.png" alt="icon01" /> About Us
                    </h5>
                    <h2>Empowering Mental Health Through Technology</h2>
                  </div>
                  <p>
                    We are dedicated to leveraging innovative technology to address mental health challenges,
                    with a focus on early detection and intervention for children experiencing depression.
                    Our mission is to provide accessible and effective solutions to support the well-being
                    of vulnerable populations.
                  </p>
                  <div className="about-content3 mt-30 mb-30">
                    <div className="row">
                      <div className="col-md-12">
                        <ul className="green">
                          <li>Leveraging technology to detect depression in children through voice analysis.</li>
                          <li>Committed to early intervention and support for mental health issues in vulnerable populations.</li>
                          <li>Dedicated to providing accessible and effective solutions for promoting well-being.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <span className="h-call-box">
                    <div className="icon">
                      <a href="tel:+921234567890">
                        <img src="/static/img/slider/h-play2.png" alt="shape" />
                      </a>
                    </div>
                    <div className="text">
                      <strong>Call Us Anytime</strong>
                      <a href="tel:+921234567890">+92 123 4567890</a>
                    </div>
                  </span>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 col-sm-12"></div>
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="s-about-img text-right p-relative wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                  <img src="/static/img/features/about_img_01.png" alt="img" />
                  <div className="about-text second-about text-left">
                    <div className="box-text">
                      <div className="icon">
                        <img src="/static/img/features/ab-ani-01.png" alt="img" />
                      </div>
                      <div className="text">
                        <span>1.5k+</span>
                        Services we provide
                      </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and nkqjfd ghjkkllkl typesetting industry.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Area */}
        <section
          className="faq-area p-relative fix"
          style={{ backgroundImage: 'url(/static/img/bg/faq-bg.png)', backgroundRepeat: 'no-repeat' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-title wow fadeInLeft animated mt-80 pr-80" data-animation="fadeInDown animated" data-delay=".2s">
                  <h5>
                    <img src="/static/img/bg/sub-icon.png" alt="icon01" /> Ask Anything
                  </h5>
                  <h2>Caring For You</h2>
                  <p>
                    Have questions about depression detection in children with voice analysis? We're here to help!
                  </p>
                  <div className="faq-contact">
                    <ul>
                      <li>
                        <div className="call-box">
                          <div className="icon">
                            <i className="fa fa-envelope"></i>
                          </div>
                          <div className="text">
                            Main Email : info@moodscope.pk<br />Inquiries : info@moodscope.pk
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="call-box">
                          <div className="icon">
                            <i className="fa fa-phone"></i>
                          </div>
                          <div className="text">
                            Telephone : +92 123 4567890 <br />Mobile : +92 123 4567890
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-wrap wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                  <div className="accordion" id="accordionExample">
                    {[
                      {
                        id: 'collapseThree',
                        question: '1. How accurate is voice analysis in detecting depression in children?',
                        answer: 'Voice analysis has shown promising results in identifying depressive symptoms, with studies indicating high accuracy rates in detecting vocal biomarkers associated with depression.'
                      },
                      {
                        id: 'collapseOne',
                        question: '2. Is the depression detection system suitable for use by parents and educators?',
                        answer: 'Yes, our system is designed to be user-friendly and accessible, making it suitable for parents, teachers, and other caregivers concerned about the mental well-being of children.'
                      },
                      {
                        id: 'collapseTwo',
                        question: '3. What measures are in place to ensure the privacy and confidentiality of user data?',
                        answer: 'We prioritize data privacy and adhere to strict security protocols to safeguard user information. All data is encrypted and handled in accordance with industry standards and regulations.'
                      },
                      {
                        id: 'collapseFour',
                        question: '4. How can I contribute to the development of the depression detection system?',
                        answer: 'We welcome collaboration and feedback from stakeholders interested in improving mental health support for children. Reach out to us to explore partnership opportunities or share your insights and suggestions.'
                      }
                    ].map((faq) => (
                      <div key={faq.id} className="card">
                        <div className="card-header">
                          <h2 className="mb-0">
                            <button
                              className={`faq-btn ${activeAccordion === faq.id ? '' : 'collapsed'}`}
                              type="button"
                              onClick={() => toggleAccordion(faq.id)}
                            >
                              {faq.question}
                            </button>
                          </h2>
                        </div>
                        <div
                          id={faq.id}
                          className={`collapse ${activeAccordion === faq.id ? 'show' : ''}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="card-body">{faq.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Process Area */}
        <section className="work-process pt-120 pb-120 p-relative fix">
          <div className="animations-02">
            <img src="/static/img/bg/ani-img-01.png" alt="an-img-01" />
          </div>
          <div className="container">
            <div className="row justify-content-center align-items-center mb-60">
              <div className="col-lg-6 col-md-12">
                <div className="section-title center-align text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                  <h5>
                    <img src="/static/img/bg/sub-icon.png" alt="icon01" /> Work Process
                  </h5>
                  <h2>Empowering Mental Health</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {[
                {
                  icon: '/static/img/icon/process-icon-01.png',
                  title: 'Data Collection and Preprocessing',
                  description: 'Gather voice samples from children for analysis and preprocess the data to ensure accuracy in depression detection.'
                },
                {
                  icon: '/static/img/icon/process-icon-02.png',
                  title: 'Model Training and Optimization',
                  description: 'Utilize machine learning algorithms to train the depression detection model and optimize it to enhance predictive accuracy and efficiency.'
                },
                {
                  icon: '/static/img/icon/process-icon-03.png',
                  title: 'Testing and Validation',
                  description: 'Conduct thorough testing of the developed system to validate its performance and evaluate accuracy and reliability through real-world scenarios and user feedback.'
                }
              ].map((process, index) => (
                <div key={index} className="col-lg-4 col-md-12">
                  <div className="work-process-box text-center">
                    <div className="icon">
                      <img src={process.icon} alt="icon01" />
                    </div>
                    <div className="text">
                      <h3><a href="#process">{process.title}</a></h3>
                      <p>{process.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Area */}
        <section
          className="contact-area pt-120 pb-120 p-relative fix"
          style={{ backgroundImage: 'url(/static/img/bg/contac-bg.png)', backgroundRepeat: 'no-repeat' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-img2">
                  <img src="/static/img/bg/contact-img.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-bg02">
                  <div className="section-title wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                    <h5>
                      <img src="/static/img/bg/sub-icon.png" alt="icon01" /> TALK TO US
                    </h5>
                    <h2>Get In Touch</h2>
                  </div>
                  <form action="/contact" method="post" className="contact-form mt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="contact-field p-relative c-name mb-20">
                          <input type="text" id="name" name="name" placeholder="Name" required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-field p-relative c-subject mb-20">
                          <input type="text" id="email" name="email" placeholder="Email" required />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-subject mb-20">
                          <input type="text" id="subject" name="subject" placeholder="Subject" required />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-message mb-30">
                          <textarea name="message" id="message" cols="30" rows="10" placeholder="Write comments" required></textarea>
                        </div>
                        <div className="slider-btn">
                          <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">
                            <span>Submit Now</span>
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

export default Home;

