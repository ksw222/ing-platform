import styles from "../route-placeholder.module.css";

export default function LabPage() {
  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>성분 랩</h1>
      <p className={styles.description}>
        성분 기준과 매칭 로직을 설명하는 페이지입니다.
      </p>
    </main>
  );
}
