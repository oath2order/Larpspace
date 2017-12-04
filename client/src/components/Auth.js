import React, { Component } from "react";
import PropTypes from "prop-types";

import auth from "../utils/fb";

class Auth extends Component {
  state = {
    currentUser: null
  };

  static childContextTypes = {
    currentUser: PropTypes.object,
    createUserWithEmailAndPassword: PropTypes.func,
    signInWithEmailAndPassword: PropTypes.func,
    signOut: PropTypes.func
  };

  getChildContext() {
    return {
      currentUser: this.state.currentUser,
      createUserWithEmailAndPassword: this
        .createUserWithEmailAndPassword,
      signInWithEmailAndPassword: this.signInWithEmailAndPassword,
      signOut: this.signOut
    };
  }

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(this.onAuthStateChanged);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAuthStateChanged = user => {
    this.setState({ currentUser: user });
  };

  createUserWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  signInWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  signOut = () => {
    return auth.signOut();
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Auth;
