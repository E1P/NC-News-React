import React, { Component } from "react";
import { Link } from "@reach/router";
import { getTopics } from "../../data-api/api";

export default class NavBar extends Component {
  state = {
    topics: []
  };

  componentDidMount() {
    this.fetchTopics();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.topics.join("") !== this.state.topics.join("")) {
      getTopics().then(({ topics }) => {
        this.setState({ topics });
      });
    }
  }

  fetchTopics = () => {
    getTopics().then(({ topics }) => {
      this.setState({ topics });
    });
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="nav">
        <Link to="/" className="nav-element">
          All
        </Link>
        {topics.map(topic => {
          return (
            <Link key={topic.slug} to={`/topics/${topic.slug}`} className="nav-element">
              <p>{topic.slug}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}
