import React from "react";
import { data } from "./data";

const Content = () => {
  return (
    <>
      {data.map((item, key) => (
        <section key={key} className="content-container">
          <img
            src={item.image}
            alt={item.image.length}
            className="content-logo"
          ></img>
          <div className="content-texts">
            <div className="content-title">{item.title}</div>
            <div className="content-description">{item.describtion}</div>
            <a href={item.url} className="content-link">
              Link
            </a>
          </div>
        </section>
      ))}
    </>
  );
};

export default Content;
