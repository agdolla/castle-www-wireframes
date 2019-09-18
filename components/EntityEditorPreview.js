import * as React from 'react';
import * as Constants from '~/common/constants';

import { css } from 'react-emotion';
import { Editor } from 'slate-react';

import Byline from '~/components/Byline';
import Plain from 'slate-plain-serializer';
import ReactMarkdown from 'react-markdown';
import MarkdownPluginBreaks from 'remark-breaks';

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
    border-left: 4px solid ${Constants.colors.foreground.primary};
    margin-bottom: 1rem;
  }

  hr {
    border: 0;
    height: 1px;
    width: 100%;
    display: block;
    background: ${Constants.colors.background.tertiary};
    margin-bottom: 1rem;
    margin-top: 1rem;
    :first-child {
      margin-top: 0px;
    }
  }

  pre {
    padding: 16px;
    background: ${Constants.colors.background.tertiary};
    display: block;
    white-space: pre-wrap;
    width: 100%;
    margin-bottom: 1rem;
  }

  code {
    font-size: 0.875rem;
    font-family: 'mono';
    background: ${Constants.colors.background.tertiary};
  }

  img {
    width: 100%;
    margin-bottom: 1rem;
  }

  a {
    color: ${Constants.colors.brand};
    font-weight: 600;

    :hover {
      color: ${Constants.colors.brand};
    }

    :visited {
      color: ${Constants.colors.brand};
    }
  }
`;

const disallowedTypes = ['html', 'virtualHtml', 'parsedHtml'];

const EntityEditorPreview = ({ value, user, title }) => {
  const plainString = Plain.serialize(value);

  return (
    <div className={STYLES_LAYOUT}>
      <h1 className={STYLES_POST_TITLE} style={{ marginBottom: 0 }}>
        {title}
      </h1>
      <Byline user={user} />
      <div style={{ marginTop: 48 }}>
        <ReactMarkdown
          source={plainString}
          disallowedTypes={disallowedTypes}
          plugins={[MarkdownPluginBreaks]}
        />
      </div>
    </div>
  );
};

export default EntityEditorPreview;
