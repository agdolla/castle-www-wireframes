import * as React from 'react';

import { css } from 'react-emotion';

const STYLES_EMPTY = css`
  font-size: 12px;
  font-weight: 400;
  height: 56px;
  color: #fff;
  padding: 0 16px 0 16px;
  display: flex;
  align-items: center;
`;

const STYLES_CONTAINER = css`
  overflow-y: scroll;
  width: 100%;
  display: block;
  max-width: 280px;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_ACTIVITY_ITEM = css`
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px 16px 8px 16px;

  :last-child {
    padding: 8px 16px 16px 16px;
  }
`;

const STYLES_ACTIVITY_ITEM_LEFT = css`
  flex-shrink: 0;
`;

const STYLES_ACTIVITY_ITEM_RIGHT = css`
  min-width: 10%;
  width: 100%;
  padding-left: 8px;
  padding-top: 2px;
  font-size: 12px;
  flex-wrap: wrap;
`;

const STYLES_AVATAR = css`
  background-size: cover;
  display: inline-flex;
  background-position: 50% 50%;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  flex-shrink: 0;
`;

const STYLES_CTA = css`
  color: magenta;
  cursor: pointer;
`;

export default class ActivityUpdates extends React.Component {
  static defaultProps = {
    activity: []
  };

  _container;

  scroll = () => {
    const isBottom =
      this._container.scrollHeight - this._container.scrollTop - 58 <=
      this._container.clientHeight;

    if (isBottom) {
      this._container.scrollTop = this._container.scrollHeight;
    }
  };

  getRef = () => {
    return this._container;
  };

  componentDidMount() {
    if (!this._container) {
      return;
    }

    this.scroll();
  }

  _generateMessage = ({ type, user }) => {
    if (type === 'PLAY') {
      return (
        <span>
          <strong className={STYLES_CTA}>{user.name}</strong>
          {` has played your game `}
          <strong className={STYLES_CTA}>Sekiro: Shadows Die Twice</strong>
        </span>
      );
    }

    if (type === 'MESSAGE') {
      return (
        <span>
          <strong className={STYLES_CTA}>{user.name}</strong>
          {` has sent you a private message`}
        </span>
      );
    }

    if (type === 'MENTION') {
      return (
        <span>
          <strong className={STYLES_CTA}>{user.name}</strong>
          {` has mentioned you in `}
          <strong className={STYLES_CTA}>General Chat</strong>
        </span>
      );
    }

    return;
  };

  render() {
    let children = (
      <div className={STYLES_EMPTY}>
        Start&nbsp;
        <strong className={STYLES_CTA}>making games</strong>!
      </div>
    );

    if (this.props.activity.length) {
      children = this.props.activity.map(a => {
        return (
          <div className={STYLES_ACTIVITY_ITEM}>
            <span className={STYLES_ACTIVITY_ITEM_LEFT}>
              <span
                className={STYLES_AVATAR}
                style={{ backgroundImage: `url(${a.user.profilePhoto})` }}
              />
            </span>
            <span className={STYLES_ACTIVITY_ITEM_RIGHT}>
              {this._generateMessage(a)}
            </span>
          </div>
        );
      });
    }

    return (
      <div
        className={STYLES_CONTAINER}
        style={{ height: this.props.activity.length ? 168 : null }}
        ref={c => {
          this._container = c;
        }}>
        {children}
      </div>
    );
  }
}
