import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import { Footer, Header, NavBar, SignIn, MainPage, SignInPage, SingleArticle, Form } from "./Components/index";

class App extends Component {
  state = {
    user: null,
    username: ""
  };

  componentDidMount() {
    console.log("Storage on mount>>> ", localStorage);
    const username = localStorage.getItem("nc_news_user");
    if (username && username !== "undefined") this.setState({ username });
  }

  // componentDidUpdate(_, prevState) {
  //   console.log("Storage on update >>> ", localStorage);
  //   const user = localStorage.getItem("user");

  //   if (user.username !== prevState.user.username) this.setState({ user });
  // }

  handleAuth = user => {
    console.log("handleAuth in App: ", user);
    this.setState({ user, username: user.username });
    localStorage.setItem("nc_news_user", user.username);
  };

  render() {
    const { user, username } = this.state;
    const { handleAuth } = this;
    console.log("user in app: ", user);
    console.log("username in app: ", username);
    return (
      <div className="App fade-in">
        <Header />
        <SignIn username={username} handleAuth={handleAuth} />
        <NavBar />
        <Router className="router">
          <MainPage path="/" username={username} />
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
