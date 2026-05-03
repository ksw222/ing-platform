import { painItems } from "../data/landing-copy";
import styles from "../styles/landing.module.css";

export function PainSection() {
  return (
    <section className={styles.pageSection}>
      <div className={`container ${styles.sectionSplit}`}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>왜 필요한가</span>
          <h2 className={styles.sectionTitle}>
            화장품을 고를 때마다
            <br />
            다시 열어보던 성분표의 피로감
          </h2>
          <p className={styles.sectionDescription}>
            ING는 추천보다 먼저, 제품을 볼 때마다 반복되는 확인 과정을 줄이는
            데서 출발합니다.
          </p>
        </div>

        <div className={styles.painGrid}>
          {painItems.map((item, index) => (
            <article key={item.title} className={styles.painCard}>
              <span className={styles.painIndex}>0{index + 1}</span>
              <h3 className={styles.painCardTitle}>{item.title}</h3>
              <p className={styles.painCardBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
