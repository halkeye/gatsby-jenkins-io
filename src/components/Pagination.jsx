import * as React from 'react';
import { Link } from 'gatsby';

const link = (prefix, page) => {
  // The url changed depending on if we are on the first page or later pages.
  // These must be relative links to handle pagination of tags.
  // First page on blog or tags:
  // https://jenkins.io/node/
  // https://jenkins.io/node/tags/pipeline/
  // Other pages on blog or tags:
  // https://jenkins.io/node/page/4.html
  // https://jenkins.io/node/tags/pipeline/page/4.html
  if (page === 0) { return prefix; }
  return `${prefix}/page/${page}`;
};

const Pagination = ({
  prefix, currentPage, numPages,
}) => {
  const linkedPages = Array.from(new Set([
    1,
    2,
    3,
    currentPage,
    currentPage - 1,
    currentPage - 2,
    currentPage + 1,
    currentPage + 2,
    numPages - 2,
    numPages - 1,
    numPages,
  ])).sort((a, b) => a - b).filter((page) => page > 0 && page <= numPages);
  if (linkedPages.length === 0) { return null; }

  return (
    <div>
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <Link className="page-link" to={link(prefix, currentPage - 1)}>
              &laquo;
            </Link>
          </li>
          {linkedPages.map((page, idx) => {
            const ret = [];
            // if there's a gap, add a ...
            if (idx !== 0 && linkedPages[idx - 1] !== page - 1) {
              ret.push(<li key="..." className="page item disabled"><div className="page-link">...</div></li>);
            }
            ret.push(<li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}><Link className="page-link" to={link(prefix, page)}>{page}</Link></li>);
            return ret;
          })}
          <li className={`page-item ${currentPage === numPages ? 'disabled' : ''}`}>
            <Link className="page-link" to={link(prefix, currentPage + 1)}>
              &raquo;
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
