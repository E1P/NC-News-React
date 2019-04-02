import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import { Footer, Header, NavBar, SignIn, MainPage, TopicPage, SignInPage, SingleArticle, Form } from "./Components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SignIn />
        <NavBar />
        <Router className="router-main">
          <MainPage path="/" />
          <TopicPage path="/topics/:topic" />
          <SingleArticle path="/articles/:article_id" />
          <Form path="/form/:type" />
          <SignInPage path="/sign-in" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
