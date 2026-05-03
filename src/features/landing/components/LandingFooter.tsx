import Link from "next/link";
import styles from "../styles/landing.module.css";

export function LandingFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div>
          <p className={styles.footerBrand}>ING</p>
          <p className={styles.footerCaption}>성분 기준 제품 매칭 MVP</p>
        </div>

        <div className={styles.footerLinks}>
          <Link href="/compare">비교 준비 중</Link>
          <Link href="/lab">성분 랩 준비 중</Link>
        </div>
      </div>

      <div className="container">
        <p className={styles.footerDisclaimer}>
          본 서비스는 제품 안전성, 의학적 효능, 피부 적합성을 판정하지
          않습니다. 전성분 정보와 사용자가 설정한 기준을 바탕으로 선택을 돕는
          참고용 MVP입니다.
        </p>
      </div>
    </footer>
  );
}
