import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const SKILLS = gql`
  {
    skills {
      name
      description
    }
  }
`;

function Skills() {
  const { loading, error, data } = useQuery(SKILLS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {data.skills.map(skill => (
          <li>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
