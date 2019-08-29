import * as React from 'react';
import { css, styled } from 'react-emotion';

import NowPlayingBar from '~/components/NowPlayingBar';

const STYLES_LAYOUT_LEFT = css`
  width: 64px;
  flex-shrink: 0;
  background: #333333;
  color: #ffffff;
  height: 100%;
  box-shadow: inset -1px 0 0 #3d3d3d;
`;

const STYLES_LAYOUT_MIDDLE = css`
  width: 280px;
  flex-shrink: 0;
  background: #282828;
  color: #ffffff;
  height: 100%;
  box-shadow: inset -1px 0 0 #3d3d3d;
`;

const STYLES_LAYOUT_BOTTOM = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 10%;
  height: 100%;
  width: 100%;
`;

const STYLES_LAYOUT_TOP = css`
  flex-shrink: 0;
  width: 100%;
  border-bottom: 1px solid #3d3d3d;
`;

const STYLES_LAYOUT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: calc(100vh);
  width: 100%;
`;

const STYLES_SIDE = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`;

const STYLES_LAYOUT_RIGHT = css`
  min-width: 20%;
  width: 100%;
  height: calc(100vh);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const STYLES_LAYOUT_RIGHT_GAME = css`
  min-height: 10%;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url('/static/screenshot.gif');
`;

const STYLES_LAYOUT_RIGHT_BOTTOM = css`
  width: 100%;
  height: 24px;
  background: #000;
  flex-shrink: 0;
  padding: 0 24px 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default props => {
  return (
    <div className={STYLES_LAYOUT}>
      <div className={STYLES_SIDE}>
        {props.top ? <div className={STYLES_LAYOUT_TOP}>{props.top}</div> : null}
        <div className={STYLES_LAYOUT_BOTTOM}>
          {props.left ? <span className={STYLES_LAYOUT_LEFT}>{props.left}</span> : null}
          {props.middle ? <span className={STYLES_LAYOUT_MIDDLE}>{props.middle}</span> : null}
        </div>
      </div>
      <span className={STYLES_LAYOUT_RIGHT}>
        <div className={STYLES_LAYOUT_RIGHT_GAME}>{props.children}</div>
        <NowPlayingBar />
      </span>
    </div>
  );
};
