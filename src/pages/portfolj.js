import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

export default function PortfolioPage({ data }) {
  const [tags, setTags] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [includedTag, setIncludedTag] = useState("All");
  const posts = data.allContentfulPortfolioPosts.nodes;

  useEffect(() => {
    const allTags = posts.reduce((acc, post) => {
      return acc.concat(post.category);
    }, []);

    const uniqueTags = [...new Set(allTags)];
    setTags([...uniqueTags, "All"]);
    setFilteredPosts([...uniqueTags, "All"]);
  }, [posts]);

  useEffect(() => {
    if (includedTag === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => {
          return post.category === includedTag;
        })
      );
    }
  }, [includedTag]);

  return (
    <Layout>
      <div className="main justify-center flex gap-6">
        <div className="post-container flex flex-col gap-6">
          {filteredPosts.map((post) => {
            return (
              <div
                className="shadow-lg p-2.5 rounded-md m-auto"
                style={{
                  width: "fit-content",
                }}
              >
                <h2 className="object-contain w-60">{post.title}</h2>
                <div className="image-container w-96">
                  <img src={post.thumbnail.file.url} alt="post" />
                </div>
                <Link className="w-96" to={post.fullPostReference.id}>
                  LINK TO POST
                </Link>
              </div>
            );
          })}
        </div>
        <div className="filter-container border-4 w-56">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`tag-button ${
                includedTag.includes(tag) ? "tag-active" : "tag-inactive"
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
