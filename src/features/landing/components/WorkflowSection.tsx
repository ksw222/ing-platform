import { workflowSteps } from "../data/landing-copy";
import styles from "../styles/landing.module.css";

export function WorkflowSection() {
  return (
    <section className={styles.pageSection}>
      <div className={`container ${styles.workflowGrid}`}>
        <div className={styles.workflowLead}>
          <span className={styles.sectionEyebrow}>작동 방식</span>
          <h2 className={styles.sectionTitle}>
            ING는 추천보다 먼저,
            <br />
            데이터를 정리합니다.
          </h2>
          <p className={styles.sectionDescription}>
            사용자의 신뢰를 얻기 위해 처리 방식을 숨기지 않습니다. 제품을
            좋다/나쁘다로 판단하기보다, 비교가 가능한 구조로 먼저 정리합니다.
          </p>
        </div>

        <div className={styles.workflowList}>
          {workflowSteps.map((step) => (
            <article key={step.number} className={styles.workflowCard}>
              <span className={styles.stepNumber}>{step.number}</span>
              <div>
                <h3 className={styles.workflowStepTitle}>{step.title}</h3>
                <p className={styles.workflowStepBody}>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
