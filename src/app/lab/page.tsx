import styles from "../route-placeholder.module.css";

export default function LabPage() {
  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>성분 랩</h1>
      <p className={styles.description}>
        성분명 정규화와 기준 처리 방식을 설명할 예정인 공간입니다. 현재
        MVP에서는 매칭 기준의 흐름과 예시 제품 경험을 먼저 보여줍니다.
      </p>
    </main>
  );
}
