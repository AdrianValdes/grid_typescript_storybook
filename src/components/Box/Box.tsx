import React, { ReactNode } from 'react';
import styles from './Box.module.scss';

type AppProps = {
  children: ReactNode;
};

export const Box = ({ children }: AppProps): JSX.Element => {
  return <div className={styles.Box}>{children}</div>;
};
