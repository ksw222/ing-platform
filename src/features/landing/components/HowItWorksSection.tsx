import { howItWorksSteps } from "../data/landing-criteria";
import styles from "../styles/landing.module.css";

export function HowItWorksSection() {
  return (
    <section className={styles.pageSection}>
      <div className="container">
        <div className={styles.howHeader}>
          <span className={styles.sectionEyebrow}>작동 방식</span>
          <h2 className={styles.sectionTitle}>
            ING는 추천보다 먼저, 기준을 정리합니다.
          </h2>
          <p className={styles.sectionBody}>
            제품을 좋다거나 나쁘다고 판단하지 않고, 사용자가 선택한 기준에 맞춰
            전성분 정보를 정리합니다.
          </p>
        </div>

        <div className={styles.howGrid}>
          {howItWorksSteps.map((step) => (
            <article key={step.number} className={styles.howCard}>
              <span className={styles.stepLabel}>{step.number}</span>
              <h3 className={styles.howTitle}>{step.title}</h3>
              <p className={styles.howBody}>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
