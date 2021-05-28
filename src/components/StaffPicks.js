import React from "react";

// dummy data
import { staffData } from "../shared/data";

// components
import RenderCard from "./RenderCard";

function StaffPicks() {
  return (
    <div className="container-fluid mt-5 pt-4 renderCard">
      <h2 className="h2">Staff Picks and Favorites</h2>
      <div className="row px-2">
        {staffData.map((data, index) => (
          <RenderCard key={index} data={data} col="col-md-4" />
        ))}
      </div>
    </div>
  );
}

export default StaffPicks;
