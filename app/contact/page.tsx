import React from 'react'

const Contact = () => {
  return (
    <div className="section" id="contact" style={{ paddingTop: '110px' }}>
      <div className="cc-contact-information">
        <div className="container">
          <div className="cc-contact">
            <div className="row">
              <div className="col-md-9">
                <div className="card mb-0" data-aos="zoom-in">
                  <div className="h4 text-center title" style={{ marginTop: '20px' }}>Contact Me</div>
                  <div className="row" style={{ marginTop: '20px' }}>
                    <div className="col-md-6">
                      <div className="card-body">
                        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                          <div className="p pb-3"><strong>Feel free to contact me</strong></div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user-circle"></i></span>
                                <input className="form-control" type="text" name="name" placeholder="Name" required />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-file-text"></i></span>
                                <input className="form-control" type="text" name="subject" placeholder="Subject" required />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                                <input className="form-control" type="email" name="_replyto" placeholder="E-mail" required />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="form-group">
                                <textarea className="form-control" name="message" placeholder="Your Message" required></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <button className="btn btn-primary" type="submit">Send</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <p className="mb-0"><strong>Address </strong></p>
                        <p className="pb-2">xyx xyxyvhbjnkghjk</p>
                        <p className="mb-0"><strong>Phone</strong></p>
                        <p className="pb-2">123456789</p>
                        <p className="mb-0"><strong>Email</strong></p>
                        <p>sojitrabhakti@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
