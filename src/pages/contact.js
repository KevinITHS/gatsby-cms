import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function ContactPage({ data }) {
  const { email, fakePhonenumber, linkGithub, fullName, profileImage } =
    data.contentfulContentPage;

  return (
    <Layout>
      <div className="profile-container">
        <div className="image-container">
          <img src={profileImage.url} alt="profile" />
        </div>
        <span>{fullName}</span>
      </div>
      <div className="contact-info">
        <h2>Contact info</h2>

        <p>Email: {email}</p>
        <p>Phone: {fakePhonenumber}</p>
        <p>
          Github:{" "}
          <a href={linkGithub} target="_blank" rel="noopener noreferrer">
            KevinITHS
          </a>
        </p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    contentfulContentPage {
      email
      fakePhonenumber
      fullName
      profileImage {
        url
      }
      linkGithub
    }
  }
`;
