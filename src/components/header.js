import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export default function Header() {
  const queryData = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          navLinks {
            location
            name
          }
        }
      }
    }
  `);

  const links = queryData.site.siteMetadata.navLinks;
  return (
    <>
      <header className="flex p-5 items-center bg-blue-400">
        <ul className="flex gap-4">
          {links.map((link, index) => {
            return (
              <li className="text-xl font-bold" key={index}>
                <Link to={link.location}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
}
