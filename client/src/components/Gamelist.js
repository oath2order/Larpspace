import React from "react";
import API from "../utils/API";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';

class Gamelist extends React.Component {
  state = {};

  render() {
    return (
      <div>
        {this.props.games.map(game => (
          <ListGroupItem>
            <p>{game.title}</p>
            <p>{game.description}</p>
            <p>{game.owner}</p>
            <Link to={'/builder/' + game.id}>Manage Game</Link>
          </ListGroupItem>
        ))}
      </div>
    );
  }
}
export default Gamelist;
