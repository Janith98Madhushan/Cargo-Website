import React from "react";
import "../css/NewsItem.css";

const NewsItem = ({ date, title, summary, imageUrl }) => {
  return (
    <div className="news-item">
      <img src={imageUrl} alt={title} />
      <div className="news-info">
        <span className="news-date">{date}</span>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default NewsItem;
