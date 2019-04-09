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

  componentDidUpdate(_, prevState) {
    if (prevState.topicSlugs.join("") !== this.state.topicSlugs.join("")) {
      this.fetchTopics();
    }
  }

  fetchTopics = () => {
    getTopics().then(({ topics }) => {
      const topicSlugs = topics.map(topic => topic.slug);
      this.setState({ topicSlugs });
    });
  };

  handleClick = input => {
    this.setState({ selected: input });
  };

  render() {
    const { topicSlugs, selected } = this.state;
    const allSelected = selected === "all" ? "all" : "";
    return (
      <div className="nav">
        <Link to="/" className={`nav-element`} onClick={() => this.handleClick("all")}>
          <div className={`nav-element-div ${allSelected}`} />
          <p className={`nav-home`}>All</p>
        </Link>
        {topicSlugs.map(slug => {
          const selectedSlug = slug === selected ? slug : "";
          slug = capitaliseFirstLetter(slug);
          return (
            <Link key={slug} to={`/topics/${slug.toLowerCase()}`} className={`nav-element`} onClick={() => this.handleClick(slug.toLowerCase())}>
              <div className={`nav-element-div ${selectedSlug}`} />
              <p className={`topic-slug`}>{slug}</p>
            </Link>
          );
        })}
      </div>
    );
  }
}
