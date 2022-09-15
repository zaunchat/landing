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
          <div className={styles.title}>REPOSOTORIES</div>
          <div className={styles.items}>
            <div>API</div>
            <div>CLIENT</div>
            <div>LANDING</div>
            <div>+19 MORE</div>
          </div>
        </div>
        {/* TODO?: use li list */}
        <div className={styles.list}>
          <div className={styles.title}>PRODUCTS</div>
          <div className={styles.items}>
            <a href="#">APPLICATION</a>
            <a href="#">LOGIN</a>
            <a href="#">LANDING</a>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>FOLLOW US</div>
          <div className={styles.items}>
            <a href="#">TWITTER</a>
            <a href="#">TELEGRAM</a>
            <a href="#">DISCORD</a>
            <a href="https://github.com/itchatapp">GITHUB</a>
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>CONTACT US</div>
          <div className={styles.items}>
            <div>ITCHAT@SUPPORT.COM</div>
          </div>
        </div>
      </footer>
      <div className={styles.copy_right}>© 2022 All Rights Reserved</div>
    </Container>
  );
}
