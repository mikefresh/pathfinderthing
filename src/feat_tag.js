import React from "react";

function FeatTag({ prereqs }) {
  return prereqs.map(tag => <h3 class="feat-tag">{tag.prereq.name}</h3>);
}

export default FeatTag;
