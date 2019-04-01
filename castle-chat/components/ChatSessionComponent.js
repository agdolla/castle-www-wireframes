import * as React from 'react';

import { css } from 'react-emotion';

const STYLES_CHAT_SESSION_COMPONENT = css``;

const STYLES_CHAT_SESSION_COMPONENT_TOP = css`
  font-size: 14px;
  font-weight: 600;
`;

const STYLES_CHAT_SESSION_COMPONENT_BOTTOM = css`
  font-size: 10px;
  font-weight: 400;
  margin-top: 2px;
`;

const ChatSessionComponent = props => {
  return (
    <div className={STYLES_CHAT_SESSION_COMPONENT}>
      <div className={STYLES_CHAT_SESSION_COMPONENT_TOP}>{props.top}</div>
      <div className={STYLES_CHAT_SESSION_COMPONENT_BOTTOM}>{props.children}</div>
    </div>
  );
};

export default ChatSessionComponent;
