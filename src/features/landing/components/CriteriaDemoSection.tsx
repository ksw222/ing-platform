"use client";

import { landingCriteria } from "../data/landing-copy";
import { CriteriaChipGroup } from "./CriteriaChipGroup";
import {
  useLandingCriteria,
  useSelectedLandingCriteria,
} from "./LandingCriteriaProvider";
import styles from "../styles/landing.module.css";

export function CriteriaDemoSection() {
  const { filteredProducts, selectedCriteria, toggleCriterion } =
    useLandingCriteria();
  const selectedCriterionItems = useSelectedLandingCriteria();

  const activeCriteria = selectedCriterionItems.filter(
    (criterion) => !criterion.planned,
  );
  const plannedCriterion = landingCriteria.find((criterion) => criterion.planned);

  return (
    <section id="criteria-demo" className={styles.pageSection}>
      <div className={`container ${styles.criteriaWrap}`}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionEyebrow}>기준 데모</span>
          <h2 className={styles.sectionTitle}>
            추천을 받기 전에,
            <br />
            먼저 내 기준을 고릅니다.
          </h2>
          <p className={styles.sectionDescription}>
            좋다는 리뷰보다, 내가 피하고 싶은 성분이 있는지가 더 중요할 때가
            있습니다. ING는 그 출발점을 사용자가 직접 정하도록 설계합니다.
          </p>
        </div>

        <div className={styles.criteriaPanel}>
          <CriteriaChipGroup
            selectedCriteria={selectedCriteria}
            onToggle={toggleCriterion}
          />

          <div className={styles.criteriaSummaryCard}>
            <p className={styles.criteriaCount}>
              {activeCriteria.length > 0
                ? `현재 ${activeCriteria.length}개 기준이 적용된 상태입니다.`
                : "현재 선택된 기준이 없어 전체 예시 제품을 먼저 보여줍니다."}
            </p>
            <p className={styles.sectionDescription}>
              제품 카드는 선택한 기준에 맞춰 정리되며, 지금은 예시 제품{" "}
              {filteredProducts.length}개가 먼저 보이도록 구성되어 있습니다.
            </p>

            <div className={styles.criteriaPillRow}>
              {selectedCriterionItems.length > 0 ? (
                selectedCriterionItems.map((criterion) => (
                  <span key={criterion.id} className={styles.criteriaPill}>
                    {criterion.label}
                  </span>
                ))
              ) : (
                <span className={styles.criteriaPill}>전체 보기</span>
              )}
            </div>

            {plannedCriterion ? (
              <span className={styles.plannedBadge}>
                {plannedCriterion.label}
              </span>
            ) : null}

            <p className={styles.subtleText}>
              매칭 점수는 참고용입니다. 본 서비스는 제품 안전성이나 효능을
              보장하지 않습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
