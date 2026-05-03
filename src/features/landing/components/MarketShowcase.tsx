"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  criteriaLabelMap,
  defaultLandingCriteria,
} from "../data/landing-criteria";
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
            <span className={styles.sectionEyebrow}>제품 매칭 MVP</span>
            <h1 className={styles.sectionTitle}>내 기준에 맞는 제품 보기</h1>
            <p className={styles.sectionBody}>
              아직 MVP 데모이며, 기준에 따라 제품을 정리하는 흐름을 보여줍니다.
            </p>
          </div>

          <CriteriaChipGroup
            selectedCriteria={selectedCriteria}
            onToggle={toggleCriterion}
          />

          <div className={styles.marketSummary}>
            <p className={styles.productCount}>
              예시 제품 {filteredProducts.length}개 표시
            </p>
            <p className={styles.productSummaryText}>
              {selectedLabels.length > 0
                ? `선택 기준: ${selectedLabels.join(" · ")}`
                : "현재는 전체 예시 제품을 보고 있습니다."}
            </p>
          </div>

          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <LandingProductCard key={product.id} product={product} />
            ))}
          </div>

          <p className={styles.productNote}>
            현재 제품 정보는 랜딩 시연용 예시이며, 제품 안전성이나 효능을
            보장하지 않습니다.
          </p>

          <div className={styles.marketCta}>
            <div>
              <h2 className={styles.marketCtaTitle}>
                매번 같은 성분표를 다시 보고 있다면,
                <br />
                기준부터 저장해보세요.
              </h2>
              <p className={styles.marketCtaBody}>
                아직 완성된 서비스는 아니지만, 어떤 기준이 먼저 필요한지부터
                모으고 있습니다.
              </p>
            </div>

            <div className={styles.marketActions}>
              <Link href="/#waitlist" className={styles.primaryAction}>
                내 기준 저장 알림 받기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
