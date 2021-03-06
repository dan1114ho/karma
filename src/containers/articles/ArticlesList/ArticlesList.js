import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cns from 'classnames';
import { Typography, Spin } from 'antd';
import chunk from 'lodash/chunk';
import ArticleActions, { ArticleSelectors } from '@redux/ArticleRedux';
import ArticleCard from '@components/ArticleCard';

import './ArticlesList.less';

const { Title } = Typography;

function ArticlesList(props) {
  const { loading, articles, loadArticles, className, title, columns } = props;

  useEffect(() => {
    loadArticles();
  }, []);

  if (loading) {
    return <Spin />;
  }

  const groups = chunk(articles, columns);
  const mainClassName = 'articles-list';

  return (
    <div className={cns(mainClassName, className)}>
      {title && (
        <div className={`${mainClassName}__header`}>
          <Title level={3}>{title}</Title>
        </div>
      )}

      {groups.map((group, index) => {
        return (
          <div
            key={`${mainClassName}__${index}`}
            className={`${mainClassName}__row`}
          >
            {group.map(article => {
              const { id } = article;
              return <ArticleCard key={id} article={article} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

ArticlesList.propTypes = {
  articles: PropTypes.array,
  loading: PropTypes.bool,
  loadArticles: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
  columns: PropTypes.number
};

ArticlesList.defaultProps = {
  columns: 2
};

const mapStatesToProps = state => ({
  loading: ArticleSelectors.selectLoading(state),
  articles: ArticleSelectors.selectArticles(state)
});

const mapDispatchToProps = dispatch => ({
  loadArticles: () => dispatch(ArticleActions.requestArticlesList())
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(ArticlesList);
