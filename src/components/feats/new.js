import React, { useState } from "react";
import { Input, Button, Form, Select, Radio } from "antd";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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
    feats {
      id
      name
      description
    }
  }
`;

const ADD_FEAT = gql`
  mutation AddFeat($name: String!, $description: String, $prereqs: jsonb) {
    insert_feats(
      objects: { name: $name, description: $description, prereqs: $prereqs }
    ) {
      affected_rows
    }
  }
`;

function NewFeat(props) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    prereqs: { skills: {}, feats: [], ability_scores: {} }
  });

  const { loading, error, data: prereqdata } = useQuery(GET_PREREQS);
  const [addFeat] = useMutation(ADD_FEAT);

  const handleFeats = e => {
    const f = { ...form };
    f.prereqs.feats = e;
    setForm(f);
  };

  const handleAbilityScores = e => {
    const { name, value } = e.target;
    const f = { ...form };
    f.prereqs.ability_scores[name] = value;
    setForm(f);
  };

  const handleSkills = e => {
    const { name, value } = e.target;
    const f = { ...form };
    f.prereqs.skills[name] = value;
    setForm(f);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addFeat({
      variables: {
        name: form.name,
        description: form.description,
        prereqs: form.prereqs
      }
    });
    console.log(e);
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <section className="new-feat">
      <section>
        <h3>Details</h3>
        <Form onSubmit={handleSubmit}>
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
          />
          <hr></hr>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </Form>
      </section>
      <section className="prereqs-feats">
        <h3>Feats</h3>
        <Select mode="tags" onChange={handleFeats}>
          {prereqdata.feats.map((feat, index) => {
            return (
              <Option key={`feats_key${index}`} value={feat.name}>
                {feat.name}
              </Option>
            );
          })}
        </Select>
      </section>
      <section className="prereqs-skills">
        <h3>Skills</h3>
        {prereqdata.skills.map((skill, index) => {
          return (
            <fieldset key={`skills${index}`}>
              <label>{skill.name}</label>
              <Radio.Group
                name={skill.name}
                onChange={handleSkills}
                defaultValue="a"
              >
                <Radio.Button value="Unskilled">Unskilled</Radio.Button>
                <Radio.Button value="Trained">Trained</Radio.Button>
                <Radio.Button value="Expert">Expert</Radio.Button>
                <Radio.Button value="Master">Master</Radio.Button>
                <Radio.Button value="Legendary">Legendary</Radio.Button>
              </Radio.Group>
            </fieldset>
          );
        })}
      </section>
      <section className="prereqs-ability-scores">
        <h3>Ability Scores</h3>
        {prereqdata.ability_scores.map((ability, index) => {
          return (
            <fieldset key={`ability${index}`}>
              <label>{ability.name}</label>
              <Input name={ability.name} onChange={handleAbilityScores}></Input>
            </fieldset>
          );
        })}
      </section>
    </section>
  );
}

export default NewFeat;
