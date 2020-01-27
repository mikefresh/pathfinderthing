import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Select, Button } from "antd";

const { Option } = Select;

const CHARACTER = gql`
  query($characterId: Int!) {
    ancestries {
      name
      id
    }
    characters_by_pk(id: $characterId) {
      name
      id
    }
  }
`;

const handleChange = e => {};

export default function Ancestry(props) {
  {
    console.log(props);
  }
  const { loading, error, data } = useQuery(CHARACTER, {
    variables: { characterId: Number(props.id) }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  {
    console.log(data);
  }
  return (
    <div>
      <h2>{data.characters_by_pk.name}</h2> Ancestry
      <Select style={{ width: 120 }} onChange={handleChange}>
        {data.ancestries.map(ancestry => {
          return <Option value={ancestry.name}>{ancestry.name}</Option>;
        })}
      </Select>
      <Button type="primary" size="large">
        Next
      </Button>
    </div>
  );
}
