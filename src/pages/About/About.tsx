import React from 'react';
import {MainWrapper, Layout} from './About.Styles.ts';
import {Header} from '../../components/organisms/Header/Header.tsx';
import {Ads} from '../../components/organisms/Ads/Ads.tsx';
import {MainContent} from '../../components/organisms/MainContent/MainContent.tsx';
import {RightScan} from '../../components/organisms/RightScan/RightScan.tsx';

export const About = () => (
    <Layout>
      <Header />
      <Ads />
      <MainWrapper>
        <MainContent />
        <RightScan />
      </MainWrapper>
    </Layout>
  );