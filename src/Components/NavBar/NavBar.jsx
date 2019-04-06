import React, { Component } from "react";
import { Link } from "@reach/router";
import { getTopics } from "../../data-api/api";
import { capitaliseFirstLetter } from "../../aux-funcs";

export default class NavBar extends Component {
  state = {
    topicSlugs: []
  };

  componentDidMount() {
    this.fetchTopics();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.topicSlugs.join("") !== this.state.topicSlugs.join("")) {
      this.fetchTopics();
    }
  }

  fetchTopics = () => {
    getTopics().then(({ topics }) => {
      const topicSlugs = topics.map(topic => capitaliseFirstLetter(topic.slug));
      this.setState({ topicSlugs });
    });
  };

  render() {
    console.log("slugs >>>>", this.state.topicSlugs);
    const { topicSlugs } = this.state;
    return (
      <div className="nav">
        <Link to="/" className="nav-element">
          <p className="nav-home">All</p>
        </Link>
        {topicSlugs.map(slug => {
          console.log("Mapping >>>", slug);
          return (
            <Link key={slug} to={`/topics/${slug.toLowerCase()}`} className="nav-element">
              <div className="nav-element-div" />
              <p className="topic-slug">{slug}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}
