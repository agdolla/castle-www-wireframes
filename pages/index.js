import Head from 'next/head';

import * as React from 'react';
import * as SVG from '~/common/svg';
import * as Strings from '~/common/strings';
import * as Fixtures from '~/common/fixtures';

import { css, styled } from 'react-emotion';

import ActivityUpdates from '~/components/ActivityUpdates';
import ChatSessionComponent from '~/components/ChatSessionComponent';
import SideSectionEntity from '~/components/SideSectionEntity';

import PopoverChat from '~/components/PopoverChat';
import PopoverSettings from '~/components/PopoverSettings';
import PopoverSearchResults from '~/components/PopoverSearchResults';

import Layout from '~/components/Layout';
import { LeftChatBubble, RightChatBubble } from '~/components/ChatBubble';
import { SearchInput, ChatInput } from '~/components/Inputs';
import { ChatColumn, UserSection } from '~/components/ChatColumn';

import SideSectionLayout from '~/components/SideSectionLayout';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const STYLES_ICON_BUTTON = css`
  width: 48px;
  height: 56px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #f3f3f3;
  transition: 200ms ease color;
  cursor: pointer;
  box-shadow: inset 1px 0 0 #3d3d3d;

  :hover {
    color: rgb(255, 0, 235);
  }
`;

const IconButton = props => {
  return (
    <span
      className={STYLES_ICON_BUTTON}
      onClick={props.onClick}
      style={{ ...props.style, color: props.isActive ? 'magenta' : null }}>
      {props.svg}
    </span>
  );
};

const STYLES_HEADER_BAR_TEXT = css`
  min-height: 48px;
  width: 100%;
  min-width: 25%;
  padding: 8px 16px 8px 16px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const HeaderBarText = props => {
  return <span className={STYLES_HEADER_BAR_TEXT}>{props.children}</span>;
};

const STYLES_HEADER = css`
  min-height: 56px;
  flex-shrink: 0;
  width: 100%;
  box-shadow: inset 0 -1px 0 #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderBar = props => {
  return <header className={STYLES_HEADER}>{props.children}</header>;
};

const STYLES_ACTIONS = css`
  min-height: 48px;
  width: 100%;
  flex-shrink: 0;
  box-shadow: inset 0 1px 0 #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ActionsBar = props => {
  return <div className={STYLES_ACTIONS}>{props.children}</div>;
};

const STYLES_NAV = css`
  height: 32px;
  background: #020202;
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px 0 8px;
`;

const STYLES_CASTLE = css`
  height: 20px;
  width: 20px;
  border-radius: 4px;
  background-image: url('/static/assets/black-castle.png');
  background-size: cover;
  background-position: 50% 50%;
  margin: 0 6px 0 6px;
  display: inline-flex;
  cursor: pointer;
`;

const ACTIVITY_TYPES = ['MENTION', 'PLAY'];

export default class IndexPage extends React.Component {
  _chatWindow;
  _activityWindow;

  state = {
    selectedChatId: '4',
    popover: null,
    search: '',
    searchResults: [],
    activity: [],
    activityCount: 0,
    announcements: [...Fixtures.chats.castle],
    chats: [...Fixtures.chats.normal]
  };

  componentDidMount() {
    const addActivity = () => {
      window.setTimeout(() => {
        const type = ACTIVITY_TYPES[getRandomInt(0, 1)];
        const user =
          Fixtures.usersList[getRandomInt(0, Fixtures.usersList.length - 1)];
        const activity = [...this.state.activity];
        activity.push({
          date: new Date(),
          type,
          user
        });

        this.setState({
          activity,
          activityCount: !this.state.selectedChatId
            ? this.state.activityCount + 1
            : 0
        });

        if (type === 'MENTION') {
          this._handleChatFromUser({
            text: (
              <span>
                Hey are you there{' '}
                <strong style={{ color: '#00CED1' }}>@jim</strong>
              </span>
            ),
            user
          });
        }

        if (this._activityWindow) {
          this._activityWindow.scroll();
        }

        addActivity();
      }, 2300);
    };

    addActivity();
  }

  _handleSelectChat = entity => {
    if (!entity) {
      return this.setState({
        selectedChatId: null,
        popover: null,
        activityCount: 0
      });
    }

    if (this.state.selectedChatId === entity.id) {
      return this.setState({
        selectedChatId: null,
        popover: null,
        activityCount: 0
      });
    }

    this.setState({ selectedChatId: entity.id, popover: null }, () => {
      if (!this._chatWindow) {
        return;
      }

      this._chatWindow.scroll();
    });
  };

  _handleUserClick = user => {
    let found;

    found = this.state.chats.find(u => {
      return u.user && u.user.id === user.id;
    });

    if (found) {
      return this.setState({
        selectedChatId: found.id,
        search: '',
        searchResults: []
      });
    }

    const chats = [...this.state.chats];
    const chatId = `chat-${new Date().getTime()}`;
    chats.push({
      id: chatId,
      unread: 0,
      createdAt: '2018-08-13 01:16:21.077+00',
      user: user,
      messages: []
    });

    this.setState({
      search: '',
      searchResults: [],
      chats,
      selectedChatId: chatId
    });
  };

  _handleSearchChange = e => {
    const searchResults = [];
    Fixtures.usersList.forEach(u => {
      if (
        u.username.includes(e.target.value) ||
        u.name.includes(e.target.value)
      ) {
        searchResults.push(u);
      }
    });

    this.setState({ search: e.target.value, popover: null, searchResults });
  };

  _handleSelectPopover = type => {
    if (type === this.state.popover) {
      this.setState({ popover: null });
      return;
    }

    this.setState({ popover: type, search: '', searchResults: [] });
  };

  _handleChatFromUser = ({ text, user }) => {
    const message = {
      id: `message-${new Date().getTime()}`,
      text,
      user,
      createdAt: Strings.createDate()
    };

    const selectedChat = [
      ...this.state.announcements,
      ...this.state.chats
    ].find(c => c.id === '3');

    if (!selectedChat) {
      return;
    }

    const messages = [...selectedChat.messages];
    messages.push(message);

    const updatedSelectedChat = {
      ...selectedChat,
      messages,
      unread: selectedChat.unread + 1
    };
    const chats = [...this.state.chats];

    for (let i = 0; i < chats.length; i++) {
      if (chats[i].id === updatedSelectedChat.id) {
        chats[i] = updatedSelectedChat;
        break;
      }
    }

    this.setState({ chats }, () => {});
  };

  _handleSubmit = text => {
    if (Strings.isEmpty(text)) {
      return;
    }

    const message = {
      id: `message-${new Date().getTime()}`,
      text,
      createdAt: Strings.createDate(),
      user: Fixtures.users.viewer
    };

    const selectedChat = [
      ...this.state.announcements,
      ...this.state.chats
    ].find(c => c.id === this.state.selectedChatId);

    if (!selectedChat) {
      return;
    }

    const messages = [...selectedChat.messages];
    messages.push(message);

    const updatedSelectedChat = { ...selectedChat, messages };
    const chats = [...this.state.chats];

    for (let i = 0; i < chats.length; i++) {
      if (chats[i].id === updatedSelectedChat.id) {
        chats[i] = updatedSelectedChat;
        break;
      }
    }

    this.setState({ chats }, () => {
      if (!this._chatWindow) {
        return;
      }

      this._chatWindow.scroll();
    });
  };

  render() {
    const selectedChat = [
      ...this.state.announcements,
      ...this.state.chats
    ].find(c => c.id === this.state.selectedChatId);

    const topElement = (
      <UserSection
        onChatSelect={this._handleSelectChat}
        activityCount={this.state.activityCount}>
        {selectedChat ? (
          <React.Fragment>
            <HeaderBar>
              <HeaderBarText>
                <ChatSessionComponent
                  top={`Your activity`}
                  style={{ color: '#fff' }}>
                  {!this.state.activity.length
                    ? `No updates`
                    : `${this.state.activity.length} new ${Strings.pluralize(
                        'update',
                        this.state.activity.length
                      )}`}
                </ChatSessionComponent>
              </HeaderBarText>
              <IconButton svg={<SVG.Home height="20px" />} />
            </HeaderBar>

            <ActivityUpdates
              ref={c => {
                this._activityWindow = c;
              }}
              activity={this.state.activity}
              activityCount={this.state.activityCount}
            />
          </React.Fragment>
        ) : null}
      </UserSection>
    );

    const leftElement = (
      <SideSectionLayout>
        <ChatColumn
          selectedChatId={this.state.selectedChatId}
          chats={this.state.chats}
          onChatSelect={this._handleSelectChat}
        />
      </SideSectionLayout>
    );

    const middleElement = this.state.selectedChatId ? (
      <SideSectionLayout
        ref={c => {
          this._chatWindow = c;
        }}
        autoScroll
        header={
          <HeaderBar>
            <HeaderBarText>
              <ChatSessionComponent
                top={
                  selectedChat.group
                    ? selectedChat.group.name
                    : selectedChat.messages && selectedChat.messages.length
                    ? selectedChat.messages[selectedChat.messages.length - 1]
                        .user.name
                    : selectedChat.user.name
                }>
                {Strings.getTimeSinceToday(
                  selectedChat.group
                    ? selectedChat.group.createdAt
                    : selectedChat.messages && selectedChat.messages.length
                    ? selectedChat.messages[selectedChat.messages.length - 1]
                        .createdAt
                    : selectedChat.createdAt
                )}
              </ChatSessionComponent>
            </HeaderBarText>
            <IconButton svg={<SVG.Settings size="20px" />} />
          </HeaderBar>
        }
        bottom={
          !selectedChat.isReadOnly ? (
            <ActionsBar>
              <ChatInput onSubmit={this._handleSubmit} />
              <IconButton svg={<SVG.Smile size="20px" />} />
            </ActionsBar>
          ) : null
        }>
        <div style={{ padding: `0px 16px 16px 16px` }}>
          {selectedChat.messages.map(c => {
            if (c.user.id === Fixtures.users.viewer.id) {
              return (
                <RightChatBubble
                  key={c.id}
                  src={c.user.profilePhoto}
                  name={c.user.name}>
                  {c.text}
                </RightChatBubble>
              );
            }

            return (
              <LeftChatBubble
                key={c.id}
                src={c.user.profilePhoto}
                name={c.user.name}>
                {c.text}
              </LeftChatBubble>
            );
          })}
        </div>
      </SideSectionLayout>
    ) : null;

    return (
      <React.Fragment>
        <Layout top={topElement} left={leftElement} middle={middleElement} />
      </React.Fragment>
    );
  }
}
