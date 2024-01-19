import * as React from "react";
import { navigate } from "gatsby";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

// Komponent för 404-sidan som visas när en sida inte hittas.
export default function NotFoundPage() {
  return (
    // Rendera Layout och sätt sidans titel och meta-beskrivning med Helmet.
    <Layout>
      <Helmet>
        <title>404 Not Found</title>
        <meta
          name="description"
          content="The requested URL was not found on this server."
        />
      </Helmet>

      {/* Huvudsektion med meddelande och knapp för att gå till startsidan. */}
      <div className="w-full flex-col flex item-center justify-center">
        <h2>404 Not Found</h2>
        <h3>The requested URL was not found on this server.</h3>
        <p>Click on the button to go back to homepage</p>

        {/* Knapp för att gå till startsidan. */}
        <button
          onClick={() => navigate("/")}
          className="w-40 p-2 shadow-2xl bg-blue-400 rounded-md"
        >
          Go back
        </button>
      </div>
    </Layout>
  );
}

// Komponent för sidans rubrik (Head).
export const Head = () => <title>Not found</title>;
