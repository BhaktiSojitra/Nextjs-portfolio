import React from 'react';

const Skills = () => {
  return (
    <div className="section" id="skill" style={{ paddingTop: '110px' }}>
      <div className="container">
        <div className="h4 text-center mb-4 title">Professional Skills</div>
        <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className="card-body">

            <div className="row">
              <div className="col-md-6">
                <div className="progress-container">
                  <span className="progress-badge">HTML</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      data-aos="progress-full"
                      data-aos-offset={10}
                      data-aos-duration={2000}
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '80%' }}
                    ></div>
                    <span className="progress-value">80%</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="progress-container">
                  <span className="progress-badge">CSS</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      data-aos="progress-full"
                      data-aos-offset={10}
                      data-aos-duration={2000}
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '75%' }}
                    ></div>
                    <span className="progress-value">75%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <div className="progress-container">
                  <span className="progress-badge">JavaScript</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      data-aos="progress-full"
                      data-aos-offset={10}
                      data-aos-duration={2000}
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '60%' }}
                    ></div>
                    <span className="progress-value">60%</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="progress-container">
                  <span className="progress-badge">JAVA</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      data-aos="progress-full"
                      data-aos-offset={10}
                      data-aos-duration={2000}
                      role="progressbar"
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '60%' }}
                    ></div>
                    <span className="progress-value">60%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <div className="progress-container">
                  <span className="progress-badge">Bootstrap</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      data-aos="progress-full"
                      data-aos-offset={10}
                      data-aos-duration={2000}
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '75%' }}
                    ></div>
                    <span className="progress-value">75%</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="progress-container">
                  <span className="progress-badge">Flutter</span>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      data-aos="progress-full"
                      data-aos-offset={10}
                      data-aos-duration={2000}
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '70%' }}
                    ></div>
                    <span className="progress-value">70%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
