/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import "./assets/scss/style.scss";
// import "./assets/css/style.css";
// import "./assets/css/animate.css";
// import "./assets/css/bootstrap-datepicker.css";
// import "./assets/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark site_navbar bg-dark site-navbar-light"
          id="site-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              EatWell
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#site-nav"
              aria-controls="site-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="site-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a href="#section-home" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#section-about" className="nav-link">
                    About
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#section-menu" className="nav-link"></a>
                </li>
                <li className="nav-item">
                  <a href="#section-news" className="nav-link">
                    List Makanan
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#section-gallery" className="nav-link">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END nav */}
        <section
          className="site-cover"
          style={{ backgroundImage: "url(/public/images/bg_3.jpg)" }}
          id="section-home"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center site-vh-100">
              <div className="col-md-12">
                <h1 className="site-heading site-animate mb-3">
                  Welcome To EatWell
                </h1>
                <h2 className="h5 site-subheading mb-5 site-animate">
                  Come and eat well with our delicious &amp; healthy foods.
                </h2>
              </div>
            </div>
          </div>
        </section>
        {/* END section */}
        <section className="site-section" id="section-about">
          <div className="container">
            <div className="row">
              <div className="col-md-5 site-animate mb-5">
                <h4 className="site-sub-title">Our Story</h4>
                <h2 className="site-primary-title display-4">Welcome</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p className="mb-4">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
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
        {/* END section */}

        <section className="site-section bg-light" id="section-news">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center mb-5 site-animate">
                <h2 className="display-4">Makanan Khas Daerah Indonesia</h2>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="lead">
                      Berikut ini adalah makanan khas di setiap daerah di
                      Indonesia direpresentasikan dari setiap provinsi di
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="media d-block mb-4 text-center site-media site-animate">
                  <img
                    src="/public/images/offer_1.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                  <div className="media-body p-md-5 p-4">
                    <h5 className="mt-0 h4">We Have Dilecious Food</h5>
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="media d-block mb-4 text-center site-media site-animate">
                  <img
                    src="/public/images/offer_2.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                  <div className="media-body p-md-5 p-4">
                    <h5 className="mt-0 h4">Chef Special Menu</h5>
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="media d-block mb-4 text-center site-media site-animate">
                  <img
                    src="/public/images/offer_3.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                  <div className="media-body p-md-5 p-4">
                    <h5 className="mt-0 h4">Merriage Celebrations</h5>
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* END section */}
        <section className="site-section" id="section-gallery">
          <div className="container">
            <div className="row site-custom-gutters">
              <div className="col-md-12 text-center mb-5 site-animate">
                <h2 className="display-4">Gallery</h2>
                <div className="row justify-content-center">
                  <div className="col-md-7">
                    <p className="lead">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/menu_1.jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/menu_1.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/menu_2.jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/menu_2.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/menu_3.jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/menu_3.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/menu_2.jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/menu_2.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/menu_3.jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/menu_3.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-md-4 site-animate">
                <a
                  href="/public/images/menu_1.jpg"
                  className="site-thumbnail image-popup"
                >
                  <img
                    src="/public/images/menu_1.jpg"
                    alt="Free Template by colorlib.com"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer site-bg-dark site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 site-animate">
                    <h2 className="site-heading-2">About Us</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Cumque, similique, delectus blanditiis odit expedita amet.
                      Sed labore ipsum vel dolore, quis, culpa et magni autem
                      sequi facere eos tenetur, ex?
                    </p>
                  </div>
                  <div className="col-md-1" />
                  <div className="col-md-3 site-animate">
                    <div className="site-footer-widget mb-4">
                      <h2 className="site-heading-2">The Restaurant</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" className="py-2 d-block">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Chefs
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Events
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2 site-animate">
                    <div className="site-footer-widget mb-4">
                      <h2 className="site-heading-2">Useful links</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" className="py-2 d-block">
                            Foods
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Drinks
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Breakfast
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Brunch
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Dinner
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2 site-animate">
                    <div className="site-footer-widget mb-4">
                      <h2 className="site-heading-2">Useful links</h2>
                      <ul className="list-unstyled">
                        <li>
                          <a href="#" className="py-2 d-block">
                            Foods
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Drinks
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Breakfast
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Brunch
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 d-block">
                            Dinner
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row site-animate">
              <div className="col-md-12 text-center">
                <div className="site-footer-widget mb-4">
                  <ul className="site-footer-social list-unstyled ">
                    <li className="site-animate">
                      <a href="#">
                        <span className="icon-twitter" />
                      </a>
                    </li>
                    <li className="site-animate">
                      <a href="#">
                        <span className="icon-facebook" />
                      </a>
                    </li>
                    <li className="site-animate">
                      <a href="#">
                        <span className="icon-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <p>
                  ©{" "}
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | Made with{" "}
                  <i className="icon-heart" aria-hidden="true" /> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>{" "}
                  &amp; distributed by{" "}
                  <a href="https://themewagon.com" target="_blank">
                    ThemeWagon
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </footer>
        {/* Modal */}
        <div
          className="modal fade"
          id="reservationModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="reservationModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="bg-image"
                      style={{
                        backgroundImage:
                          "url(/public/images/reservation_1.jpg)",
                      }}
                    />
                  </div>
                  <div className="col-lg-12 p-5">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <small>CLOSE </small>
                      <span aria-hidden="true">×</span>
                    </button>
                    <h1 className="mb-4">Reserve A Table</h1>
                    <form action="#" method="post">
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_fname">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="m_fname"
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_lname">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="m_lname"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <label htmlFor="m_email">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="m_email"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_people">How Many People</label>
                          <select name id="m_people" className="form-control">
                            <option value={1}>1 People</option>
                            <option value={2}>2 People</option>
                            <option value={3}>3 People</option>
                            <option value="4+">4+ People</option>
                          </select>
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_phone">Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            id="m_phone"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_date">Date</label>
                          <input
                            type="text"
                            className="form-control"
                            id="m_date"
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <label htmlFor="m_time">Time</label>
                          <input
                            type="text"
                            className="form-control"
                            id="m_time"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <label htmlFor="m_message">Message</label>
                          <textarea
                            className="form-control"
                            id="m_message"
                            cols={30}
                            rows={7}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <input
                            type="submit"
                            className="btn btn-primary btn-lg btn-block"
                            defaultValue="Reserve Now"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END Modal */}
        {/* loader */}
        <div id="site-loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle
              className="path-bg"
              cx={24}
              cy={24}
              r={22}
              fill="none"
              strokeWidth={4}
              stroke="#eeeeee"
            />
            <circle
              className="path"
              cx={24}
              cy={24}
              r={22}
              fill="none"
              strokeWidth={4}
              strokeMiterlimit={10}
              stroke="#F96D00"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;