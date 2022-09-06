import { Container } from '@components/utils';
import styles from '@styles/components/landing/Hero.module.scss';
export function Hero() {
  return (
    <Container backgroundColor={`transparent`}>
      <div className={styles.hero}>
        <div className={styles.label}>CHAT APPLICATION</div>
        <h1 className={styles.title}>
          MORE <span>FEATURES</span>, MORE FUN!
        </h1>
        <h2 className={styles.description}>
          Playing, Communicating, Meetings are all here in our application the
          main idea of it is to solve issues that other platforms can not
        </h2>
        <div className={styles.label}>
          IN OTHER WORDS: THE MOST <span>PERFECT/BALANCED</span> CHAT PLATFORM
          FOR ALL PEOPLE
        </div>
        <button>REGISTER</button>
      </div>
    </Container>
  );
}
