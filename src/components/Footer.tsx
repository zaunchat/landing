import { Container } from './utils';
import styles from '@styles/components/Footer.module.scss';
import {
  GooglePlayDownloadIcon,
  AppleStoreDownloadIcon,
  MicosoftStoreIcon,
} from '@components/assets/downloads';
export function Footer() {
  return (
    <Container backgroundColor={`#111111`}>
      <footer className={styles.footer}>
        <div className={styles.downloads}>
          <GooglePlayDownloadIcon />
          <AppleStoreDownloadIcon />
          <MicosoftStoreIcon />
        </div>
        <div className={styles.list}>
          <div className={styles.title}>Repositories</div>
          <ul className={styles.items}>
            <li><a href="#">API</a></li>
            <li><a href="#">Client</a></li>
            <li><a href="#">Landing</a></li>
          </ul>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>Products</div>
          <ul className={styles.items}>
            <li><a href="#">Application</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Landing</a></li>
          </ul>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>Follow Us</div>
          <ul className={styles.items}>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Telegram</a></li>
            <li><a href="#">Discord</a></li>
            <li><a href="https://github.com/itchatapp">Github</a></li>
          </ul>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>Contact Us</div>
          <ul className={styles.items}>
            <li><a href="mailto:itchat@support.com">itchat@support.com</a></li>
          </ul>
        </div>
      </footer>
      <div className={styles.copy_right}>© 2022 All Rights Reserved</div>
    </Container>
  );
}
