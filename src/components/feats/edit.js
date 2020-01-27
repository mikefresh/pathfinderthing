import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Input, Button, Form, Select, Radio, message } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const GET_FEAT = gql`
  query($featId: Int) {
    feat: feats(where: { id: { _eq: $featId } }) {
      name
      description
      prereqs
    }
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

const UPDATE_FEAT = gql`
  mutation update_feats($id: Int, $changes: feats_set_input) {
    update_feats(where: { id: { _eq: $id } }, _set: $changes) {
      affected_rows
    }
  }
`;

function EditFeat(props) {
  const { loading, error, data } = useQuery(GET_FEAT, {
    variables: { featId: props.featId }
  });

  const [updateFeat] = useMutation(UPDATE_FEAT);

  const [form, setForm] = useState({
    name: "",
    description: "",
    prereqs: { skills: {}, feats: [], ability_scores: {} }
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    const feat = data.feat[0];
    setForm({
      name: feat.name,
      description: feat.description,
      prereqs: feat.prereqs
    });
  }, [data]);

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

  const handleSubmit = e => {
    e.preventDefault();
    updateFeat({
      variables: {
        id: props.featId,
        changes: form
      }
    }).then(response => {
      message.success("Feat updated");
    });
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

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
          {data.feats.map((feat, index) => {
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
        {data.skills.map((skill, index) => {
          return (
            <fieldset key={`skills${index}`}>
              <label>{skill.name}</label>
              <Radio.Group
                name={skill.name}
                onChange={handleSkills}
                value={form.prereqs.skills[skill.name]}
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
        {data.ability_scores.map((ability, index) => {
          return (
            <fieldset key={`ability${index}`}>
              <label>{ability.name}</label>
              <Input
                name={ability.name}
                value={form.prereqs.ability_scores[ability.name]}
                onChange={handleAbilityScores}
              ></Input>
            </fieldset>
          );
        })}
      </section>
    </section>
  );
}

export default EditFeat;
