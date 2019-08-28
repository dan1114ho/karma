import React from 'react';
import { Menu } from 'antd';
import { Page, PageContent, TopNav, SecondNav } from '@containers/Layout';
import { isMobile } from 'react-device-detect';
import { ArticlesList } from '@containers/articles';
import './Home.less';

export default function HomePage(props) {
  const mainClassName = 'home';
  const { history } = props;
  return (
    <Page>
      <TopNav history={history} />
      <SecondNav history={history}>
        <Menu.Item key="enter-a-bet">Enter a bet</Menu.Item>
      </SecondNav>
      <PageContent className="home">
        <div className={`${mainClassName}__articles`}>
          <ArticlesList title="Latest" />
        </div>
        {isMobile && <div className={`${mainClassName}__live-odds`}></div>}
      </PageContent>
    </Page>
  );
}
