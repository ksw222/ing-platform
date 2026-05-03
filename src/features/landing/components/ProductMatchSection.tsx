"use client";

import {
  useLandingCriteria,
  useSelectedLandingCriteria,
} from "./LandingCriteriaProvider";
import { LandingProductCard } from "./LandingProductCard";
import styles from "../styles/landing.module.css";

export function ProductMatchSection() {
  const { filteredProducts } = useLandingCriteria();
  const selectedCriteria = useSelectedLandingCriteria();
  const visibleProducts = filteredProducts.slice(0, 8);

  return (
    <section className={`${styles.pageSection} ${styles.productSection}`}>
      <div className="container">
        <div className={styles.productSectionHeader}>
          <div className={styles.sectionIntro}>
            <span className={styles.sectionEyebrow}>제품 매칭 예시</span>
            <h2 className={styles.sectionTitle}>
              내 기준에 따라 먼저 보이는
              <br />
              제품 리스트의 느낌을 보여드립니다.
            </h2>
            <p className={styles.sectionDescription}>
              지금은 랜딩 시연용 예시 데이터이지만, 기준을 고르면 어떤 제품이
              먼저 남는지와 이유가 함께 보이도록 설계했습니다.
            </p>
          </div>
          <div className={styles.filterBar}>
            <div className={styles.criteriaPillRow}>
              {selectedCriteria.length > 0 ? (
                selectedCriteria.map((criterion) => (
                  <span key={criterion.id} className={styles.criteriaPill}>
                    {criterion.label}
                  </span>
                ))
              ) : (
                <span className={styles.criteriaPill}>전체 예시 제품 보기</span>
              )}
            </div>
            <p className={styles.filterMeta}>
              예시 제품 {visibleProducts.length}개 표시 · 랜딩 시연용 예시
            </p>
          </div>
        </div>

        <div className={styles.productGrid}>
          {visibleProducts.map((product) => (
            <LandingProductCard key={product.id} product={product} />
          ))}
        </div>

        <p className={styles.noteLine}>
          매칭 점수는 사용자가 선택한 기준에 대한 참고 결과이며, 제품 안전성이나
          효능을 보장하지 않습니다.
        </p>
      </div>
    </section>
  );
}
