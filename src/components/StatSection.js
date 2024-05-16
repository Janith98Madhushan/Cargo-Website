import React from "react";
import StatItem from "./StatItem";
import "../css/Statsection.css";

const StatsSection = () => {
  return (
    <div className="stats-section">
      <StatItem number="890" label="Delivered packages" />
      <StatItem number="137" label="Countries covered" />
      <StatItem number="740" label="Tons of Goods" />
      <StatItem number="600" label="Satisfied Clients" />
    </div>
  );
};

export default StatsSection;
