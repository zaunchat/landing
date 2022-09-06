import styles from '@styles/components/utils/Container.module.scss';
import { CSSProperties } from 'react';
export function Container({
  children,
  backgroundColor,
  leftBorder = false,
  rightBorder = false,
}: {
  children: any;
  backgroundColor: CSSProperties['backgroundColor'];
  leftBorder?: boolean;
  rightBorder?: boolean;
}) {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>
        {leftBorder && <div className={styles.left_border} />}
        {children}
        {rightBorder && <div className={styles.right_border} />}
      </div>
    </div>
  );
}
