import styles from '@styles/components/utils/Container.module.scss';
export function Container({ children }: { children: any }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
