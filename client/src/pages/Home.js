import React from "react";
//import Card from "../components/Card";
import { Card, Nav, NavLink, TabContent, TabPane, Form, Button, FormGroup, Label, Input } from "reactstrap";
import classnames from "classnames";
import withauth from "../HOC/withauth.js";
import API from "../utils/API";
import { withRouter } from "react-router-dom";


const cardStyle = { width: "75%", marginTop: "5%", padding: '25px 15px 15px 25px' };
const paneStyle = {marginTop: "15px", marginBottom: "15px"};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      email: "",
      password: "",
      username: ""
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  getUser = () => {
    API.getUser().then(res => {
      let un = res.data.email ? res.data.email.split("@") : "";
      this.setState({ username: un[0] });
    });
  };
  componentDidMount() {
    console.log(this.props);
    this.getUser();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
   // console.log(value);
    this.setState({ [name]: value });
  };

  signout = event => {
    event.preventDefault();
    this.props.signOut().then(() => console.log(this.props.currentUser));
  };

  createUser = event => {
    event.preventDefault();
    this.props
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => API.createUser(this.props.currentUser));
  };

  login = event => {
    event.preventDefault();
    this.props
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.history.push("/owner"));
  };

  render() {
    return (
      <div className="container">
        <span>Welcome {this.state.username} </span>
        <Card style={cardStyle}>
          <Nav tabs>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "1"
              })}
              onClick={() => this.toggle("1")}
            >
              Game Owner Login
            </NavLink>
            <NavLink
              className={classnames({
                active: this.state.activeTab === "2"
              })}
              onClick={() => this.toggle("2")}
            >
              Player Login
            </NavLink>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" style={paneStyle}>
              <Form>
                <h3>Owner Login</h3>
                <FormGroup>
                  <Label for="email">email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.handleInputChange}
                    value={this.state.email}
                    placeholder="username@email.com"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                    placeholder=""
                  />
                </FormGroup>
                <Button color="primary" onClick={this.createUser}>
                  Create
                </Button>
                <Button color="danger" onClick={this.signout}>
                  Signout
                </Button>
                <Button color="success" href="/owner" onClick={this.login}>
                  SignIn
                </Button>
              </Form>
            </TabPane>
            <TabPane tabId="2" style={paneStyle}>
              <Form>
                <h3>Player Login</h3>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input type="text" placeholder="username" />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" placeholder="" />
                </FormGroup>
                <Button color="primary" href="/player">
                  Submit
                </Button>
              </Form>
            </TabPane>
          </TabContent>
        </Card>
      </div>
    );
  }
}

export default withRouter(withauth(Home));
