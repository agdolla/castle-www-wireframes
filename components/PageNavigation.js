import React, { useState } from 'react';
import * as Constants from '~/common/constants';

import { css } from 'react-emotion';

const STYLES_LAYOUT = css`
  width: 100%;
  padding: 16px;
`;

const STYLES_LINK = css`
  text-decoration: none;
  font-size: 20px;
  margin-top: 8px;
  display: block;
  color: ${Constants.colors.background.text};

  :visited {
    color: ${Constants.colors.background.text};
  }

  :hover {
    color: ${Constants.colors.background.text};
  }
`;

const STYLES_BRAND = css`
  font-size: 32px;
  font-weight: 600;
  text-decoration: none;
  display: block;
  margin-bottom: 24px;
  font-family: 'heading';
  color: ${Constants.colors.background.text};

  :visited {
    color: ${Constants.colors.background.text};
  }

  :hover {
    color: ${Constants.colors.background.text};
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
