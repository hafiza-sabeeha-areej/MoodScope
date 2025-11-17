import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Contact.css';
import '../styles/responsive.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <main>
        {/* Breadcrumb Area */}
        <section
          className="breadcrumb-area d-flex align-items-center"
          style={{ backgroundImage: 'url(/static/img/bg/bdrc-bg.jpg)' }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="breadcrumb-wrap text-center">
                  <div className="breadcrumb-title">
                    <h2>Contact Us</h2>
                    <div className="breadcrumb-wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="/">Home</a></li>
                          <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Area */}
        <section id="contact" className="contact-area3 after-none contact-bg pt-120 pb-90 p-relative fix">
          <div className="container">
            <div className="row per-info per-info2">
              {[
                { icon: 'fal fa-location-dot', title: 'Address', content: 'Multan' },
                { icon: 'fal fa-phone', title: 'Phone Number', content: '+92 123 4567890', link: 'tel:+92 123 4567890' },
                { icon: 'fal fa-envelope', title: 'E-mail', content: 'info@moodscope.pk', link: 'emailto:info@moodscope.pk' },
                { icon: 'fal fa-calendar-alt', title: 'Schedule', content: '24/7' }
              ].map((info, index) => (
                <div key={index} className="col-xl-3 col-lg-3 col-mb-3">
                  <div className="box mb-30">
                    <div className="icon"><i className={info.icon}></i></div>
                    <div className="text">
                      <h4>{info.title}</h4>
                      <p>
                        {info.link ? (
                          <a href={info.link}>{info.content}</a>
                        ) : (
                          info.content
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Area */}
        <div className="map fix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.272671725572!2d70.36984868885497!3d28.38083119999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375efadd8e3573%3A0xf516a4b3e4cb06b8!2sKhwaja%20Fareed%20University%20of%20Engineering%20%26%20Information%20Technology%20(KFUEIT)!5e0!3m2!1sen!2s!4v1711905849449!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Area */}
        <section className="contact-area-two pt-120 pb-120 p-relative fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="contact-bg03">
                  <div className="section-title wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                    <h5>Contact Now</h5>
                    <h2>Get In Touch</h2>
                  </div>
                  <form action="/contact" method="post" className="contact-form mt-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="contact-field p-relative c-name mb-20">
                          <label>Your Name</label>
                          <input type="text" id="name" name="name" placeholder="Name" required />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="contact-field p-relative c-subject mb-20">
                          <label>Your Email</label>
                          <input type="text" id="email" name="email" placeholder="Email" required />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-subject mb-20">
                          <label>Subject</label>
                          <input type="text" id="subject" name="subject" placeholder="Subject" required />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-message mb-30">
                          <label>Message</label>
                          <textarea name="message" id="message" cols="30" rows="20" placeholder="Write comments" required></textarea>
                        </div>
                        <div className="slider-btn">
                          <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">
                            <span>Submit</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="contact-img2">
                  <img src="/static/img/features/appointment-img.png" alt="img" />
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

export default Contact;

