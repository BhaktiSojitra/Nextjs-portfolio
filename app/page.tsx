import React from 'react';

const Hero = () => {
  return (
    <header className="hero-section text-center text-white d-flex align-items-center justify-content-center" style={{ paddingTop: '110px' }}>
      <div className="overlay"></div>

      <div className="content position-relative z-2">
        <h1 className="text-black">Bhakti Sojitra</h1>
        <p className="text-black text-uppercase">
          Web Developer, App Developer and Photographer
        </p>

        <div className="mt-4 d-flex justify-content-center gap-3">
          <a href="#contact" className="btn btn-success">Hire Me</a>
          <a href="/Bhakti_Sojitra_CV.pdf" className="btn btn-success" download>Download CV</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
