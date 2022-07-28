import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import Header from "../../components/Header/Header";
import banner from "../../assets/img/banner.jpg";
const slideImages = [
  {
    url: banner,
  },
  {
    url: banner,
  },
];

const newsList = [
  {
    id: 1,
    title: "Order Message",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, aliquam nostrum maiores placeat eum repellendus.",
    icon: "fa-solid fa-envelope-open-text",
    date: "2022-05-26",
  },
  {
    id: 2,
    title: "System Information",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, aliquam nostrum maiores placeat eum repellendus.",
    icon: "fa-solid fa-bullhorn",
    date: "2022-05-30",
  },
];

const News = () => {
  return (
    <>
      <div>
        <Header />
        <div className="dbhs-content-lg">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="card mb-2 border-none" key={index}>
                <div className="card-height-lg">
                  <div className="card-image">
                    <img src={slideImage.url} alt="_banner" />
                  </div>
                </div>
              </div>
            ))}
          </Slide>
          <ul className="list-group">
            {newsList.map((news, index) => (
              <li className="list-news-item" key={index}>
                <Link
                  to={`/user/news-details/${news.id}`}
                  className="list-link"
                >
                  <div className="list-link-icon">
                    <i className={`${news.icon} list-icon`}></i>
                  </div>
                  <div className="notification-details">
                    <h2 className="sttr-text mb-1 fz:17 fw-500 text-dark">
                      {news.title}
                    </h2>
                    <p className="sttr-text mb-0 fz:13 fw-400 text-mute">
                      {news.desc}
                    </p>
                    <p className="date-news">{news.date}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
