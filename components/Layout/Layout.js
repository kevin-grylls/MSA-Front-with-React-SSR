import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Responsive, Divider } from "semantic-ui-react";

export default class Layout extends Component {
  render() {
    return (
      <Responsive>
        <Header />
        <Divider hidden clearing />
        <main>{this.props.children}</main>
        <Divider hidden clearing />
        <Footer />
      </Responsive>
    );
  }
}
