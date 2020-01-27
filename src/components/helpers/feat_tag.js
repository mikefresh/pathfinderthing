import React from "react";

function FeatTag({ prereqs }) {
  return prereqs.map((tag, index) => (
    <h3 key={`pre${index}`} className="feat-tag">
      {tag.prereq.name}
    </h3>
  ));
}

export default FeatTag;
