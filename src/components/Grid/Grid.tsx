import React, { ReactNode } from 'react';
import styles from './Grid.module.scss';
import cn from 'classnames';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type PropTypes = {
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  cols?: Cols;
};

const Grid = ({ children, container, item, cols }: PropTypes): JSX.Element => {
  const classNames = cn({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
    [styles[`Grid_cols_${cols}`]]: cols,
  });
  return <div className={classNames}>{children}</div>;
};

export default Grid;
