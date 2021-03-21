import React, { ReactNode } from 'react';
import styles from './Grid.module.scss';
import cn from 'classnames';

type PropTypes = {
  children: ReactNode;
  container?: boolean;
  item?: boolean;
};

const Grid = ({ children, container, item }: PropTypes): JSX.Element => {
  const classNames = cn({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
  });
  return <div className={classNames}>{children}</div>;
};

export default Grid;
