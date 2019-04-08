import * as React from 'react';

import { css, styled } from 'react-emotion';

import TextareaAutosize from 'react-textarea-autosize';

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

  ::-webkit-scrollbar {
    width: 0px;
  }

  :focus {
    border: 0;
    outline: 0;
  }
`;

export class SearchInput extends React.Component {
  render() {
    return (
      <input
        className={STYLES_INPUT}
        placeholder="Search users..."
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}

export class ChatInput extends React.Component {
  state = {
    value: '',
  };

  _handleChange = e => {
    this.setState({ value: e.target.value });
  };

  _handleSubmit = e => {
    if (e.which === 13) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onSubmit(this.state.value);
      this.setState({ value: '' });
      return false;
    }
  };

  render() {
    return (
      <TextareaAutosize
        autoFocus
        className={STYLES_INPUT}
        placeholder="Type a message..."
        value={this.state.value}
        onChange={this._handleChange}
        onKeyDown={this._handleSubmit}
      />
    );
  }
}
