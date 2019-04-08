import * as React from 'react';
import { css, styled } from 'react-emotion';

// LEFT CHAT BUBBLE
// ---------------------------------------------------------

const STYLES_LEFT_CHAT_BUBBLE = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-right: 24px;
  margin-top: 16px;
`;

const STYLES_LEFT_CHAT_BUBBLE_AVATAR = css`
  background-size: cover;
  background-position: 50% 50%;
  height: 24px;
  width: 24px;
  border-radius: 4px;
  flex-shrink: 0;
`;

const STYLES_LEFT_CHAT_BUBBLE_MESSAGE = css`
  min-width: 25%;
  width: 100%;
  padding: 0 0 0 8px;
`;

const STYLES_LEFT_CHAT_BUBBLE_MESSAGE_TITLE = css`
  font-size: 10px;
  color: #777;
`;

const STYLES_LEFT_CHAT_BUBBLE_MESSAGE_BOTTOM = css`
  text-align: left;
  margin-top: 6px;
`;

const STYLES_LEFT_CHAT_BOUNDS = css`
  display: inline-block;
  padding: 8px 16px 10px 16px;
  background: #ffffff;
  color: #000000;
  border-radius: 12px;
  font-size: 14px;
`;

export const LeftChatBubble = props => {
  return (
    <div className={STYLES_LEFT_CHAT_BUBBLE}>
      <span
        className={STYLES_LEFT_CHAT_BUBBLE_AVATAR}
        style={{ backgroundImage: `url(${props.src})` }}
      />
      <div className={STYLES_LEFT_CHAT_BUBBLE_MESSAGE}>
        <div className={STYLES_LEFT_CHAT_BUBBLE_MESSAGE_TITLE}>{props.name}</div>
        <div className={STYLES_LEFT_CHAT_BUBBLE_MESSAGE_BOTTOM}>
          <span className={STYLES_LEFT_CHAT_BOUNDS}>{props.children}</span>
        </div>
      </div>
    </div>
  );
};

// RIGHT CHAT BUBBLE
// ---------------------------------------------------------

const STYLES_RIGHT_CHAT_BUBBLE = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-left: 24px;
  margin-top: 16px;
`;

const STYLES_RIGHT_CHAT_BUBBLE_AVATAR = css`
  background-size: cover;
  background-position: 50% 50%;
  height: 24px;
  width: 24px;
  border-radius: 4px;
  flex-shrink: 0;
`;

const STYLES_RIGHT_CHAT_BUBBLE_MESSAGE = css`
  min-width: 25%;
  width: 100%;
  padding: 0 8px 0 0;
`;

const STYLES_RIGHT_CHAT_BUBBLE_MESSAGE_TITLE = css`
  font-size: 10px;
  color: #777;
  text-align: right;
`;

const STYLES_RIGHT_CHAT_BUBBLE_MESSAGE_BOTTOM = css`
  margin-top: 6px;
  text-align: right;
`;

const STYLES_RIGHT_CHAT_BOUNDS = css`
  display: inline-block;
  padding: 8px 16px 10px 16px;
  background: rgb(255, 0, 235);
  border-radius: 12px;
  color: #fff;
  font-size: 14px;
`;

export const RightChatBubble = props => {
  return (
    <div className={STYLES_RIGHT_CHAT_BUBBLE}>
      <div className={STYLES_RIGHT_CHAT_BUBBLE_MESSAGE}>
        <div className={STYLES_RIGHT_CHAT_BUBBLE_MESSAGE_TITLE}>{props.name}</div>
        <div className={STYLES_RIGHT_CHAT_BUBBLE_MESSAGE_BOTTOM}>
          <span className={STYLES_RIGHT_CHAT_BOUNDS}>{props.children}</span>
        </div>
      </div>
      <span
        className={STYLES_RIGHT_CHAT_BUBBLE_AVATAR}
        style={{ backgroundImage: `url(${props.src})` }}
      />
    </div>
  );
};
