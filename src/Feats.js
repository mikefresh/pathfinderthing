import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const CLASSES = gql`
  {
    feats {
      id
      name
      description
      feats_prereqs {
        prereq {
          name
        }
      }
    }
  }
`;

function Feats() {
  const { loading, error, data } = useQuery(CLASSES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return data.feats.map(({ id, name, description, feats_prereqs }) => (
    <div key={id} className="feat">
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Pre Reqs</h3>
    </div>
  ));
}

export default Feats;
