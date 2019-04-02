import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import { Footer, Header, NavBar, SignIn, MainPage, TopicPage, SignInPage, SingleArticle, ArticleForm } from "./Components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SignIn />
        <NavBar />
        <Router>
          <TopicPage />
          <MainPage />
          <SingleArticle />
          <ArticleForm />
          <SignInPage />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
