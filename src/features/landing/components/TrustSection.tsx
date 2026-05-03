import { trustItems } from "../data/landing-copy";
import styles from "../styles/landing.module.css";

export function TrustSection() {
  return (
    <section className={`${styles.pageSection} ${styles.trustSection}`}>
      <div className="container">
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>신뢰 가이드</span>
          <h2 className={styles.sectionTitle}>
            과장하지 않고도
            <br />
            신뢰를 만들 수 있어야 합니다.
          </h2>
          <p className={styles.sectionDescription}>
            ING는 안전성 판정 서비스가 아니라, 전성분 정보와 사용자 기준을
            바탕으로 선택을 돕는 MVP입니다.
          </p>
        </div>

        <div className={styles.trustGrid}>
          {trustItems.map((item) => (
            <article key={item.title} className={styles.trustCard}>
              <h3 className={styles.trustCardTitle}>{item.title}</h3>
              <p className={styles.trustCardBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
