import React from "react";
import API from "../utils/API";
import {
  Card,
  CardTitle,
  Form,
  Label,
  Input,
  FormGroup,
  Button
} from "reactstrap";

const cardStyle = {
  width: "75%",
  marginTop: "5%",
  padding: "25px 15px 15px 25px"
};
class Builder extends React.Component {
  state = {
    id: this.props.match.params.id,
    name: "",
    attributeCost: "",
    skillText: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    //console.log(value);
    this.setState({ [name]: value });
  };
  createSkill = event => {
    event.preventDefault();
    console.log(this.state);
      API.newMasterSkill(this.state.name, this.state.attributeCost, this.state.skillText, this.state.id);
  };
  render() {
    return (
      <div className="container">
        <Card style={cardStyle}>
          <CardTitle>Add a Skill</CardTitle>
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input
              type="Text"
              id="name"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Name">Attribute Cost</Label>
            <Input
              type="Text"
              id="attributeCost"
              name="attributeCost"
              onChange={this.handleInputChange}
              value={this.state.attributeCost}
            />
          </FormGroup>
          <FormGroup>
            <Label for="Name">skillText</Label>
            <Input
              type="Text"
              id="skillText"
              name="skillText"
              onChange={this.handleInputChange}
              value={this.state.skillText}
            />
          </FormGroup>
          <Button onClick={this.createSkill}>Submit</Button>
          <Form />
        </Card>
      </div>
    );
  }
}
export default Builder;
