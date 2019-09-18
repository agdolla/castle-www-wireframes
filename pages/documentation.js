import * as React from 'react';
import * as Constants from '~/common/constants';
import * as Fixtures from '~/common/fixtures';

import Plain from 'slate-plain-serializer';
import EntityEditorPreview from '~/components/EntityEditorPreview';

import Page from '~/components/Page';

import { Value } from 'slate';

import { css } from 'react-emotion';

const MAX_WIDTH = 1212;

const STYLES_CONTENT = css`
  max-width: ${MAX_WIDTH}px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const STYLES_CONTENT_LEFT = css`
  background: ${Constants.colors.background.tertiary};
  color: ${Constants.colors.background.text};
  width: 288px;
  padding: 24px;
  min-height: 100vh;
`;

const STYLES_CONTENT_RIGHT = css``;

const STYLES_TITLE = css`
  font-size: 16px;
  margin-top: 32px;

  :first-child {
    margin-top: 0;
  }
`;

const STYLES_ITEM = css`
  font-size: 12px;
  margin-top: 8px;
  line-height: 1.5;
  text-decoration: underline;
`;

export default class DocumentationPage extends React.Component {
  state = {
    value: Value.fromJSON(Fixtures.DraftPost),
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    const title = 'The Uniting Of The Tribes';
    const user = Fixtures.USERS_LIST[1];

    return (
      <Page title="Castle: Documentation" description="Castle documentation and knowledge base.">
        <div className={STYLES_CONTENT}>
          <span className={STYLES_CONTENT_LEFT}>
            <div>
              <h4 className={STYLES_TITLE}>Introduction</h4>
              <p className={STYLES_ITEM}>Frequently Asked Questions</p>
              <p className={STYLES_ITEM}>Examples</p>

              <h4 className={STYLES_TITLE}>Castle</h4>
              <p className={STYLES_ITEM}>Quick Start</p>
              <p className={STYLES_ITEM}>Creating an Account</p>
              <p className={STYLES_ITEM}>Make Your First Game</p>
              <p className={STYLES_ITEM}>Describe Your Game With A Castle Project File</p>
              <p className={STYLES_ITEM}>Adding Your Games To Your Profile</p>
              <p className={STYLES_ITEM}>Hosting Your Own Game</p>
              <p className={STYLES_ITEM}>Game Dimensions and Screen</p>
              <p className={STYLES_ITEM}>Manually Make A New Castle Game From Scratch</p>

              <h4 className={STYLES_TITLE}>API Documentation</h4>
              <p className={STYLES_ITEM}>Castle Project File Reference</p>
              <p className={STYLES_ITEM}>User API Reference</p>
              <p className={STYLES_ITEM}>Post API Reference</p>
              <p className={STYLES_ITEM}>Storage API Reference</p>
              <p className={STYLES_ITEM}>Game API Reference</p>
              <p className={STYLES_ITEM}>UI API Reference</p>
              <p className={STYLES_ITEM}>System API Reference</p>
              <p className={STYLES_ITEM}>Code Loading API Reference</p>
              <p className={STYLES_ITEM}>Community Reference Links</p>
            </div>
          </span>
          <span className={STYLES_CONTENT_RIGHT}>
            <EntityEditorPreview title={title} user={user} value={this.state.value} />
          </span>
        </div>
      </Page>
    );
  }
}
