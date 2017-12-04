import React from "react";
import API from "../utils/API";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";

const cardStyle = {
  width: "75%",
  marginTop: "5%",
  padding: "25px 15px 15px 25px"
};
const paneStyle = { marginTop: "15px", marginBottom: "15px" };

class CreateGameForm extends React.Component {
  state = {
    title: "",
    owner: "",
    cp: 0,
    desc: "",
    userId: ""
  };

  loadUser = () => {
    API.getUser().then(res => {
      this.setState({ userId: res.data.id });
    });
  };

  componentDidMount() {
    this.loadUser();
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    //console.log(value);
    this.setState({ [name]: value });
  };
  createGame = event => {
    event.preventDefault();
    API.newGame(
      this.state.title,
      this.state.owner,
      this.state.cp,
      this.state.desc,
      this.state.userId
    );
  };
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="Name">Campaign Title</Label>
          <Input
            type="Text"
            id="title"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Name">Game Owner</Label>
          <Input
            type="text"
            id="owner"
            name="owner"
            onChange={this.handleInputChange}
            value={this.state.owner}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Name">Starting CP for new players</Label>
          <Input
            type="number"
            id="cp"
            name="cp"
            onChange={this.handleInputChange}
            value={this.state.cp}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Name">Game Description</Label>
          <Input
            type="textarea"
            id="desc"
            name="desc"
            onChange={this.handleInputChange}
            value={this.state.desc}
          />
        </FormGroup>
        <Button onClick={this.createGame}>Submit</Button>
      </Form>
    );
  }
}
export default CreateGameForm;
