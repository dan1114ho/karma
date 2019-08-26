import React from 'react';
import { Typography, Menu } from 'antd';
import { Page, PageContent, TopNav, SecondNav } from '@containers/Layout';
import './Home.less';

const { Title } = Typography;

export default function HomePage() {
  return (
    <Page>
      <TopNav />
      <SecondNav>
        <Menu mode="horizontal">
          <Menu.Item>Enter a bet</Menu.Item>
          <Menu.Item>af</Menu.Item>
        </Menu>
      </SecondNav>
      <PageContent className="home">
        <Title level={2}>Home</Title>
      </PageContent>
    </Page>
  );
}
