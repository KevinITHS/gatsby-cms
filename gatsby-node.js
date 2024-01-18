const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allContentfulFullPost {
        nodes {
          id
        }
      }
    }
  `);

  result.data.allContentfulFullPost.nodes.forEach((node) => {
    createPage({
      path: `/portfolj/${node.id}`,
      component: path.resolve("./src/templates/postpage.js"),
      context: {
        postId: node.id,
      },
    });
  });
};
