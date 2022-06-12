import React from "react";
import { data } from "./data";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-inner">
      <div className="content">
        {data.map((item, key) => (
          <section key={key} className="content-container">
            <img
              src={item.image}
              alt={item.image.length}
              className="content-logo"
            ></img>
            <div className="content-texts">
              <h4 className="content-title">{item.title}</h4>
              <div className="content-description">{item.describtion}</div>
              <a href={item.url} className="content-link">
                Learn More →
              </a>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Content;
