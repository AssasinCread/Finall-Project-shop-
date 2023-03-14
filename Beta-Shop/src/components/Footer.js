import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items.center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*///////////////////////////////////////////////////////////*/}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="Footer-Links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Beta-store</Link>
                <address className="text-white fs-6">
                  No.0001 Yeni-Quneshli,Baku,Azerbaycan
                </address>
                <a
                  className="text-white mt-3 d-block mb-1"
                  href="tel:+994 050-779-12-03"
                >
                  (+994)50-779-12-03
                </a>
                <a
                  className="text-white mt-2 d-block mb-0"
                  href="mailto:vacim001@gmail.com"
                >
                  vacim001@gmail.com
                </a>
                <div className="social_icons d-flex gap-30 mt-4">
                  <a className="text-white fs-4" target="_blank" href="https://www.linkedin.com/">
                    <BsLinkedin/>
                  </a>
                  <a className="text-white fs-4" target="_blank" href="https://github.com/">
                    <BsGithub/>
                  </a>
                  <a className="text-white fs-4" target="_blank" href="https://www.youtube.com/">
                    <BsYoutube/>
                  </a>
                  <a className="text-white fs-4" target="_blank" href="https://www.instagram.com/">
                    <BsInstagram/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="Footer-Links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms Of Service</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="Footer-Links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="Footer-Links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*///////////////////////////////////////////////////////////*/}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()} Power by Developer's
              </p>
              ;
            </div>
          </div>
        </div>
      </footer>
      {/*///////////////////////////////////////////////////////////*/}
    </>
  );
};

export default Footer;
