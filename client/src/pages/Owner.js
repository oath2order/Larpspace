import React from "react";
import API from "../utils/API";
import { Card, CardTitle } from "reactstrap";
import withauth from "../HOC/withauth.js";
import CreateGameForm from "../components/CreateGameForm";

const cardStyle = {
  width: "75%",
  marginTop: "5%",
  padding: "25px 15px 15px 25px"
};

class Owner extends React.Component {
  state = {
    games: [],
    userId: ""
  };

  componentDidMount() {
    this.loadUser();
  };

  loadDB = () => {
    console.log(this.state)
    API.getDatabase(this.state.userId).then(res => {
      this.setState({ games: res.data });
      console.log(this.state);
    });
  };
  
  loadUser = () => {
    API.getUser().then(res => {
      this.setState({ userId: res.data.id });
      this.loadDB();
    });
  };
  render() {
    return (
      <div className="container">
        <Card style={cardStyle}>
          <CardTitle>Create a new Game</CardTitle>
          <CreateGameForm />
        </Card>
      </div>
    );
  }
}

export default Owner;
