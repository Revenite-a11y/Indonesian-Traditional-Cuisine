

const About = () => {
  return (
    <div> <section className="site-section" id="section-about">
    <div className="container">
      <div className="row">
        <div className="col-md-5 site-animate mb-5">
          <h4 className="site-sub-title">About Us</h4>
          <h2 className="site-primary-title display-4">Introduction</h2>
          <p>
            This Website is a tool to introduce some of Indonesian traditional cuisine.
          </p>
          <p className="mb-4">
           Indonesia has many unique traditional cuisine that most of the people doesn't know. So we are going so introduce to you some of 
           the cuisine that you may never heard about.
          </p>
        </div>
        <div className="col-md-1" />
        <div
          className="col-md-6 site-animate img"
          data-animate-effect="fadeInRight"
        >
          <img
            src="/public/images/about_img_1.jpg"
            alt="Free Template by colorlib.com"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default About