import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className={styles.kicker}>성분 기준 제품 매칭 서비스</span>
            <h1 className={styles.title}>
              들어오자마자,
              <br />
              내 기준에 맞는 제품부터.
            </h1>
            <p className={styles.description}>
              ING는 제품을 좋다/나쁘다로 판정하지 않습니다. 전성분 데이터를
              정리하고, 사용자가 정한 회피 기준에 맞는 제품을 먼저 보여줍니다.
            </p>
            <div className={styles.actions}>
              <Link href="/market" className={styles.primaryButton}>
                내 기준으로 제품 보기
              </Link>
              <Link href="/lab" className={styles.secondaryButton}>
                작동 방식 확인
              </Link>
            </div>
          </div>

          <div className={styles.previewCard}>
            <p className={styles.previewLabel}>MATCH PREVIEW</p>
            <h2>향료·에탄올 제외 기준</h2>
            <div className={styles.productList}>
              <div className={styles.productCard}>
                <strong>ROUND LAB 수분 크림</strong>
                <span>92% 매칭</span>
                <p>향료 제외 · 에탄올 제외 기준 충족</p>
              </div>
              <div className={styles.productCard}>
                <strong>TORRIDEN 세럼</strong>
                <span>89% 매칭</span>
                <p>에탄올 제외 기준 충족</p>
              </div>
              <div className={styles.productCard}>
                <strong>ANUA 토너</strong>
                <span>86% 매칭</span>
                <p>민감 기준 참고</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
