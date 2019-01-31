import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { keyframes, css, Global } from '@emotion/core';

import STYLES_GLOBAL from '~/common/styles/global';

import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';

const ComponentPage = styled.div``;

const ComponentWireframeNotice = styled.marquee`
  font-size: 32px;
  color: red;
  position: fixed;
  font-weight: 400;
  bottom: 0;
  left: 0;
`;

const ComponentAvatar = styled.span`
  display: inline-flex;
  height: 112px;
  width: 112px;
  border-radius: 88px;
  background-size: cover;
  background-position: 50% 50%;
`;

export default class ProfilePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Global styles={STYLES_GLOBAL} />
        <Head>
          <title>@Castle - Profile</title>
        </Head>
        <Navigation />
        <ComponentPage>
          <ComponentWireframeNotice>
            CONCEPT & WIREFRAME FOR 1440PX+ WIDTH SCREENS. E-MAIL JIM@CASTLE.GAMES OR TWEET @WWWJIM
            THOUGHTS. THANKS :-)
          </ComponentWireframeNotice>
          <Footer />
        </ComponentPage>
      </React.Fragment>
    );
  }
}
