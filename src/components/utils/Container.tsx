import styles from '@styles/components/utils/Container.module.scss';
import { CSSProperties } from 'react';

interface Props {
  children: unknown;
  backgroundColor: CSSProperties['backgroundColor'];
  leftBorder?: boolean;
  rightBorder?: boolean;
}

export function Container({
  children,
  backgroundColor,
  leftBorder,
  rightBorder
}: Props) {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={[styles.container, leftBorder && styles.left_border, rightBorder && styles.right_border].filter(Boolean).join(' ')}>{children}</div>
    </div>
  );
}
