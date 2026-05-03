import styles from "../route-placeholder.module.css";

export default function ComparePage() {
  return (
    <main className={`container ${styles.page}`}>
      <h1 className={styles.title}>비교</h1>
      <p className={styles.description}>
        여러 제품을 같은 기준으로 나란히 보는 기능은 다음 단계에서 추가할
        예정입니다. 현재는 기준 선택과 제품 매칭 흐름을 먼저 검증하고
        있습니다.
      </p>
    </main>
  );
}
