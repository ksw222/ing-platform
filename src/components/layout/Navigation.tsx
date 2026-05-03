import Link from "next/link";
import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <header className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="ING 홈">
          <span className={styles.brandText}>ING</span>
        </Link>

        <nav className={styles.menu} aria-label="주요 메뉴">
          <Link href="/market">제품 매칭</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/#waitlist" className={styles.startButton}>
            <span className={styles.ctaDesktop}>베타 알림 받기</span>
            <span className={styles.ctaMobile}>베타 알림</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
