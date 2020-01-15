import React from "react";
import { Input, Button, Form } from "antd";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useFormik } from "formik";
import { Checkbox } from "antd";
const { TextArea } = Input;

const ADD_FEAT = gql`
  mutation AddFeat($name: String!, $description: String) {
    insert_feats(objects: { name: $name, description: $description }) {
      affected_rows
    }
  }
`;

function NewFeat(props) {
  const [addFeat, { data }] = useMutation(ADD_FEAT);
  const formik = useFormik({
    initialValues: {
      description: "",
      name: "",
      pre: []
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      //   addFeat({
      //     variables: {
      //       name: values.name,
      //       description: values.description
      //     }
      //   });
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        placeholder="Name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      ></Input>
      <TextArea
        name="description"
        placeholder="Description"
        onChange={formik.handleChange}
        value={formik.values.description}
      ></TextArea>
      {props.feats.map((feat, index) => {
        return (
          <Checkbox
            key={index}
            name="pre"
            onChange={formik.handleChange}
            value={feat.name}
          >
            {feat.name}
          </Checkbox>
        );
      })}
      <Button type="primary" htmlType="submit">
        submit
      </Button>
    </Form>
  );
}

export default NewFeat;
