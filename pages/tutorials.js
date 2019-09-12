import * as React from 'react';

import Page from '~/components/Page';

import { css } from 'react-emotion';

export default class TutorialPage extends React.Component {
  render() {
    return (
      <Page title="Castle: Tutorials" description="Tutorial's to help you make Castle stuff.">
        <div>Tutorials Page</div>
      </Page>
    );
  }
}
