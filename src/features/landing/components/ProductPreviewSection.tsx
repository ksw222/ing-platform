"use client";

import {
  useLandingCriteria,
  useSelectedLandingCriteria,
} from "./LandingCriteriaProvider";
import { LandingProductCard } from "./LandingProductCard";
import styles from "../styles/landing.module.css";

export function ProductPreviewSection() {
  const { filteredProducts } = useLandingCriteria();
  const selectedItems = useSelectedLandingCriteria();
  const visibleProducts = filteredProducts.slice(0, 8);

  return (
    <section className={`${styles.pageSection} ${styles.productSection}`}>
      <div className="container">
        <div className={styles.productSectionHeader}>
          <div className={styles.productHeader}>
            <span className={styles.sectionEyebrow}>제품 미리보기</span>
            <h2 className={styles.sectionTitle}>기준에 맞춰 먼저 보이는 제품</h2>
            <p className={styles.sectionBody}>
              제품을 좋다거나 나쁘다고 판단하지 않고, 지금 고른 기준에 맞춰
              먼저 정리한 화면입니다.
            </p>
          </div>

          <div className={styles.productSummary}>
            <p className={styles.productCount}>
              예시 제품 {visibleProducts.length}개 표시
            </p>
            <p className={styles.productSummaryText}>
              {selectedItems.length > 0
                ? `선택 기준: ${selectedItems.map((item) => item.label).join(" · ")}`
                : "현재는 전체 예시 제품을 보고 있습니다."}
            </p>
          </div>
        </div>

        <div className={styles.productGrid}>
          {visibleProducts.map((product) => (
            <LandingProductCard key={product.id} product={product} />
          ))}
        </div>

        <p className={styles.productNote}>
          현재 제품 정보는 랜딩 시연용 예시이며, 실제 데이터 연동 전 MVP
          화면입니다.
        </p>
      </div>
    </section>
  );
}
