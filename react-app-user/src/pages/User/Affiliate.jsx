import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import banner from "../../assets/img/banner.jpg";

const slideImages = [
  {
    url: banner,
  },
  {
    url: banner,
  },
];
const Affiliate = () => {
  const backHistory = () => {
    window.history.back();
  };
  return (
    <div className="sc-dbhs">
      <header className="or-header">
        <button className="back-button me-auto" onClick={backHistory}>
          <i className="fa-solid fa-angle-left back-icon"></i>
        </button>
        <span className="text-uppercase fw-500 me-auto">Affiliate</span>
      </header>
      <div className="dbhs-content">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="card mb-4 border-none" key={index}>
              <div className="card-height-lg">
                <div className="card-image">
                  <img src={slideImage.url} alt="_banner" />
                </div>
              </div>
            </div>
          ))}
        </Slide>

        <div className="card py-2 card-elm-bordered mb-4">
          <h2 className="text-card-absolute fz:13 text-uppercase">
            Activate Profit
          </h2>
          <div className="card-body">
            <div className="box-grid:2 gap:2">
              <div className="card card-elm-bordered bg-light">
                <div className="card-body nav flex-column jcc aic">
                  <h2 className="m-0 fz:10 fw-500 text-center">0</h2>
                  <p className="m-0 fz:10 fw-500 text-center">
                    Activate Profit Today
                  </p>
                </div>
              </div>
              <div className="card card-elm-bordered bg-light">
                <div className="card-body nav flex-column jcc aic">
                  <h2 className="m-0 fz:10 fw-500 text-center">90</h2>
                  <p className="m-0 fz:10 fw-500 text-center">
                    Activate Total Profit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card py-2 card-elm-bordered mb-4">
          <h2 className="text-card-absolute fz:13 text-uppercase">
            Direct Refferal
          </h2>
          <div className="card-body">
            <div className="box-grid:2 gap:2">
              <div className="card card-elm-bordered bg-light">
                <div className="card-body nav flex-column jcc aic">
                  <h2 className="m-0 fz:10 fw-500 text-center">2</h2>
                  <p className="m-0 fz:10 fw-500 text-center">
                    Not Activated Yet
                  </p>
                </div>
              </div>
              <div className="card card-elm-bordered bg-light">
                <div className="card-body nav flex-column jcc aic">
                  <h2 className="m-0 fz:10 fw-500 text-center">1</h2>
                  <p className="m-0 fz:10 fw-500 text-center">Activated</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card py-2 card-elm-bordered mb-4">
          <h2 className="text-card-absolute fz:13 text-uppercase">
            Total Team
          </h2>
          <div className="card-body">
            <div className="box-grid:2 gap:2">
              <div className="card card-elm-bordered bg-light">
                <div className="card-body nav flex-column jcc aic">
                  <h2 className="m-0 fz:10 fw-500 text-center">100</h2>
                  <p className="m-0 fz:10 fw-500 text-center">
                    Not Activated Yet
                  </p>
                </div>
              </div>
              <div className="card card-elm-bordered bg-light">
                <div className="card-body nav flex-column jcc aic">
                  <h2 className="m-0 fz:10 fw-500 text-center">11</h2>
                  <p className="m-0 fz:10 fw-500 text-center">Activated</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card py-2 card-elm-bordered mb-4">
          <h2 className="text-card-absolute fz:13 text-uppercase">
            Direct Activation
          </h2>
          <div className="card-body">
            <div className="card card-elm-bordered bg-light">
              <div className="card-body p-2">
                <div className="box-grid:4 gap:2">
                  <div className="nav flex-column aic jcc">
                    <h2 className="m-0 fz:9 fw-600 text-uppercase">Grade</h2>
                    <p className="m-0 fz:9 fw-600 text-uppercase">BID4</p>
                    <p className="m-0 fz:9 fw-600 text-uppercase">BID4</p>
                  </div>
                  <div className="nav flex-column aic jcc">
                    <h2 className="m-0 fz:9 fw-600 text-uppercase">Username</h2>
                    <p className="m-0 fz:9 fw-600 text-uppercase">DOLOR77</p>
                    <p className="m-0 fz:9 fw-600 text-uppercase">LOREM1</p>
                  </div>
                  <div className="nav flex-column aic jcc">
                    <h2 className="m-0 fz:9 fw-600 text-uppercase">
                      Total Team
                    </h2>
                    <p className="m-0 fz:9 fw-600 text-uppercase">56</p>
                    <p className="m-0 fz:9 fw-600 text-uppercase">3</p>
                  </div>
                  <div className="nav flex-column aic jcc">
                    <h2 className="m-0 fz:9 fw-600 text-uppercase">
                      Registration Time
                    </h2>
                    <p className="m-0 fz:9 fw-600 text-uppercase">
                      2022-07-01 | 11:12
                    </p>
                    <p className="m-0 fz:9 fw-600 text-uppercase">
                      2022-07-01 | 11:13
                    </p>
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

export default Affiliate;
