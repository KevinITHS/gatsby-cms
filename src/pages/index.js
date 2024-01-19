// Importera React och de nödvändiga komponenterna från Gatsby.
// ALL TEXT PÅ CONTENTFUL är från CHATGPT det är bara placeholders och "fake info" istället för "lorem ipsum"
import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

// Funktionaliteten för startsidan.
const IndexPage = ({ data }) => {
  // Hämta data från GraphQL-queryn.
  const { title, frontimage, description } = data.contentfulHomePage;

  return (
    // Rendera Layout-komponenten för att definiera sidans struktur.
    <Layout>
      {/* Använd Helmet för att sätta titel och meta-beskrivning för sidan. */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={"Välkommen till startsidan"} />
      </Helmet>

      {/* Centrera innehållet och använd Tailwind CSS för styling. */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Visa titeln, en bild och beskrivningen på startsidan. */}
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <img src={frontimage.url} alt="image" className="mb-4 max-w-full" />
        <p className="text-lg">{description}</p>
      </div>
    </Layout>
  );
};

// Exportera komponenten som standard.
export default IndexPage;

// GraphQL-query för att hämta data från Contentful.
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

// Exportera en ytterligare komponent för sidans rubrik (Head).
export const Head = () => <title>Home Page</title>;
