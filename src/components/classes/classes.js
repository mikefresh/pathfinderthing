import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import CreateClass from "./create_class";

const CLASSES = gql`
  {
    classes {
      id
      name
    }
  }
`;

function Classes() {
  const { loading, error, data } = useQuery(CLASSES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="classes">
      <h2>Classes</h2>
      <section>
        <ul className="class-list">
          {data.classes.map((value, index) => {
            return <li key={index}>{value.name}</li>;
          })}
        </ul>
        <CreateClass />
      </section>
    </div>
  );
}

export default Classes;
