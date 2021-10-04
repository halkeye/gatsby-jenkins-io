import React from 'react';
import { Link } from 'gatsby';

const TagList = ({ tags }) => (
  <ul className="list-inline tags">
    {tags.map((tag) => (
      <li key={tag}>
        <Link className="tag-link" to={`/node/tags/${tag}`}>
          {tag}
        </Link>
      </li>
    ))}
  </ul>
);

export default TagList;
