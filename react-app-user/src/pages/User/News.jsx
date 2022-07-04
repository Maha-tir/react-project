import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
const News = () => {
  return (
    <>
      <div>
        <Header />
        <div className="dbhs-content">
          <div className="pb-0" style={{ padding: "2rem 1rem" }}>
            <div className="card mb-2">
              <div className="card-height-lg"></div>
            </div>
          </div>
          <ul className="list-group">
            <li className="list-news-item">
              <Link to="/user/dashboard" className="list-link">
                <div className="list-link-icon">
                  <i className="fa-solid fa-envelope-open-text list-icon"></i>
                </div>
                <div className="notification-details">
                  <h2 className="sttr-text mb-1 fz:17 fw-500 text-dark">
                    Order Message
                  </h2>
                  <p className="sttr-text mb-0 fz:13 fw-400 text-mute">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, aliquam nostrum maiores placeat eum repellendus.
                  </p>
                </div>
              </Link>
            </li>
            <li className="list-news-item">
              <Link to="/user/dashboard" className="list-link">
                <div className="list-link-icon">
                  <i className="fa-solid fa-bullhorn list-icon"></i>
                </div>
                <div className="notification-details">
                  <h2 className="sttr-text mb-1 fz:17 fw-500 text-dark">
                    System Information
                  </h2>
                  <p className="sttr-text mb-0 fz:13 fw-400 text-mute">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, aliquam nostrum maiores placeat eum repellendus.
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
