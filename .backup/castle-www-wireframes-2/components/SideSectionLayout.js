import * as React from 'react';

import { css, styled } from 'react-emotion';

const STYLES_SIDE_SECTION_LAYOUT = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const STYLES_SIDE_SECTION_LAYOUT_HEADER = css`
  width: 100%;
  flex-shrink: 0;
`;

const STYLES_SIDE_SECTION_LAYOUT_MIDDLE = css`
  min-height: 25%;
  height: 100%;
  width: 100%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_SIDE_SECTION_LAYOUT_BOTTOM = css`
  flex-shrink: 0;
  width: 100%;
`;

export default class SideSectionLayout extends React.Component {
  _scrollContainer;

  scroll = () => {
    this._scrollContainer.scrollTop = this._scrollContainer.scrollHeight;
  };

  getRef = () => {
    return this._scrollContainer;
  };

  componentDidMount() {
    if (!this._scrollContainer) {
      return;
    }

    if (!this.props.autoScroll) {
      return;
    }

    this.scroll();
  }

  render() {
    return (
      <div className={STYLES_SIDE_SECTION_LAYOUT} style={this.props.style}>
        {this.props.header ? (
          <div className={STYLES_SIDE_SECTION_LAYOUT_HEADER}>
            {this.props.header}
          </div>
        ) : null}
        <div
          className={STYLES_SIDE_SECTION_LAYOUT_MIDDLE}
          ref={c => {
            this._scrollContainer = c;
          }}>
          {this.props.children}
        </div>
        {this.props.bottom ? (
          <div className={STYLES_SIDE_SECTION_LAYOUT_BOTTOM}>
            {this.props.bottom}
          </div>
        ) : null}
      </div>
    );
  }
}
