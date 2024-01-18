import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function postpage({ data }) {
  console.log(data);
  const postData = data.contentfulFullPost;
  return (
    <Layout>
      <div>{postData.title}</div>
      <div>{postData.content.content}</div>
    </Layout>
  );
}

export const query = graphql`
  query ($postId: String!) {
    contentfulFullPost(id: { eq: $postId }) {
      title
      category
      date
      image {
        file {
          url
        }
      }
      content {
        content
      }
    }
  }
`;
