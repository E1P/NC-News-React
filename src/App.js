import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import { Footer, Header, NavBar, SignIn, MainPage, SignInPage, SingleArticle, Form } from "./Components/index";

class App extends Component {
  render() {
    return (
      <div className="App fade-in">
        <Header />
        <SignIn />
        <NavBar />
        <Router className="router-main">
          <MainPage path="/" />
          <MainPage path="/topics/:topic" />
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
