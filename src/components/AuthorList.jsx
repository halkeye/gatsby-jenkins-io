import * as React from 'react';
import { Link } from 'gatsby';

import { reactJoin } from '../utils';

const AuthorList = ({ authors }) => reactJoin(authors.map((a) => <Link key={a.slug} to={a.slug}>{a.name}</Link>), ', ');
AuthorList.displayName = 'AuthorList';

export default AuthorList;
