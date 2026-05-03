"use client";

import { CriteriaChipGroup } from "./CriteriaChipGroup";
import {
  useLandingCriteria,
  useSelectedLandingCriteria,
} from "./LandingCriteriaProvider";
import styles from "../styles/landing.module.css";

export function CriteriaBarSection() {
  const { selectedCriteria, toggleCriterion } = useLandingCriteria();
  const selectedItems = useSelectedLandingCriteria();

  return (
    <section id="criteria-bar" className={styles.criteriaSection}>
      <div className="container">
        <div className={styles.criteriaCard}>
          <div className={styles.criteriaHeader}>
            <div>
              <span className={styles.sectionEyebrow}>기준 선택</span>
              <h2 className={styles.sectionTitle}>피하고 싶은 기준부터 고르세요.</h2>
            </div>
            <p className={styles.sectionBody}>
              기준을 고르면 제품 카드의 우선순위가 달라집니다.
            </p>
          </div>

          <CriteriaChipGroup
            selectedCriteria={selectedCriteria}
            onToggle={toggleCriterion}
          />

          <div className={styles.criteriaSummaryRow}>
            <p className={styles.criteriaSummary}>
              {selectedItems.length > 0
                ? `현재 ${selectedItems.length}개 기준이 선택되었습니다.`
                : "현재는 전체 예시 제품을 보고 있습니다."}
            </p>
            <p className={styles.criteriaHint}>
              특정 성분 직접 입력은 다음 단계에서 추가할 예정입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
