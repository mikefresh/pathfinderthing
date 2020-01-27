import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import FeatTag from "../helpers/feat_tag";
import { Link } from "@reach/router";

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

  return (
    <div className="feats">
      <section className="feats-list">
        {data.feats.map(({ id, name, description, feats_prereqs }, index) => (
          <div key={id} className="feat">
            <h2>
              {name} <Link to={`edit/${id}`}>Edit</Link>
            </h2>
            <p>{description}</p>
            <h3>Pre Reqs</h3>
            <FeatTag prereqs={feats_prereqs}></FeatTag>
          </div>
        ))}
      </section>
      <Link to="new">Add Feat</Link>
    </div>
  );
}

export default Feats;
