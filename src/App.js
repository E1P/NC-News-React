import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import { Footer, Header, NavBar, SignIn, MainPage, SignInPage, SingleArticle, Form } from "./Components/index";

class App extends Component {
  state = {
    user: null
  };

  handleAuth = user => {
    this.setState({ user });
  };

  render() {
    const { user } = this.state;
    const { handleAuth } = this;
    return (
      <div className="App fade-in">
        <Header />
        <SignIn user={user} handleAuth={handleAuth} />
        <NavBar />
        <Router className="router-main">
          <MainPage path="/" user={user} />
          <MainPage path="/articles" user={user} />
          <MainPage path="/topics/:topic" user={user} />
          <SingleArticle path="/articles/:article_id" user={user} />
          <Form path="/form/:type/" user={user} />
          <Form path="/form/:type/:article_id" user={user} />
          <SignInPage path="/sign-in" handleAuth={handleAuth} user={user} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
