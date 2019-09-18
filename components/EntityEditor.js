import * as React from 'react';
import * as Constants from '~/common/constants';

import PluginInsertBlockOnEnter from '~/editor/plugins/insert-block-on-enter';

import { css } from 'react-emotion';
import { Editor } from 'slate-react';

const renderBlock = (props, editor, next) => {
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

const STYLES_EDITOR_LINE = css`
  white-space: pre-wrap;
  overflow-wrap: break-word;
  width: 100%;
`;

const STYLES_LINK = css`
  margin-right: 24px;
  font-family: 'brand';
  font-size: 16px;
`;

const STYLES_TOP = css`
  background: ${Constants.colors.foreground.secondary};
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 24px 0 24px;
`;

const STYLES_BOTTOM = css`
  padding: 24px;
`;

const plugins = [PluginInsertBlockOnEnter({ object: 'block', type: 'line', nodes: [] })];

const EntityEditor = ({ value, onChange, onSave, onCancel }) => {
  return (
    <div>
      <div className={STYLES_TOP}>
        <span className={STYLES_LINK} onClick={onSave}>
          Save
        </span>
        <span className={STYLES_LINK} onCancel={onCancel}>
          Cancel
        </span>
      </div>
      <div className={STYLES_BOTTOM}>
        <Editor
          spellCheck
          autoFocus
          placeholder="Start typing..."
          value={value}
          onChange={onChange}
          renderBlock={renderBlock}
          plugins={plugins}
        />
      </div>
    </div>
  );
};

export default EntityEditor;
