import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/TrainModel.css';
import '../styles/responsive.css';

const TrainModel = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    modelName: '',
    normalFile: null,
    stressedFile: null,
    model: ''
  });
  const [trainingResult, setTrainingResult] = useState({
    modelName: '',
    modelChoice: '',
    modelAccuracy: '',
    modelMse: '',
    modelRmse: '',
    modelMae: '',
    modelRsquare: ''
  });

  const handleSignOut = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files
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
    // Handle model training logic here
    console.log('Form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      modelName: '',
      normalFile: null,
      stressedFile: null,
      model: ''
    });
    setTrainingResult({
      modelName: '',
      modelChoice: '',
      modelAccuracy: '',
      modelMse: '',
      modelRmse: '',
      modelMae: '',
      modelRsquare: ''
    });
  };

  return (
    <div className="train-model-page">
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
                    <h2>Model Training</h2>
                    <div className="breadcrumb-wrap">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                          <li className="breadcrumb-item active" aria-current="page">Model Training</li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Train Model Area */}
        <section className="contact-area pt-120 pb-120 p-relative fix">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="contact-bg02 contact-bg-gry2">
                  <div className="section-title mb-20 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                    <h5>
                      <img src="/static/img/bg/sub-icon.png" alt="icon01" /> UPLOAD NORMAL VOICE, STRESSED VOICE AND SELECT MODEL
                    </h5>
                    <h2>Model Training</h2>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    className="contact-form mt-30 wow fadeInUp animated"
                    data-animation="fadeInUp"
                    data-delay=".4s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-name mb-20">
                          <input
                            type="text"
                            id="modelName"
                            name="modelName"
                            placeholder="Model Name"
                            value={formData.modelName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-name mb-20">
                          <label>Normal Voices</label>
                          <input
                            type="file"
                            id="normalFile"
                            name="normalFile"
                            accept=".wav"
                            onChange={handleChange}
                            multiple
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-name mb-20">
                          <label>Stressed Voices</label>
                          <input
                            type="file"
                            id="stressedFile"
                            name="stressedFile"
                            accept=".wav"
                            onChange={handleChange}
                            multiple
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="contact-field p-relative c-name mb-20">
                          <select name="model" id="model" value={formData.model} onChange={handleChange} required>
                            <option value="">Select Model</option>
                            <option value="logistic_regression">Logistic Regression</option>
                            <option value="random_forest">Random Forest</option>
                            <option value="svm_gaussian_kernel">SVM Gaussian Kernel</option>
                            <option value="svm_linear_kernel">SVM Linear Kernel</option>
                          </select>
                        </div>
                      </div>
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
                            <span>Train Model<i className="fa-light fa-plus"></i></span>
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
                    <h2>Training Details</h2>
                  </div>

                  <div className="prediction-results mt-30">
                    <div className="d-flex flex-row justify-content-between prediction-item">
                      <label htmlFor="modelUsed">Model Name:</label>
                      <span id="modelUsed">{trainingResult.modelName || 'N/A'}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between prediction-item">
                      <label htmlFor="modelUsed">Model Used:</label>
                      <span id="modelUsed">{trainingResult.modelChoice || 'N/A'}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between prediction-item">
                      <label htmlFor="predictionText">Accuracy:</label>
                      <span id="predictionText">{trainingResult.modelAccuracy ? `${trainingResult.modelAccuracy}%` : 'N/A'}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between prediction-item">
                      <label htmlFor="predictionPercentage">Mean Squared Error:</label>
                      <span id="predictionPercentage">{trainingResult.modelMse ? `${trainingResult.modelMse}%` : 'N/A'}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between prediction-item">
                      <label htmlFor="predictionPercentage">Root Mean Squared Error:</label>
                      <span id="predictionPercentage">{trainingResult.modelRmse ? `${trainingResult.modelRmse}%` : 'N/A'}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between prediction-item">
                      <label htmlFor="predictionPercentage">Mean Absolute Error:</label>
                      <span id="predictionPercentage">{trainingResult.modelMae ? `${trainingResult.modelMae}%` : 'N/A'}</span>
                    </div>
                    <div className="d-flex flex-row justify-content-between prediction-item">
                      <label htmlFor="predictionPercentage">R-Squared:</label>
                      <span id="predictionPercentage">{trainingResult.modelRsquare ? `${trainingResult.modelRsquare}%` : 'N/A'}</span>
                    </div>
                    {trainingResult.modelName && (
                      <>
                        <div className="col-lg-12 mt-15">
                          <div className="slider-btn">
                            <a
                              href={`/download_model_report?model_name=${trainingResult.modelName}&model_choice=${trainingResult.modelChoice}&model_accuracy=${trainingResult.modelAccuracy}&model_mse=${trainingResult.modelMse}&model_rmse=${trainingResult.modelRmse}&model_mae=${trainingResult.modelMae}&model_rsquare=${trainingResult.modelRsquare}`}
                              className="btn ss-btn"
                              data-animation="fadeInRight"
                              data-delay=".8s"
                            >
                              <span>Download Report<i className="fa-light fa-download"></i></span>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-12 mt-15">
                          <div className="slider-btn">
                            <a
                              href={`/download_model_file?model_name=${trainingResult.modelName}&model_choice=${trainingResult.modelChoice}`}
                              className="btn ss-btn"
                              data-animation="fadeInRight"
                              data-delay=".8s"
                            >
                              <span>Download Trained Model<i className="fa-light fa-download"></i></span>
                            </a>
                          </div>
                        </div>
                      </>
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

export default TrainModel;

