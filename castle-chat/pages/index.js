import Head from 'next/head';
import TextareaAutosize from 'react-textarea-autosize';

import * as React from 'react';
import * as SVG from '~/common/svg';

import { css, styled } from 'react-emotion';

const STYLES_BUTTON = css`
  height: 48px;
  width: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #f3f3f3;
  cursor: pointer;
  flex-shrink: 0;
`;

const STYLES_HEADER_BAR_TEXT = css`
  min-height: 48px;
  width: 100%;
  min-width: 25%;
  padding: 8px 16px 8px 16px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  box-shadow: 1px 0 0 #3d3d3d;
`;

const IconButton = props => {
  return (
    <span className={STYLES_BUTTON} style={props.style}>
      {props.svg}
    </span>
  );
};

const HeaderBarText = props => {
  return <span className={STYLES_HEADER_BAR_TEXT}>{props.children}</span>;
};

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
  min-height: 48px;
  width: 100%;
  box-shadow: inset 0 1px 0 #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ActionsBar = props => {
  return <div className={STYLES_ACTIONS}>{props.children}</div>;
};

// HEADER BAR
// ---------------------------------------------------------

const STYLES_HEADER = css`
  min-height: 48px;
  width: 100%;
  box-shadow: inset 0 -1px 0 #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderBar = props => {
  return <header className={STYLES_HEADER}>{props.children}</header>;
};

const STYLES_INPUT = css`
  height: 100%;
  width: 100%;
  min-width: 25%;
  outline: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  color: #f3f3f3;
  padding: 15px 16px 15px 16px;
  resize: none;
  box-shadow: 1px 0 0 #3d3d3d;
  font-size: 14px;
  background: transparent;

  :focus {
    border: 0;
    outline: 0;
  }
`;

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
    return (
      <TextareaAutosize
        className={STYLES_INPUT}
        placeholder="Search users..."
        value={this.state.value}
        onChange={this._handleChange}
      />
    );
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
    return (
      <TextareaAutosize
        className={STYLES_INPUT}
        placeholder="Type a message..."
        value={this.state.value}
        onChange={this._handleChange}
      />
    );
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
      <div className={STYLES_SIDE_SECTION_LAYOUT} style={this.props.style}>
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
  width: 280px;
  flex-shrink: 0;
  background: #333333;
  color: #ffffff;
  height: calc(100vh);
  box-shadow: inset -1px 0 0 #3d3d3d;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_LAYOUT_MIDDLE = css`
  width: 280px;
  flex-shrink: 0;
  background: #282828;
  color: #ffffff;
  height: calc(100vh);
  box-shadow: inset -1px 0 0 #3d3d3d;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_LAYOUT_RIGHT = css`
  min-width: 20%;
  width: 100%;
  height: calc(100vh);
  background-size: cover;
  background-position: 50% 50%;
  background-image: url('/static/screenshot.gif');
  overflow-y: scroll;

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
    const leftElement = (
      <SideSectionLayout
        header={
          <HeaderBar>
            <SearchInput />
            <IconButton svg={<SVG.Membership size="20px" />} />
          </HeaderBar>
        }
      >
        <div>Groups, DMs, Annoucements</div>
      </SideSectionLayout>
    );
    const middleElement = (
      <SideSectionLayout
        header={
          <HeaderBar>
            <HeaderBarText>Jesse Ruder</HeaderBarText>{' '}
            <IconButton svg={<SVG.Settings size="20px" />} />
          </HeaderBar>
        }
        bottom={
          <ActionsBar>
            <ChatInput />
            <IconButton svg={<SVG.Smile size="20px" />} />
          </ActionsBar>
        }
      >
        <div>Conversation</div>
      </SideSectionLayout>
    );

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
