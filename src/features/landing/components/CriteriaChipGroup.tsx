import styles from "../styles/landing.module.css";
import { landingCriteria } from "../data/landing-copy";
import type { LandingCriterionId } from "../data/landing-products";

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
              isActive ? styles.criterionActive : ""
            }`}
            aria-pressed={isActive}
            onClick={() => onToggle(criterion.id)}
          >
            <span>{criterion.label}</span>
            {criterion.planned ? (
              <span className={styles.criterionPlanned}>예정</span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
