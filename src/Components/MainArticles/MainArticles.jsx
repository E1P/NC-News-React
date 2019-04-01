import React, { Component } from "react";
import Loader from "../Loader/Loader";

export default class MainArticles extends Component {
  state = {
    isLoading: true
  };

  render() {
    /*  if (this.state.isLoading) */ return <Loader />;
    // return (
    //   <div className="main-articles">
    //     Article Preview...
    //     <br />
    //     Article Preview...
    //     <br />
    //     Article Preview...
    //     <br />
    //     Article Preview...
    //     <br />
    //   </div>
    // );
  }
}
