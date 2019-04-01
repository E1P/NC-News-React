import React, { Component } from "react";
import "./App.css";
import { MainArticles, Footer, Header, NavBar, SignIn, TopArticles } from "./Components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SignIn />
        <NavBar />
        <TopArticles />
        <MainArticles />
        <Footer />
      </div>
    );
  }
}

export default App;
