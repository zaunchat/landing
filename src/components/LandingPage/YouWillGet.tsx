import { Container } from '@components/utils';
import styles from '@styles/components/landing/YouWillGet.module.scss';
export function YouWillGet() {
  return (
    <Container leftBorder rightBorder backgroundColor={`#161616`}>
      <div className={styles.youWillGet}>
        <div className={styles.border}></div>
        <div className={styles.wrapper}>
          <div className={styles.title}>YOU WILL GET</div>
          <div className={styles.divider} />
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.title}>PRIVACY</div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.title}>CUSTOMIZABILITY</div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.title}>FREE!</div>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
