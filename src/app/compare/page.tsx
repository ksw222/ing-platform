import styles from "../route-placeholder.module.css";

export default function ComparePage() {
  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>비교</h1>
      <p className={styles.description}>
        후보 제품을 기준별로 비교하는 페이지입니다.
      </p>
    </main>
  );
}
