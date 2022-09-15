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
          <div className={styles.title}>Developers</div>
          <ul className={styles.items}>
            <li>
              <a href="https://docs.itchat.world/">API Docs</a>
            </li>
            <li>
              <a href="https://github.com/itchatapp/itchat.js">
                JavaScript Client
              </a>
            </li>
            <li>
              <a href="https://github.com/itchatapp/itchat.py">Python Client</a>
            </li>
          </ul>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>Products</div>
          <ul className={styles.items}>
            <li>
              <a href="https://app.itchat.world">Application</a>
            </li>
            <li>
              <a href="https://app.itchat.world/login">Login</a>
            </li>
          </ul>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>Follow Us</div>
          <ul className={styles.items}>
            <li>
              <a href="https://twitter.com/itchatapp">Twitter</a>
            </li>
            <li>
              <a href="https://reddit.com/r/itchatapp">Reddit</a>
            </li>
            <li>
              <a href="https://discord.gg/nNHH5apCwr">Discord</a>
            </li>
            <li>
              <a href="https://matrix.to/#/#itchatapp:matrix.org">Matrix</a>
            </li>
            <li>
              <a href="https://github.com/itchatapp">Github</a>
            </li>
          </ul>
        </div>
        <div className={styles.list}>
          <div className={styles.title}>Contact Us</div>
          <ul className={styles.items}>
            <li>
              <a href="mailto:itchat@support.com">itchat@support.com</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className={styles.copy_right}>© 2022 All Rights Reserved</div>
    </Container>
  );
}
