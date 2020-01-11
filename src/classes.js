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
    <div>
      {data.classes.map((value, index) => {
        return <h2 key={index}>{value.name}</h2>;
      })}
      <CreateClass />
    </div>
  );
}

export default Classes;
