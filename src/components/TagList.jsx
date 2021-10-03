import React from 'react';
import { Link } from 'gatsby';

const TagList = ({ tags }) => (
  <ul className="list-inline">
    {tags.map((tag) => (
      <Link key={tag} className="tag-link" to={`/node/tags/jenkins/${tag}`}>
        {tag}
      </Link>
    ))}
  </ul>
);

export default TagList;
