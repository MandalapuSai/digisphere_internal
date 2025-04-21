  import React from "react";
  import { Link } from "react-router-dom";
  import './Header.css';  // Import the CSS file to apply the styles

  const Header = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white header-reverse glass-effect">
          <div className="container-fluid">
            <div className="col-auto col-lg-2 me-lg-0 me-auto">
              <Link className="navbar-brand" to="/">
                <img src="/assets/img/logo.webp" alt="Logo" className="" />
              </Link>
            </div>
            <div className="col-auto ms-auto md-ms-0 menu-order position-static">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
                <span className="navbar-toggler-line"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav alt-font">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>

                  {/* Service Dropdown */}
                  <li className="nav-item dropdown ">
                    <Link
                      className="nav-link "
                      to="/services"
                      id="servicesDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                      <li>
                        <Link className="dropdown-item  bi bi-megaphone text-dark-gray nav-link " to="/digital-marketing">
                          Digital Marketing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item bi bi-code-slash nav-link" to="/application-development">
                          Application Development
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item bi bi-filter-square nav-link" to="/web-designing">
                          Web Designing
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item bi bi-layers  nav-link" to="/web-development">
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item bi bi-laptop nav-link" to="/social-media-marketing">
                          Social Media Marketing
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {/* Products Dropdown */}
                  <li className="nav-item dropdown nav-link">
                    <Link
                      className="nav-link "
                      to="#"
                      id="productsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Products
                    </Link>
                    <ul className="dropdown-menu" aria-labelledby="productsDropdown">
  <li style={{ display: "flex", alignItems: "center" }}>
    <img
      src="assets/img/link_stand_01.jpg"
      data-no-retina
      alt=""
      style={{ width: "211px", height: "45px", marginRight: "10px" }} // adjust size/margin as needed
    />
    <Link className="dropdown-item " to="/linkstand" style={{ margin: 0 }}>
      LinkStand
    </Link>
  </li>
</ul>

                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/buynow">
                      Buy Now
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto text-end d-none d-sm-flex">
              <div className="header-icon">
                <div className="header-button">
                  <Link
                    to="/contact"
                    className="btn border-1 btn-transparent-light-gray btn-medium left-icon btn-switch-text"
                  >
                    <span>
                      <span>
                        <i className="fa-regular fa-envelope"></i>
                      </span>
                      <span className="btn-double-text" data-text="Send a message">
                        Send a message
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  };

  export default Header;
    