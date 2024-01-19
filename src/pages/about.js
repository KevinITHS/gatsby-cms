import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

// Om mig-sidan som visar personlig information och arbetsbakgrund.
export default function AboutPage({ data }) {
  // Hämta data från GraphQL-queryn.
  const { title, schoolAndWork, contentBody, profileImage } =
    data.contentfulAboutPage;

  return (
    // Rendera Layout och sätt sidans titel och meta-beskrivning med Helmet.
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`Om mig - ${title}`} />
      </Helmet>

      {/* Sektion för att visa titeln och profilbild. */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="image-container mx-auto mb-8">
          <img
            src={profileImage.url}
            alt="profile"
            className="w-48 h-48 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Sektion för att visa skol- och arbetsbakgrund som en lista. */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Skol- och arbetsbakgrund</h2>
        <ul className="list-disc pl-4">
          {schoolAndWork.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Sektion för att visa personligt innehåll om mig. */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Om mig</h2>
        <p>{contentBody.contentBody}</p>
      </div>
    </Layout>
  );
}

// GraphQL-query för att hämta data från Contentful.
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
