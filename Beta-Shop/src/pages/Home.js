import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner py-3 position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>Ipad S13+ Pro.</h5>
                  <p>From $999.00 or $41.60/mo.</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
{/*//////////////////////////////////////////////?Main banners end/////////////////////////////////////////////////  */}
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between gap-10 align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best sale</h4>
                    <h5>Laptops Max</h5>
                    <p>
                      From $1699.00 <br /> or $64.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>
                      From $599.00 <br /> or $49.91/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% Off</h4>
                    <h5>SmartWatch 7</h5>
                    <p>
                      Shop the latest <br /> band styles and colors.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Free Engraving</h4>
                    <h5>AirPods Max</h5>
                    <p>
                      Hifg-fideity payback <br /> & ultra-low distortion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
{/*//////////////////////////////////////////////?Small banners end/////////////////////////////////////////////////  */}
          </div>
        </div>
      </section>
{/*//////////////////////////////////////////////!First Section end/////////////////////////////////////////////////  */}
      <section className="wraper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section>
{/*//////////////////////////////////////////////!Second Section end/////////////////////////////////////////////////  */}
    </>
  );
};

export default Home;
