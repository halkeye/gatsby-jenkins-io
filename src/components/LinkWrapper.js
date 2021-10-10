import * as React from 'react';
import { Link } from 'gatsby';

const LinkWrapper = ({ to, children, ...props }) => {
  if (to.startsWith('http://') || to.startsWith('https://')) {
    return <a href={to} {...props}>{children}</a>;
  }
  return <Link to={to} {...props}>{children}</Link>;
};
LinkWrapper.displayName = 'LinkWrapper';

export default LinkWrapper;
