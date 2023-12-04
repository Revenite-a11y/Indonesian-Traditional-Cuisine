function Header() {
  return (
    <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark site_navbar bg-dark site-navbar-light"
          id="site-navbar"
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              Indonesian Traditional Cuisine
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
                  <a href="#section-gallery" className="nav-link">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#section-news" className="nav-link">
                    List Makanan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END nav */}
        <section
          className="site-cover"
          style={{ backgroundImage: "url(/images/bg_3.jpeg)" }}
          id="section-home"
        >
          <div className="container">
            <div className="row align-items-center justify-content-center text-center site-vh-100">
              <div className="col-md-12">
                <h1 className="site-heading site-animate mb-3">
                  Welcome To Indonesian Traditional Cuisine
                </h1>
                <h2 className="h5 site-subheading mb-5 site-animate">
                  Let's See &amp; Learn About Indonesian Traditional Cuisine.
                </h2>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Header