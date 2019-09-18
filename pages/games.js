import * as React from 'react';
import * as Fixtures from '~/common/fixtures';

import Page from '~/components/Page';
import Games from '~/components/Games';

import { css } from 'react-emotion';

const MAX_WIDTH = 1212;

const STYLES_CONTENT = css`
  max-width: ${MAX_WIDTH}px;
  padding: 72px 24px 88px 24px;
`;

export default class GamesPage extends React.Component {
  render() {
    return (
      <Page title="Castle: Games" description="Games from the people of the Castle community.">
        <div className={STYLES_CONTENT}>
          <Games games={Fixtures.GAMES} />
        </div>
      </Page>
    );
  }
}
