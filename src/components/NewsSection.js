import React from "react";
import NewsItem from "./NewsItem";
import img1 from "../assets/images/cargo ship.jpg";
import img2 from "../assets/images/Cargo-Flight-DFreight.jpg";
import "../css/NewsSection.css";

const newsData = [
  {
    id: 1,
    date: "26 May",
    title: "Curabitur lorem uism quis",
    summary:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...",
    imageUrl: img1,
  },
  {
    id: 2,
    date: "22 May",
    title: "Curabitur lorem uism quis",
    summary:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...",
    imageUrl: img2,
  },
  {
    id: 3,
    date: "28 May",
    title: "Curabitur lorem uism quis",
    summary:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...",
    imageUrl: img1,
  },
  {
    id: 4,
    date: "30 May",
    title: "Curabitur lorem uism quis",
    summary:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...",
    imageUrl: img2,
  },
];

const NewsSection = () => {
  return (
    <div className="news-section">
      {newsData.map((news) => (
        <NewsItem
          key={news.id}
          date={news.date}
          title={news.title}
          summary={news.summary}
          imageUrl={news.imageUrl}
        />
      ))}
    </div>
  );
};

export default NewsSection;
