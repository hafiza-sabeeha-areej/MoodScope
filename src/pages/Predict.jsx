import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Predict.css';
import '../styles/responsive.css';

const Predict = () => {
  const navigate = useNavigate();
  const [voiceOption, setVoiceOption] = useState('upload');
  const [formData, setFormData] = useState({
    voiceFile: null,
    voiceName: ''
  });
  const [predictionResult, setPredictionResult] = useState({
    fileName: '',
    predictionClass: '',
    predictionPercentage: '',
    selectedModel: ''
  });

  const handleSignOut = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    if (e.target.name === 'voiceFile') {
      setFormData({
        ...formData,
        voiceFile: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle prediction logic here
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      voiceFile: null,
      voiceName: ''
    });
    setPredictionResult({
      fileName: '',
      predictionClass: '',
      predictionPercentage: '',
      selectedModel: ''
    });
  };

  const handleRecord = () => {
    alert('Your recording will start now.');
    if (window.confirm('Click OK to start recording for 5 seconds.')) {
      // Handle recording logic
      console.log('Recording started');
    } else {
      alert('Recording cancelled.');
    }
  };

  return (
    <div className="predict-page">
      <Header isAuthenticated={true} onSignOut={handleSignOut} />
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
                    <h2>Prediction</h2>
                    <div className="breadcrumb-wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                          <li className="breadcrumb-item active" aria-current="page">Prediction</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Predict Area */}
        <section className="contact-area pt-120 pb-120 p-relative fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="contact-bg02 contact-bg-gry2">
                  <div className="section-title mb-20 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                    <h5>
                      <img src="/static/img/bg/sub-icon.png" alt="icon01" /> UPLOAD VOICE AND SELECT MODEL
                    </h5>
                    <h2>Depression Prediction</h2>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="contact-form mt-30 wow fadeInUp animated"
                    data-animation="fadeInUp"
                    data-delay=".4s"
                  >
                    <div className="row">
                      {/* Radio button group for toggling between recording voice and uploading voice */}
                      <div className="col-lg-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="voiceOption"
                            id="uploadVoiceOption"
                            value="upload"
                            checked={voiceOption === 'upload'}
                            onChange={(e) => setVoiceOption(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="uploadVoiceOption">
                            Upload Voice
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="voiceOption"
                            id="recordVoiceOption"
                            value="record"
                            checked={voiceOption === 'record'}
                            onChange={(e) => setVoiceOption(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="recordVoiceOption">
                            Record Voice
                          </label>
                        </div>
                      </div>

                      {/* Section for uploading voice */}
                      {voiceOption === 'upload' && (
                        <div id="uploadVoiceSection" className="col-lg-6">
                          <div className="contact-field p-relative c-name mb-20">
                            <input
                              type="file"
                              id="voiceFile"
                              name="voiceFile"
                              accept=".wav"
                              onChange={handleChange}
                              required={voiceOption === 'upload'}
                            />
                          </div>
                        </div>
                      )}

                      {/* Section for recording voice */}
                      {voiceOption === 'record' && (
                        <div id="recordVoiceSection" className="col-lg-6">
                          <div className="contact-field p-relative c-name mb-20">
                            <input
                              type="text"
                              id="voiceName"
                              name="voiceName"
                              placeholder="Voice Name"
                              value={formData.voiceName}
                              onChange={handleChange}
                              required={voiceOption === 'record'}
                            />
                          </div>
                          <div className="slider-btn">
                            <button
                              type="button"
                              id="recordButton"
                              onClick={handleRecord}
                              className="btn ss-btn"
                              data-animation="fadeInRight"
                              data-delay=".8s"
                            >
                              <span>Record<i className="fa-light fa-microphone"></i></span>
                            </button>
                          </div>
                        </div>
                      )}

                      <div className="col-lg-4">
                        <div className="slider-btn">
                          <button
                            type="button"
                            onClick={handleReset}
                            className="btn ss-btn"
                            data-animation="fadeInRight"
                            data-delay=".8s"
                          >
                            <span>Reset<i className="fa-light fa-refresh"></i></span>
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="slider-btn">
                          <button type="submit" className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">
                            <span>Predict<i className="fa-light fa-plus"></i></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="contact-bg02 contact-bg-gry2">
                  <div className="section-title mb-20 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                    <h5>
                      <img src="/static/img/bg/sub-icon.png" alt="icon01" /> DOWNLOAD RESULTS
                    </h5>
                    <h2>Prediction Details</h2>
                  </div>

                  <div className="prediction-results mt-30">
                    <div className="d-flex flex-row justify-content-between prediction-item">
                      <label htmlFor="voiceText">File Name:</label>
                      <span id="voiceText">{predictionResult.fileName || 'N/A'}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between prediction-item">
                      <label htmlFor="predictionText">Prediction:</label>
                      <span id="predictionText">{predictionResult.predictionClass || 'N/A'}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between prediction-item">
                      <label htmlFor="predictionPercentage">Prediction Percentage:</label>
                      <span id="predictionPercentage">{predictionResult.predictionPercentage || 'N/A'}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between prediction-item">
                      <label htmlFor="modelUsed">Model Used:</label>
                      <span id="modelUsed">{predictionResult.selectedModel || 'N/A'}</span>
                    </div>
                    {predictionResult.fileName && (
                      <div className="col-lg-8 mt-15">
                        <div className="slider-btn">
                          <a
                            href={`/download_prediction_report?file_name=${predictionResult.fileName}&prediction_class=${predictionResult.predictionClass}&prediction_percentage=${predictionResult.predictionPercentage}&selected_model=${predictionResult.selectedModel}`}
                            className="btn ss-btn"
                            data-animation="fadeInRight"
                            data-delay=".8s"
                          >
                            <span>Download Report<i className="fa-light fa-download"></i></span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer isAuthenticated={true} />
    </div>
  );
};

export default Predict;

