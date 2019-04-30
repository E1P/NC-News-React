import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import { Footer, Header, NavBar, SignIn, MainPage, ErrorPage, SignInPage, SingleArticle, Form } from "./Components/index";

class App extends Component {
  state = {
    user: null,
    username: "",
    currentTopic: "all",
    p: 1,
    hidden: true,
    allLoaded: false
  };

  componentDidMount() {
    const username = localStorage.getItem("nc_news_user");
    if (username && username !== "undefined") this.setState({ username, p: 1 });
  }

  handleAuth = user => {
    this.setState({ user, username: user.username });
    localStorage.setItem("nc_news_user", user.username);
  };

  handleTopicChange = (topic = "all") => {
    this.setState({ currentTopic: topic, p: 1, allLoaded: false });
  };

  handleAllLoaded = input => {
    this.setState({ allLoaded: input });
  };

  handleScroll = event => {
    event.persist();
    const { p, allLoaded } = this.state;
    const { clientHeight, scrollHeight, scrollTop } = event.target;
    if (clientHeight + scrollTop === scrollHeight && !allLoaded) {
      const pageToLoad = p + 1;
      this.setState({ p: pageToLoad });
    }
  };

  handleDropdownClick = () => {
    this.setState(this.state.hidden ? { hidden: false } : { hidden: true });
  };

  handleOutsideDropDownClick = event => {
    const isOutside = !/burger/.test(event.target.className);
    if (isOutside) {
      this.setState({ hidden: true });
    }
  };

  render() {
    const { user, username, currentTopic, p, hidden } = this.state;
    const { handleAuth, handleTopicChange, handleDropdownClick, handleScroll, handleOutsideDropDownClick, handleAllLoaded } = this;
    return (
      <div className="App fade-in" onScroll={handleScroll} onClick={handleOutsideDropDownClick}>
        <Header />
        <SignIn username={username} handleAuth={handleAuth} handleDropdownClick={handleDropdownClick} hidden={hidden} />
        <NavBar topic={currentTopic} handleTopicChange={handleTopicChange} />
        <Router className="router">
          <MainPage path="/" p={p} username={username} handleTopicChange={handleTopicChange} handleAllLoaded={handleAllLoaded} />
          <MainPage path="/all" p={p} username={username} handleTopicChange={handleTopicChange} handleAllLoaded={handleAllLoaded} />
          <MainPage path="/topics/:topic" p={p} username={username} handleTopicChange={handleTopicChange} handleAllLoaded={handleAllLoaded} />
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
