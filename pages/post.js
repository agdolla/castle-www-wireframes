import * as React from 'react';
import * as Fixtures from '~/common/fixtures';

import Plain from 'slate-plain-serializer';
import ReactMarkdown from 'react-markdown';
import MarkdownPluginBreaks from 'remark-breaks';
import PluginInsertBlockOnEnter from '~/editor/plugins/insert-block-on-enter';

import Page from '~/components/Page';

import { Editor } from 'slate-react';
import { Value } from 'slate';
import { css } from 'react-emotion';

const STYLES_ROOT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 0.875rem;
`;

const STYLES_ROOT_LEFT = css`
  min-width: 10%;
  width: 100%;
`;

const STYLES_ROOT_RIGHT = css`
  flex-shrink: 0;
  width: 480px;
  background: #000;
  color: #fff;
  font-family: 'mono';
  font-size: 12px;
`;

const STYLES_ROOT_RIGHT_TOP = css`
  background: #444;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 24px 0 24px;
`;

const STYLES_ROOT_RIGHT_CONTENT = css`
  padding: 24px;
`;

const STYLES_POST_TITLE = css`
  font-size: 6rem;
  line-height: 1;
  font-family: 'heading';
`;

const STYLES_LAYOUT = css`
  margin: 128px auto 128px auto;
  max-width: 768px;
  padding: 0 24px 0 24px;
  width: 100%;
  white-space: pre-wrap;

  ul,
  ol {
    padding-left: 16px;
  }

  h1 {
    font-size: 3rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  h2 {
    font-size: 2.25rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  h4 {
    font-size: 1.33rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  h5 {
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  h6 {
    font-size: 1.15rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;

    :first-child {
      margin-top: 0px;
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5em;
    margin-bottom: 1rem;
  }

  li {
    font-size: 1rem;
    line-height: 1.5em;
  }

  blockquote {
    padding-left: 24px;
    border-left: 4px solid #000;
    margin-bottom: 1rem;
  }

  hr {
    border: 0;
    height: 1px;
    width: 100%;
    display: block;
    background: #454545;
    margin-bottom: 1rem;
    margin-top: 1rem;
    :first-child {
      margin-top: 0px;
    }
  }

  pre {
    padding: 16px;
    background: #000;
    display: block;
    white-space: pre-wrap;
    width: 100%;
    margin-bottom: 1rem;
  }

  code {
    font-size: 0.875rem;
    font-family: 'mono';
    background: #000;
  }

  img {
    width: 100%;
    margin-bottom: 1rem;
  }

  a {
    color: rgba(255, 0, 255, 0.8);
    font-weight: 600;

    :hover {
      color: rgba(255, 0, 255, 1);
    }

    :visited {
      color: rgba(255, 0, 255, 0.8);
    }
  }
`;

const STYLES_LINK = css`
  margin-right: 24px;
  font-family: 'brand';
  font-size: 16px;
`;

const STYLES_BRAND = css`
  font-family: 'logo';
  font-size: 16px;
  margin-right: 48px;
  margin-bottom: 4px;
`;

const STYLES_EDITOR_LINE = css`
  white-space: pre-wrap;
  overflow-wrap: break-word;
  width: 100%;
`;

const STYLES_BYLINE = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`;

const STYLES_BYLINE_TEXT = css`
  min-width: 10%;
  width: 100%;
  padding-left: 8px;
`;

const STYLES_AVATAR = css`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
  background: red;
  background-size: cover;
  background-position: 50% 50%;
  flex-shrink: 0;
`;

const disallowedTypes = ['html', 'virtualHtml', 'parsedHtml'];

export default class PostPage extends React.Component {
  state = {
    value: Value.fromJSON(Fixtures.DraftPost),
  };

  plugins = [PluginInsertBlockOnEnter({ object: 'block', type: 'line', nodes: [] })];

  onChange = ({ value }) => {
    this.setState({ value });
  };

  renderBlock = (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case 'line':
        return (
          <p className={STYLES_EDITOR_LINE} {...attributes}>
            {children}
          </p>
        );
      default:
        return next();
    }
  };

  render() {
    const plainString = Plain.serialize(this.state.value);

    return (
      <Page>
        <div className={STYLES_ROOT}>
          <div className={STYLES_ROOT_LEFT}>
            <div className={STYLES_LAYOUT}>
              <h1 className={STYLES_POST_TITLE} style={{ marginBottom: 0 }}>
                The Uniting Of The Tribes
              </h1>
              <div className={STYLES_BYLINE}>
                <span
                  className={STYLES_AVATAR}
                  style={{ backgroundImage: `url(/static/avatar-author.png)` }}
                />
                <span className={STYLES_BYLINE_TEXT}>
                  <strong>Tiffany Zhong</strong> — August 14th, 2019 — Posted in{' '}
                  <a href="#">News</a>
                </span>
              </div>
              <div>
                <ReactMarkdown
                  source={plainString}
                  disallowedTypes={disallowedTypes}
                  plugins={[MarkdownPluginBreaks]}
                />
              </div>
            </div>
          </div>
          <div className={STYLES_ROOT_RIGHT}>
            <div className={STYLES_ROOT_RIGHT_TOP}>
              <span className={STYLES_LINK}>Save</span>
              <span className={STYLES_LINK}>Cancel</span>
            </div>
            <div className={STYLES_ROOT_RIGHT_CONTENT}>
              <Editor
                spellCheck
                autoFocus
                placeholder="Start typing..."
                value={this.state.value}
                onChange={this.onChange}
                renderBlock={this.renderBlock}
              />
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
