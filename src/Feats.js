import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import FeatTag from "./feat_tag";
import NewFeat from "./components/new_feat";

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
      <section>
        {data.feats.map(({ id, name, description, feats_prereqs }, index) => (
          <div key={id} className="feat">
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>Pre Reqs</h3>
            <FeatTag prereqs={feats_prereqs}></FeatTag>
          </div>
        ))}
      </section>
      <NewFeat feats={data.feats}></NewFeat>
    </div>
  );
}

export default Feats;
