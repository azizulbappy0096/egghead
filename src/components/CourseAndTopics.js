import React from "react";

// components
import RenderCard from "./RenderCard";

// dummy data
import { courseAndTopics as data } from "../shared/data";

function CourseAndTopics() {
  return (
    <div className="container-fluid mt-5 pt-4 renderCard">
      <h2 className="h2">Popular Courses &amp; Topics</h2>
      <div className="row px-2">
        <RenderCard data={data.intro} />
        <RenderCard data={data.css} />
        <RenderCard data={data.researcPanel} />
      </div>
    </div>
  );
}

export default CourseAndTopics;
