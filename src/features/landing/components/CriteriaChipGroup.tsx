import { landingCriteria } from "../data/landing-criteria";
import type { LandingCriterionId } from "../data/landing-products";
import styles from "../styles/landing.module.css";

type CriteriaChipGroupProps = {
  selectedCriteria: LandingCriterionId[];
  onToggle: (criterion: LandingCriterionId) => void;
};

export function CriteriaChipGroup({
  selectedCriteria,
  onToggle,
}: CriteriaChipGroupProps) {
  return (
    <div className={styles.chipGroup} role="group" aria-label="기준 선택">
      {landingCriteria.map((criterion) => {
        const isActive = selectedCriteria.includes(criterion.id);

        return (
          <button
            key={criterion.id}
            type="button"
            className={`${styles.criterionButton} ${
              criterion.shortLabel ? styles.criterionWithShortLabel : ""
            } ${
              isActive ? styles.criterionActive : ""
            }`}
            aria-pressed={isActive}
            onClick={() => onToggle(criterion.id)}
          >
            <span className={styles.chipText}>{criterion.label}</span>
            {criterion.shortLabel ? (
              <span className={styles.chipTextShort}>{criterion.shortLabel}</span>
            ) : null}
            {criterion.planned ? (
              <span className={styles.criterionPlanned}>예정</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
