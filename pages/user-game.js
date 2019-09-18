import * as React from 'react';
import * as Fixtures from '~/common/fixtures';
import * as Constants from '~/common/constants';

import Page from '~/components/Page';
import Byline from '~/components/Byline';

import { css } from 'react-emotion';

const MAX_WIDTH = 1212;

const STYLES_CONTENT = css`
  max-width: ${MAX_WIDTH}px;
  padding: 48px 48px 88px 48px;
`;

const STYLES_PREVIEW = css`
  background-size: cover;
  background-position: 50% 50%;
  width: 100%;
  max-width: 688px;
  height: 400px;
  background: magenta;
  margin-top: 16px;
`;

const STYLES_TITLE = css`
  font-size: 48px;
  font-weight: 600;
`;

export default class UserGamePage extends React.Component {
  render() {
    return (
      <Page title="GAME" description="CHANGE ME.">
        <div className={STYLES_CONTENT}>
          <div className={STYLES_TITLE}>Game Title</div>
          <Byline user={Fixtures.USERS_LIST[0]} />
          <div
            className={STYLES_PREVIEW}
            style={{ backgroundImage: `url('/static/games/7.png')` }}
          />
        </div>
      </Page>
    );
  }
}
