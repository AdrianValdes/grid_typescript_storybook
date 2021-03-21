import cn from 'classnames';
import React from 'react';
import styles from './GridRuler.module.scss';

type Spacing = 'sm' | 'md' | 'lg';

type PropTypes = {
  spacing?: Spacing;
};

const GridRuler = ({ spacing }: PropTypes) => {
  const classNames = cn(styles.GridRuler, {
    [styles[`GridRuler_spacing_${spacing}`]]: spacing,
  });
  return (
    <div className={classNames}>
      {Array(12)
        .fill(undefined)
        .map((num) => (
          <div className={styles.GridRuler_item} key={num} />
        ))}
    </div>
  );
};

export default GridRuler;
