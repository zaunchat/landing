import { HeroSvgIcon } from '@components/assets';
import { Container } from '@components/utils';
import styles from '@styles/components/landing/Hero.module.scss';
export function Hero() {
  return (
    <Container leftBorder rightBorder backgroundColor={`transparent`}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.label}>CHAT APPLICATION</div>
          <h1 className={`${styles.title} ${styles._deth_dots}`}>
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
          <button
            className={styles._deth_dots}
            onClick={() => (window.location.href = `#register`)}
          >
            REGISTER
          </button>
        </div>
        <HeroSvgIcon />
      </div>
    </Container>
  );
}
