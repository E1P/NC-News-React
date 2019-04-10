import React, { Component } from "react";
import { Link } from "@reach/router";
import { getTopics } from "../../data-api/api";
import { capitaliseFirstLetter } from "../../aux-funcs";

export default class NavBar extends Component {
  state = {
    topicSlugs: [],
    selected: "all"
  };

  componentDidMount() {
    this.fetchTopics();
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (prevState.topicSlugs.join("") !== this.state.topicSlugs.join("")) {
      this.fetchTopics();
    }
    prevProps.topic !== topic && this.setState({ selected: topic });
  }

  fetchTopics = () => {
    getTopics().then(({ topics }) => {
      const topicSlugs = topics.map(topic => topic.slug);
      topicSlugs.unshift("all");
      this.setState({ topicSlugs });
    });
  };

  render() {
    const { topicSlugs } = this.state;
    const { topic } = this.props;
    return (
      <div className="nav">
        {topicSlugs.map(slug => {
          const selectedTopic = topic === slug ? topic : "";
          slug = capitaliseFirstLetter(slug);
          return (
            <Link key={slug} to={slug !== "All" ? `/topics/${slug.toLowerCase()}` : "/all"} className={`nav-element`}>
              <div className={`nav-element-div ${selectedTopic}`} />
              <p className={`topic-slug`}>{slug}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}
