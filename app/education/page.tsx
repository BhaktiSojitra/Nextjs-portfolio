import React from 'react';

const Education = () => {
  return (
    <>
      <div className="section" style={{ paddingTop: '110px' }}>
        <div className="container cc-education">
          <div className="h4 text-center mb-4 title">Education</div>

          <div className="card">
            <div className="row">
              <div className="col-md-3 bg-success text-white" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-education-header">
                  <p>2023 - 2025</p>
                  <div className="h5">Bachelor's Degree</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                  <div className="h5">Bachelor of Computer Science</div>
                  <p className="category">Darshan University Rajkot</p>
                  <p>
                    Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis,
                    tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel
                    eleifend primis lectus quisque cubilia sed mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: '60px' }}>
            <div className="row">
              <div className="col-md-3 bg-success text-white" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body cc-education-header">
                  <p>2007 - 2019</p>
                  <div className="h5">High School</div>
                </div>
              </div>
              <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                <div className="card-body">
                  <div className="h5">Science and Mathematics</div>
                  <p className="category">School of Secondary board</p>
                  <p>
                    Euismod massa scelerisque suspendisse fermentum habitant vitae ullamcorper magna quam iaculis,
                    tristique sapien taciti mollis interdum sagittis libero nunc inceptos tellus, hendrerit vel
                    eleifend primis lectus quisque cubilia sed mauris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
