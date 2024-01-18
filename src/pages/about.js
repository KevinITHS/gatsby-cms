import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function AboutPage({ data }) {
  const { title, schoolAndWork, contentBody, profileImage } =
    data.contentfulAboutPage;

  return (
    <Layout>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="image-container">
        <img src={profileImage.url} alt="profile" />
      </div>
      <ul>
        {schoolAndWork.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <p>{contentBody.contentBody}</p>
    </Layout>
  );
}

export const query = graphql`
  query {
    contentfulAboutPage {
      contentBody {
        contentBody
      }
      profileImage {
        url
      }
      schoolAndWork
      title
    }
  }
`;
