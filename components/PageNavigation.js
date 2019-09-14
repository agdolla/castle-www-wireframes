import React, { useState } from 'react';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  width: 100%;
  color: white;
`;

const STYLES_LINK = css`
  display: block;
  text-decoration: none;
  :visited {
    color: #fff;
  }

  :hover {
    color: #ececec;
  }
`;

const STYLES_BRAND = css`
  font-size: 32px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  :visited {
    color: #fff;
  }

  :hover {
    color: #ececec;
  }
`;

const Link = (props) => {
  return (
    <a className={STYLES_LINK} href={props.href}>
      {props.children}
    </a>
  );
};

const PageNavigation = () => {
  const [greeting, setGreeting] = useState('Hello Castle Function Component!');

  return (
    <div className={STYLES_LAYOUT}>
      <a className={STYLES_BRAND} href="/">
        Castle
      </a>
      <Link href="/sign-in">Sign in</Link>
      <Link href="/games">Games</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/tutorials">Tutorials</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/reviews">Reviews</Link>
      <Link href="/documentation">Documentation</Link>
    </div>
  );
};

export default PageNavigation;
