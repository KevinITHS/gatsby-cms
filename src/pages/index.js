import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const { title, frontimage, description } = data.contentfulHomePage;

  return (
    <Layout>
      <h1>{title}</h1>
      <img src={frontimage.url} alt="image" />
      <p>{description}</p>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    contentfulHomePage {
      description
      title
      frontimage {
        url
      }
    }
  }
`;

export const Head = () => <title>Home Page</title>;
