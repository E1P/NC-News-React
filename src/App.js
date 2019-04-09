import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import { Footer, Header, NavBar, SignIn, MainPage, ErrorPage, SignInPage, SingleArticle, Form } from "./Components/index";

class App extends Component {
  state = {
    user: null,
    username: ""
  };

  componentDidMount() {
    const username = localStorage.getItem("nc_news_user");
    if (username && username !== "undefined") this.setState({ username });
  }

  handleAuth = user => {
    this.setState({ user, username: user.username });
    localStorage.setItem("nc_news_user", user.username);
  };

  render() {
    const { user, username } = this.state;
    const { handleAuth } = this;
    return (
      <div className="App fade-in">
        <Header />
        <SignIn username={username} handleAuth={handleAuth} />
        <NavBar />
        <Router className="router">
          <MainPage path="/" username={username} />
          <ErrorPage path="/ErrorPage" />
          <MainPage path="/articles" username={username} />
          <MainPage path="/topics/:topic" username={username} />
          <SingleArticle path="/articles/:article_id" username={username} />
          <Form path="/form/:type/" username={username} />
          <Form path="/form/:type/:article_id" username={username} />
          <SignInPage path="/sign-in" handleAuth={handleAuth} user={user} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
