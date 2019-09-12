import * as React from 'react';

import Page from '~/components/Page';

import { css } from 'react-emotion';

export default class DocumentationPage extends React.Component {
  render() {
    return (
      <Page title="Castle: Documentation" description="Castle documentation and knowledge base.">
        <div>Get tree of github repo and render tree</div>
      </Page>
    );
  }
}
