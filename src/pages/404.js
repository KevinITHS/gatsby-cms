import * as React from "react";
import { navigate } from "gatsby";
import Layout from "../components/layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <div className="w-full flex-col flex item-center justify-center">
        <h2>404 Not Found</h2>
        <h3>The requested URL was not found on this server.</h3>
        <p>Click on the button to go back to homepage</p>

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

export const Head = () => <title>Not found</title>;
