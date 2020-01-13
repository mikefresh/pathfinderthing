import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Button } from "antd";

const ADD_CLASS = gql`
  mutation AddClass($name: String!) {
    insert_classes(objects: { name: $name }) {
      affected_rows
    }
  }
`;

function CreateClass() {
  let input;
  const [addClass, { data }] = useMutation(ADD_CLASS);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addClass({ variables: { name: input.value } });
        }}
      >
        <input
          placeholder="Name"
          ref={node => {
            input = node;
          }}
        />
        <Button type="submit"> Add </Button>
      </form>
    </div>
  );
}

export default CreateClass;
