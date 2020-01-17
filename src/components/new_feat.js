import React, { useState } from "react";
import { Input, Button, Form, Select } from "antd";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { useFormik, useField } from "formik";
import { Checkbox } from "antd";
const { TextArea } = Input;
const { Option } = Select;

const GET_PREREQS = gql`
  {
    ability_scores {
      name
    }
    skills {
      name
    }
  }
`;

const ADD_FEAT = gql`
  mutation AddFeat($name: String!, $description: String) {
    insert_feats(objects: { name: $name, description: $description }) {
      affected_rows
    }
  }
`;

function NewFeat(props) {
  const [form, setForm] = useState({ name: "", description: "", feats: [] });
  const { loading, error, data: prereqdata } = useQuery(GET_PREREQS);
  const [addFeat, { data }] = useMutation(ADD_FEAT);

  const handleFeats = e => {
    console.log(e);
    setForm({ ...form, feats: e });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

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

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Input
        placeholder="Name"
        name="name"
        onChange={handleChange}
        value={form.name}
      ></Input>
      <TextArea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={form.description}
      ></TextArea>

      <hr></hr>
      <h3>Prereqs</h3>
      <h4>Feats</h4>
      <Select mode="tags" onChange={handleFeats}>
        {props.feats.map(feat => {
          return <Option value={feat.name}>{feat.name}</Option>;
        })}
      </Select>

      {/* <Checkbox.Group
        options={props.feats.map(feat => feat.name)}
        onChange={handleFeats}
      ></Checkbox.Group> */}

      {/* {props.feats.map((feat, index) => {
        return (
          <Checkbox key={index} name={feat.name} onChange={handleChange}>
            {feat.name}
          </Checkbox>
        );
      })} */}

      <section className="skills">
        <h4>Skills</h4>
        {prereqdata.skills.map((skill, index) => {
          return (
            <fieldset key={`skills${index}`}>
              <label>{skill.name}</label>
              <Select mode="tags" name={skill.name}>
                <Option value="Unskilled">Unskilled</Option>
                <Option value="Trained">Trained</Option>
                <Option value="Expert">Expert</Option>
                <Option value="Master">Master</Option>
                <Option value="Legendary">Legendary</Option>
              </Select>
            </fieldset>
          );
        })}
      </section>
      <h4>Ability Scores</h4>
      {prereqdata.ability_scores.map((ability, index) => {
        return (
          <fieldset key={`ability${index}`}>
            <label>{ability.name}</label>
            <Input></Input>
          </fieldset>
        );
      })}
      <Button type="primary" htmlType="submit">
        submit
      </Button>
    </Form>
  );
}

export default NewFeat;
