import styles from '@styles/components/utils/Container.module.scss';
import { CSSProperties } from 'react';
export function Container({
  children,
  backgroundColor,
}: {
  children: any;
  backgroundColor: CSSProperties['backgroundColor'];
}) {
  return (
    <div className={styles.wrapper} style={{ backgroundColor }}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
