import * as React from 'react';
import * as Strings from '~/common/strings';
import * as SVG from '~/common/svg';

import { css } from 'react-emotion';

const STYLES_NAVIGATION_LINK = css`
  flex-shrink: 0;
  display: inline-flex;
  user-select: none;
  font-family: 'mono-font';
  text-transform: uppercase;
  font-size: 11px;
  line-height: 10px;
  letter-spacing: 0.1px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  transition: 200ms ease;

  :hover {
    color: magenta;
  }
`;

const UINavigationLink = props => {
  return (
    <span className={STYLES_NAVIGATION_LINK} style={props.style}>
      {props.children}
    </span>
  );
};

const STYLES_GAME_STRIP = css`
  height: 32px;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const STYLES_GAME_STRIP_LEFT = css`
  font-family: 'mono-font';
  min-width: 25%;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 11px;
  line-height: 10px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  white-space: nowrap;
`;

const STYLES_GAME_STRIP_RIGHT = css`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
`;

const STYLES_CONTAINER = css`
  background: #121212;
  width: 100%;
`;

const STYLES_EMPHASIS_CHOICE = css`
  font-family: 'mono-font';
  background: #232323;
  flex-shrink: 0;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default class NowPlayingBar extends React.Component {
  render() {
    const { game } = this.props;

    return (
      <div className={STYLES_CONTAINER}>
        <span className={STYLES_GAME_STRIP}>
          <span className={STYLES_GAME_STRIP_LEFT}>
            <span className={STYLES_EMPHASIS_CHOICE} style={{ backgroundColor: `#070707` }}>
              <UINavigationLink
                style={{
                  padding: '0 24px 0 24px',
                  height: 32,
                  display: 'inline-flex',
                  alignItems: 'center',
                }}>
                Develop
              </UINavigationLink>
            </span>
            <SVG.Pause height="16px" style={{ marginLeft: 8, paddingBottom: 2 }} />
            <SVG.Mute height="16px" style={{ marginLeft: 8, paddingBottom: 2 }} />
          </span>
          <span className={STYLES_GAME_STRIP_RIGHT}>
            <UINavigationLink
              style={{
                paddingRight: 24,
                height: 32,
                display: 'inline-flex',
                alignItems: 'center',
              }}>
              View Source
            </UINavigationLink>

            <UINavigationLink
              style={{
                paddingRight: 24,
                height: 32,
                display: 'inline-flex',
                alignItems: 'center',
              }}>
              Theater (ESC)
            </UINavigationLink>

            <span className={STYLES_EMPHASIS_CHOICE}>
              <UINavigationLink
                style={{
                  padding: '0 24px 0 24px',
                  height: 32,
                  display: 'inline-flex',
                  alignItems: 'center',
                }}>
                Quit
              </UINavigationLink>
            </span>
          </span>
        </span>
      </div>
    );
  }
}
