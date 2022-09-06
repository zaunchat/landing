import { Container } from './utils';
import styles from '@styles/components/Navbar.module.scss';
import { LinkIcon } from '@components/assets';
import { LegacyRef, useEffect, useRef } from 'react';
function NavLeftListItem({
  title,
  href,
  newWindow = false,
  onClick = () => {
    return;
  },
}: {
  title: string;
  href?: string;
  onClick?: () => void;
  newWindow?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>();
  useEffect(() => {
    if (ref.current) {
      if (href) {
        if (newWindow) {
          ref.current.onclick = () => window.open(href);
          return;
        }
        ref.current.href = href;
        return;
      }
      ref.current.onclick = onClick;
    }
  }, []);

  return (
    <a ref={ref as LegacyRef<HTMLAnchorElement>}>
      <span className={styles.title}>{title}</span>
      {href && (
        <span className={styles.icon}>
          <LinkIcon />
        </span>
      )}
    </a>
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
            <NavLeftListItem
              title="SUPPORT"
              href="https://github.com/itchatapp"
              newWindow
            />
            <NavLeftListItem
              title="GITHUB"
              href="https://github.com/itchatapp"
              newWindow
            />
          </div>
        </div>
        <div className={styles.right}>
          <button onClick={() => (window.location.href = `#register`)}>
            JOIN
          </button>
        </div>
      </nav>
    </Container>
  );
}
