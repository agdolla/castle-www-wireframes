import * as React from 'react';
import * as SVG from '~/common/svg';

import { css, styled } from 'react-emotion';

import NotificationPill from '~/components/NotificationPill';

const ICON_STYLES = `
  height: 36px;
  width: 36px;
  flex-shrink: 0;
  border-radius: 4px;
  background-color: #000;
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const STYLES_CHAT_ICON = css`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  ${ICON_STYLES}
`;

const STYLES_CHAT_ICON_ACTIVE = css`
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1);
  ${ICON_STYLES}
`;

const STYLES_CHAT = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const STYLES_CHAT_TOP = css`
  min-height: 10%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px 16px 8px;
`;

const STYLES_CHAT_BOTTOM = css`
  flex-shrink: 0;
  padding: 16px 8px 8px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const STYLES_AUTH_USER = css`
  padding: 16px 8px 16px 8px;
  width: 100%;
  background: #232323;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export class ChatColumn extends React.Component {
  render() {
    const { selectedChatId, chats } = this.props;

    return (
      <div className={STYLES_CHAT}>
        <div className={STYLES_CHAT_TOP}>
          {chats.map(c => {
            const isSelected = selectedChatId !== c.id;
            const isUnread = c.unread > 0;

            const photo = c.group ? c.group.groupPhoto : c.user.profilePhoto;

            return (
              <span
                onClick={() => this.props.onChatSelect(c)}
                className={selectedChatId !== c.id ? STYLES_CHAT_ICON : STYLES_CHAT_ICON_ACTIVE}
                style={{ backgroundImage: `url(${photo})`, marginBottom: 16 }}>
                {isUnread && isSelected ? (
                  <NotificationPill style={{ position: 'absolute', right: -4, top: -6 }}>
                    {c.unread}
                  </NotificationPill>
                ) : null}
              </span>
            );
          })}
        </div>
        <div className={STYLES_CHAT_BOTTOM}>
          <span className={STYLES_CHAT_ICON} style={{ backgroundColor: 'rgb(255, 0, 235)' }}>
            <SVG.Plus size="16px" />
          </span>
        </div>
      </div>
    );
  }
}

const STYLES_USER_SECTION = css`
  background: #171717;
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid #3d3d3d;
`;

const STYLES_USER_SECTION_LEFT = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px 16px 8px;
  width: 64px;
  flex-shrink: 0;
`;

const STYLES_USER_SECTION_RIGHT = css`
  min-width: 25%;
  width: 100%;
  height: 196px;
  overflow-y: scroll;
  box-shadow: -1px 0 0 #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_TITLE = css`
  font-size: 14px;
  font-weight: 600;
  color: #474747;
  padding: 0 48px 0 48px;
  width: 100%;
  text-align: center;
`;

const STYLES_PARAGRAPH = css`
  color: #474747;
  font-size: 14px;
  margin-top: 8px;
  padding: 0 48px 0 48px;
  width: 100%;
  text-align: center;
  width: 268px;
`;

export class UserSection extends React.Component {
  render() {
    return (
      <div className={STYLES_USER_SECTION}>
        <div className={STYLES_USER_SECTION_LEFT}>
          <span
            className={STYLES_CHAT_ICON}
            onClick={() =>
              this.props.onChatSelect(this.props.isActivityHidden ? { id: '3' } : null)
            }
            style={{ backgroundImage: `url(/static/assets/jim.jpg)` }}
          />
        </div>
        {!this.props.isActivityHidden ? (
          <div className={STYLES_USER_SECTION_RIGHT}>
            <div className={STYLES_TITLE}>No activity, yet</div>
            <div className={STYLES_PARAGRAPH}>
              As you engage with other players, your activity will appear here.
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
