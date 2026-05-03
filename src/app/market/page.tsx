import styles from "../route-placeholder.module.css";

export default function MarketPage() {
  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>제품 매칭</h1>
      <p className={styles.description}>
        내 기준에 맞는 제품을 탐색하는 페이지입니다.
      </p>
    </main>
  );
}
