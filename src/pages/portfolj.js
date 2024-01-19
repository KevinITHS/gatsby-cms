import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";

// Portföljsidan som visar olika projekt och deras filter.
export default function PortfolioPage({ data }) {
  // Tillståndsvariabler för taggar, filtrerade inlägg och vald tag.
  const [tags, setTags] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [includedTag, setIncludedTag] = useState("All");

  // Hämta inläggsdata från GraphQL-queryn.
  const posts = data.allContentfulPortfolioPosts.nodes;

  // Effekt för att extrahera unika taggar från alla inlägg.
  useEffect(() => {
    const allTags = posts.reduce((acc, post) => {
      return acc.concat(post.category);
    }, []);

    const uniqueTags = [...new Set(allTags)];
    setTags(["All", ...uniqueTags]); // Change order to have "All" first
    setFilteredPosts(posts);
  }, [posts]);

  // Effekt för att filtrera inlägg baserat på vald tag.
  useEffect(() => {
    if (includedTag !== "All") {
      setFilteredPosts(
        posts.filter((post) => post.category.includes(includedTag))
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [includedTag, posts]);

  return (
    // Rendera Layout och sätt sidans titel och meta-beskrivning med Helmet.
    <Layout>
      <Helmet>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Utforska min portfölj med olika projekt."
        />
      </Helmet>

      {/* Huvudsektion med inlägg och filter. */}
      <div className="main flex justify-center gap-6">
        {/* Sektion för att visa filtrerade inlägg. */}
        <div className="post-container flex flex-wrap gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.title}
              className="post-card shadow-lg rounded-md p-4 w-72"
            >
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <div className="image-container">
                <img
                  src={post.thumbnail.file.url}
                  alt="post"
                  className="w-full h-40 object-cover mb-2 rounded-md"
                />
              </div>
              <p className="text-gray-600 mb-2">{post.shortDescription}</p>
              <Link
                to={post.fullPostReference.id}
                className="text-blue-500 hover:underline"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>

        {/* Sektion för filterknappar baserat på taggar. */}
        <div className="filter-container border-4 w-48">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`tag-button ${
                includedTag === tag ? "tag-active" : "tag-inactive"
              } 
                   px-2 py-1 m-1 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-500 hover:text-white focus:outline-none focus:bg-gray-500 focus:text-white transition-all`}
              onClick={() => setIncludedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
}

// GraphQL-query för att hämta data från Contentful.
export const query = graphql`
  query {
    allContentfulPortfolioPosts {
      nodes {
        title
        thumbnail {
          file {
            url
          }
        }
        shortDescription
        date
        category
        portfolioLink
        fullPostReference {
          id
        }
      }
    }
  }
`;
