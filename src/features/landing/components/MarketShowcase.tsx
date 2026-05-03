"use client";

import { useMemo, useState } from "react";
import {
  criteriaLabelMap,
  defaultLandingCriteria,
} from "../data/landing-copy";
import {
  getMatchedProducts,
  landingProducts,
  type LandingCriterionId,
} from "../data/landing-products";
import { CriteriaChipGroup } from "./CriteriaChipGroup";
import { LandingProductCard } from "./LandingProductCard";
import styles from "../styles/landing.module.css";

export function MarketShowcase() {
  const [selectedCriteria, setSelectedCriteria] =
    useState<LandingCriterionId[]>(defaultLandingCriteria);

  const filteredProducts = useMemo(
    () => getMatchedProducts(landingProducts, selectedCriteria),
    [selectedCriteria],
  );

  const selectedLabels = selectedCriteria.map(
    (criterion) => criteriaLabelMap[criterion],
  );

  function toggleCriterion(criterion: LandingCriterionId) {
    setSelectedCriteria((currentCriteria) =>
      currentCriteria.includes(criterion)
        ? currentCriteria.filter((item) => item !== criterion)
        : [...currentCriteria, criterion],
    );
  }

  return (
    <main className={styles.marketPage}>
      <section className={styles.pageSection}>
        <div className="container">
          <div className={styles.marketHeader}>
            <span className={styles.sectionEyebrow}>Market MVP</span>
            <h1 className={styles.sectionTitle}>내 기준에 맞는 제품 보기</h1>
            <p className={styles.sectionDescription}>
              랜딩에서 보던 예시 데이터를 조금 더 넓게 펼쳐본 MVP 화면입니다.
              기준을 바꾸면 어떤 제품이 먼저 남는지 바로 확인할 수 있습니다.
            </p>
          </div>

          <CriteriaChipGroup
            selectedCriteria={selectedCriteria}
            onToggle={toggleCriterion}
          />

          <div className={styles.filterBar}>
            <div className={styles.criteriaPillRow}>
              {selectedLabels.length > 0 ? (
                selectedLabels.map((label) => (
                  <span key={label} className={styles.criteriaPill}>
                    {label}
                  </span>
                ))
              ) : (
                <span className={styles.criteriaPill}>전체 예시 제품 보기</span>
              )}
            </div>
            <p className={styles.filterMeta}>
              예시 제품 {filteredProducts.length}개 표시
            </p>
          </div>

          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <LandingProductCard key={product.id} product={product} />
            ))}
          </div>

          <p className={styles.noteLine}>
            매칭 점수는 선택한 기준에 대한 참고 결과입니다. 제품 안전성이나
            효능을 보장하지 않으며, 현재 화면은 예시 제품 기반 MVP 데모입니다.
          </p>
        </div>
      </section>
    </main>
  );
}
