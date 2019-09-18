import * as React from 'react';

import Page from '~/components/Page';
import Posts from '~/components/Posts';

import { css } from 'react-emotion';

const MAX_WIDTH = 1212;

const STYLES_CONTENT = css`
  max-width: ${MAX_WIDTH}px;
  padding: 72px 24px 88px 24px;
`;

const STYLES_GROUP_TITLE = css`
  font-size: 18px;
  margin-bottom: 16px;
  padding-left: 16px;
`;

export default class TutorialPage extends React.Component {
  render() {
    return (
      <Page title="Castle: Tutorials" description="Tutorial's to help you make Castle stuff.">
        <div className={STYLES_CONTENT}>
          <h2 className={STYLES_GROUP_TITLE}>Tutorials</h2>
          <Posts />
        </div>
      </Page>
    );
  }
}
