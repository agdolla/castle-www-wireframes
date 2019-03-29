import Head from 'next/head';

import * as React from 'react';

import { css, styled } from 'react-emotion';

// GROUP SLOT
// ---------------------------------------------------------

const GroupSlot = props => {
  return (
    <div>
      <div>Image</div>
      <div>
        <div>Disney Land</div>
        <div>Name</div>
      </div>
    </div>
  );
};

// LEFT CHAT BUBBLE
// ---------------------------------------------------------

const LeftChatBubble = props => {
  return (
    <div>
      <div>Name</div>
      <div>Name</div>
    </div>
  );
};

// RIGHT CHAT BUBBLE
// ---------------------------------------------------------

const RightChatBubble = props => {
  return (
    <div>
      <div>Name</div>
      <div>Name</div>
    </div>
  );
};

// ACTIONS BAR
// ---------------------------------------------------------

const STYLES_ACTIONS = css`
  height: 48px;
  background: green;
  width: 100%;
`;

const ActionsBar = props => {
  return <div className={STYLES_ACTIONS}>{props.children}</div>;
};

// HEADER BAR
// ---------------------------------------------------------

const STYLES_HEADER = css`
  height: 48px;
  background: red;
  width: 100%;
`;

const HeaderBar = props => {
  return <header className={STYLES_HEADER}>{props.children}</header>;
};

// SEARCH INPUT
// ---------------------------------------------------------

class SearchInput extends React.Component {
  state = {
    value: '',
  };

  _handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return <input value={this.state.value} onChange={this._handleChange} />;
  }
}

// CHAT INPUT
// ---------------------------------------------------------

class ChatInput extends React.Component {
  state = {
    value: '',
  };

  _handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return <input value={this.state.value} onChange={this._handleChange} />;
  }
}

// SIDE SECTION LAYOUT
// ---------------------------------------------------------

const STYLES_SIDE_SECTION_LAYOUT = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

const STYLES_SIDE_SECTION_LAYOUT_HEADER = css`
  width: 100%;
  flex-shrink: 0;
`;

const STYLES_SIDE_SECTION_LAYOUT_MIDDLE = css`
  min-height: 25%;
  height: 100%;
  width: 100%;
`;

const STYLES_SIDE_SECTION_LAYOUT_BOTTOM = css`
  flex-shrink: 0;
  width: 100%;
`;

class SideSectionLayout extends React.Component {
  render() {
    return (
      <div className={STYLES_SIDE_SECTION_LAYOUT}>
        {this.props.header ? (
          <div className={STYLES_SIDE_SECTION_LAYOUT_HEADER}>{this.props.header}</div>
        ) : null}
        <div className={STYLES_SIDE_SECTION_LAYOUT_MIDDLE}>{this.props.children}</div>
        {this.props.bottom ? (
          <div className={STYLES_SIDE_SECTION_LAYOUT_BOTTOM}>{this.props.bottom}</div>
        ) : null}
      </div>
    );
  }
}

// LAYOUT
// ---------------------------------------------------------

const STYLES_LAYOUT_LEFT = css`
  font-size: 64px;
  width: 320px;
  flex-shrink: 0;
  height: calc(100vh);
  box-shadow: inset -1px 0 0 #dcdcdc;
  background: #f3f3f3;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_LAYOUT_MIDDLE = css`
  width: 320px;
  flex-shrink: 0;
  background: #f3f3f3;
  box-shadow: inset -1px 0 0 #dcdcdc;
  height: calc(100vh);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_LAYOUT_RIGHT = css`
  min-width: 20%;
  width: 100%;
  background: blue;
  height: calc(100vh);
  overflow-y: scroll;
  background-size: cover;
  background-position: 50% 50%;
  background-image: url('/static/screenshot.gif');

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_LAYOUT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Layout = props => {
  return (
    <div className={STYLES_LAYOUT}>
      {props.left ? <span className={STYLES_LAYOUT_LEFT}>{props.left}</span> : null}
      {props.middle ? <span className={STYLES_LAYOUT_MIDDLE}>{props.middle}</span> : null}
      <span className={STYLES_LAYOUT_RIGHT}>{props.children}</span>
    </div>
  );
};

// PAGE COMPONENT
// ---------------------------------------------------------

export default class IndexPage extends React.Component {
  render() {
    const leftElement = <SideSectionLayout header={<ActionsBar>Actions</ActionsBar>} />;
    const middleElement = <SideSectionLayout header={<HeaderBar>Chat Header</HeaderBar>} />;

    return (
      <React.Fragment>
        <Head>
          <title>Castle Chat Prototype</title>
        </Head>
        <Layout left={leftElement} middle={middleElement} />
      </React.Fragment>
    );
  }
}
