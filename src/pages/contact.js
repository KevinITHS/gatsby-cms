import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

// Kontaktformuläret som visar kontaktinformation.
export default function ContactPage({ data }) {
  // Hämta kontaktinformation från GraphQL-queryn.
  const { email, fakePhonenumber, linkGithub, fullName, profileImage } =
    data.contentfulContentPage;

  return (
    // Rendera Layout och sätt sidans titel och meta-beskrivning med Helmet.
    <Layout>
      <Helmet>
        <title>Contact - {fullName}</title>
        <meta
          name="description"
          content={`Kontaktinformation för ${fullName}`}
        />
      </Helmet>

      {/* Sektion för att visa profilbild och namn. */}
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="image-container rounded-full overflow-hidden">
          <img
            src={profileImage.url}
            alt="profile"
            className="w-36 h-36 object-cover"
          />
        </div>
        <span className="text-xl font-bold mt-4">{fullName}</span>
      </div>

      {/* Sektion för att visa kontaktinformation. */}
      <div className="contact-info text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>

        <p className="mb-2">
          <strong>Email:</strong> {email}
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> {fakePhonenumber}
        </p>
        <p className="mb-2">
          <strong>Github:</strong>{" "}
          <a
            href={linkGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            KevinITHS
          </a>
        </p>
      </div>
    </Layout>
  );
}

// GraphQL-query för att hämta data från Contentful.
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
