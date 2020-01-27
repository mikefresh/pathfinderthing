import React, { useState } from "react";
import { Input, Button } from "antd";
import generateName from "../../helpers/namegen";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const INSERT_CHARACTER = gql`
  mutation insertCharacters($name: String!) {
    insert_characters(objects: { name: $name }) {
      affected_rows
    }
  }
`;

function Start() {
  const [name, setName] = useState(generateName());
  const [insertCharacters, { data }] = useMutation(INSERT_CHARACTER);
  return (
    <form className="start">
      <Input
        size="large"
        placeholder="large size"
        value={name}
        onChange={e => {
          console.log(e);
          setName(e.target.value);
        }}
      />

      <Button
        type="primary"
        size="large"
        onClick={e => {
          e.preventDefault();
          console.log("hello");
          insertCharacters({ variables: { name: name } });
        }}
      >
        Start
      </Button>
    </form>
  );
}

export default Start;
