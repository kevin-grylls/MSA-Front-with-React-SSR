import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Layout";
import { Container, Image, Divider, Card } from "semantic-ui-react";
import { Query } from "react-apollo";
import { QUERY_LIST } from "../api";
import MOCK from "../config/mock.json";

const Product = () => (
  <Query query={QUERY_LIST}>
    {({ loading, error, data }) => {
      if (error) {
        /* Error Page */
        console.warn(error);

        const template = MOCK.PRODUCT.map(product => (
          <Card
            id={product.id}
            image={product.image}
            header={product.header}
            meta={product.meta}
            description={product.description}
          />
        ));

        return template;
      }

      return <React.Fragment>{"Fetch Result"}</React.Fragment>;
    }}
  </Query>
);

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <div style={{ height: "20px" }} />
          <Image fluid src="/static/assets/images/main.png" />
          <Divider hidden />
          <Card.Group doubling itemsPerRow={3} stackable>
            <Product />
          </Card.Group>
        </Container>
      </Layout>
    );
  }
}
