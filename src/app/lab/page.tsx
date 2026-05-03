import styles from "../route-placeholder.module.css";

export default function LabPage() {
  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>성분 랩</h1>
      <p className={styles.description}>
        성분명 정리 방식과 기준 처리 흐름은 이후 더 자세히 보여드릴 예정입니다.
        지금은 제품 매칭 MVP 화면과 고객 반응을 먼저 확인하고 있습니다.
      </p>
    </main>
  );
}
