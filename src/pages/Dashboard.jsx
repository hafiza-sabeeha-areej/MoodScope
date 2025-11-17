import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Dashboard.css';
import '../styles/responsive.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    age: '15'
  });
  const [predictData] = useState([]);
  const [modelData] = useState([]);

  const handleSignOut = () => {
    navigate('/');
  };

  const handleDelete = async (id, type) => {
    // Handle delete logic
    console.log(`Delete ${type} with id: ${id}`);
  };

  const handleDeleteAll = async (type) => {
    // Handle delete all logic
    console.log(`Delete all ${type}`);
  };

  return (
    <div className="dashboard-page">
      <Header isAuthenticated={true} onSignOut={handleSignOut} />
      <main>
        {/* Why Choose Section */}
        <section
          className="choose-area about-p pt-20 pb-120 p-relative fix"
          style={{
            backgroundImage: 'url(/static/img/bg/choose-bg.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="section-title mb-30 wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                  <br />
                  <h5>
                    <img src="/static/img/bg/sub-icon-w.png" alt="icon01" /> Our service
                  </h5>
                  <h2>Depression Detection In Children With Voice</h2>
                </div>
                <p>
                  The Depression Detection in Children with Voice project is an innovative approach aimed at
                  identifying signs of depression in children through voice analysis. The objective of this
                  project is to develop an efficient and effective mechanism for early detection and monitoring of
                  depression in children.
                </p>
                <br />
                <br />
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="s-about-img p-relative wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                  <img src="/static/img/features/why-choose-img.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="choose-content mb-50 s-about-content wow fadeInRight animated" data-animation="fadeInRight" data-delay=".4s">
                  <p>NAME</p>
                  <h3>{userData.firstName} {userData.lastName}</h3>
                </div>
                <div className="choose-content mb-50 s-about-content wow fadeInRight animated" data-animation="fadeInRight" data-delay=".4s">
                  <p>GENDER</p>
                  <h3>{userData.gender}</h3>
                </div>
                <div className="choose-content mb-50 s-about-content wow fadeInRight animated" data-animation="fadeInRight" data-delay=".4s">
                  <p>AGE</p>
                  <h3>{userData.age}</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Area */}
        <div id="booking" className="booking-area p-relative">
          <div className="container">
            <form action="#" className="contact-form">
              <div className="row align-items-center">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <h1>Your Prediction Data</h1>
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Filename</th>
                              <th>Model</th>
                              <th>Prediction Class</th>
                              <th>Prediction Percentage</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {predictData.length > 0 ? (
                              predictData.map((row, index) => (
                                <tr key={index}>
                                  <td>{row[0]}</td>
                                  <td>{row[1]}</td>
                                  <td>{row[2]}</td>
                                  <td>{row[3]}</td>
                                  <td>{row[4]}</td>
                                  <td>
                                    <button
                                      type="button"
                                      onClick={() => handleDelete(row[0], 'prediction')}
                                      className="btn btn-danger"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="6" className="text-center">No prediction data available</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                        <button
                          type="button"
                          onClick={() => handleDeleteAll('predictions')}
                          className="btn btn-danger"
                        >
                          Delete All Predictions Data
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <br />
                        <h1>Your Model Training Data</h1>
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Model Name</th>
                              <th>Model Choice</th>
                              <th>MSE</th>
                              <th>MAE</th>
                              <th>R-Squared</th>
                              <th>RMSE</th>
                              <th>Accuracy</th>
                              <th>Delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {modelData.length > 0 ? (
                              modelData.map((row, index) => (
                                <tr key={index}>
                                  <td>{row[0]}</td>
                                  <td>{row[1]}</td>
                                  <td>{row[2]}</td>
                                  <td>{row[3]}</td>
                                  <td>{row[4]}</td>
                                  <td>{row[5]}</td>
                                  <td>{row[6]}</td>
                                  <td>{row[7]}</td>
                                  <td>
                                    <button
                                      type="button"
                                      onClick={() => handleDelete(row[0], 'model')}
                                      className="btn btn-danger"
                                    >
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="9" className="text-center">No model training data available</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                        <button
                          type="button"
                          onClick={() => handleDeleteAll('models')}
                          className="btn btn-danger"
                        >
                          Delete All Models
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer isAuthenticated={true} />
    </div>
  );
};

export default Dashboard;

