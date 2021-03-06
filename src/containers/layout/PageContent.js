import React from 'react';
import cn from 'classnames';

function PageContent(props) {
  const { className, children } = props;

  return <div className={cn('page-content', className)}>{children}</div>;
}

export default PageContent;
