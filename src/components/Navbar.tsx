import { Container } from './utils';
import styles from '@styles/components/Navbar.module.scss';
import { LinkIcon } from '@components/assets';
function NavLeftListItem({
  title,
  href,
  onClick = () => {
    return;
  },
}: {
  title: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <div>
      <div className={styles.title} onClick={onClick}>
        {title}
      </div>
      {href && (
        <div className={styles.icon}>
          <LinkIcon />
        </div>
      )}
    </div>
  );
}
export function Navbar() {
  return (
    <Container backgroundColor={`#111111`}>
      <nav className={styles.navbar}>
        {/* TODO?: using li list */}
        <div className={styles.left}>
          <div className={styles.title}>ITCHAT</div>
          <div className={styles.divider} />
          <div className={styles.list}>
            <NavLeftListItem title="SUPPORT" href="/" />
            <NavLeftListItem title="GITHUB" href="/" />
          </div>
        </div>
        <div className={styles.right}>
          <button>JOIN</button>
        </div>
      </nav>
    </Container>
  );
}
