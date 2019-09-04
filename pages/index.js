import * as React from 'react';

import { css } from 'react-emotion';

const STYLES_ROOT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 0.875rem;
`;

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className={STYLES_ROOT}>
        <a href="/post">Editor Demo</a>
      </div>
    );
  }
}
