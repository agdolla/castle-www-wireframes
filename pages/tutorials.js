import * as React from 'react';

import Page from '~/components/Page';
import Posts from '~/components/Posts';

import { css } from 'react-emotion';

export default class TutorialPage extends React.Component {
  render() {
    return (
      <Page title="Castle: Tutorials" description="Tutorial's to help you make Castle stuff.">
        <Posts />
      </Page>
    );
  }
}
