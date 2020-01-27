import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { Input } from "antd";
import { gql } from "apollo-boost";
import { Button } from "antd";

const { TextArea } = Input;

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
    <div className="create-class">
      <form
        onSubmit={e => {
          e.preventDefault();
          addClass({ variables: { name: input.value } });
        }}
      >
        <label>Name</label>
        <Input name="name"></Input>
        <label>Description</label>
        <TextArea name="description"></TextArea>
        <Button type="submit"> Add </Button>
      </form>
    </div>
  );
}

export default CreateClass;
