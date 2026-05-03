import Link from "next/link";
import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark}>in</span>
          <span>ING</span>
        </Link>

        <nav className={styles.menu} aria-label="주요 메뉴">
          <Link href="/market">제품 매칭</Link>
          <Link href="/compare">비교</Link>
          <Link href="/lab">성분 랩</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/#waitlist" className={styles.startButton}>
            베타 알림 받기
          </Link>
        </div>
      </div>
    </header>
  );
}
