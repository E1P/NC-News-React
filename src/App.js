import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import { Footer, Header, NavBar, SignIn, MainPage, ErrorPage, SignInPage, SingleArticle, Form } from "./Components/index";

class App extends Component {
  state = {
    user: null,
    username: "",
    currentTopic: "all"
  };

  componentDidMount() {
    const username = localStorage.getItem("nc_news_user");
    if (username && username !== "undefined") this.setState({ username });
  }

  handleAuth = user => {
    this.setState({ user, username: user.username });
    localStorage.setItem("nc_news_user", user.username);
  };

  handleTopicChange = (topic = "all") => {
    this.setState({ currentTopic: topic });
  };

  render() {
    const { user, username, currentTopic } = this.state;
    const { handleAuth, handleTopicChange } = this;
    return (
      <div className="App fade-in">
        <Header />
        <SignIn username={username} handleAuth={handleAuth} />
        <NavBar topic={currentTopic} />
        <Router className="router">
          <MainPage path="/" username={username} handleTopicChange={handleTopicChange} />
          <MainPage path="/all" username={username} handleTopicChange={handleTopicChange} />
          <MainPage path="/topics/:topic" username={username} handleTopicChange={handleTopicChange} />
          <SingleArticle path="/articles/:article_id" username={username} handleTopicChange={handleTopicChange} />
          <Form path="/form/:type/" username={username} />
          <Form path="/form/:type/:article_id" username={username} />
          <SignInPage path="/sign-in" handleAuth={handleAuth} user={user} />
          <ErrorPage path="/ErrorPage" />
          <ErrorPage path="/*" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
