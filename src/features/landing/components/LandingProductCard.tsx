import { criteriaLabelMap } from "../data/landing-criteria";
import type {
  LandingProductMatch,
  LandingProductShape,
  LandingProductTone,
} from "../data/landing-products";
import styles from "../styles/landing.module.css";

const toneClassMap: Record<LandingProductTone, string> = {
  sage: styles.toneSage,
  linen: styles.toneLinen,
  dew: styles.toneDew,
  cloud: styles.toneCloud,
  peach: styles.tonePeach,
  stone: styles.toneStone,
  mist: styles.toneMist,
  olive: styles.toneOlive,
};

const shapeClassMap: Record<LandingProductShape, string> = {
  jar: styles.shapeJar,
  dropper: styles.shapeDropper,
  tall: styles.shapeTall,
  tube: styles.shapeTube,
  pump: styles.shapePump,
  capsule: styles.shapeCapsule,
  sun: styles.shapeSun,
  bottle: styles.shapeBottle,
};

type LandingProductCardProps = {
  product: LandingProductMatch;
  variant?: "default" | "compact";
};

export function LandingProductCard({
  product,
  variant = "default",
}: LandingProductCardProps) {
  const matchedLabels = product.matchedCriteria.map(
    (criterion) => criteriaLabelMap[criterion],
  );
  const isCompact = variant === "compact";
  const visibleTags = isCompact ? product.tags.slice(0, 2) : product.tags;

  return (
    <article
      className={`${styles.productCard} ${
        isCompact ? styles.productCardCompact : ""
      }`}
    >
      <div
        className={`${styles.productVisual} ${toneClassMap[product.tone]} ${
          isCompact ? styles.productVisualCompact : ""
        }`}
        role="img"
        aria-label={`${product.brand} ${product.name} 제품 미리보기`}
      >
        <span className={styles.categoryBadge}>{product.category}</span>
        <div className={`${styles.productShape} ${shapeClassMap[product.shape]}`} />
      </div>

      <div className={styles.productBody}>
        <div className={styles.productMeta}>
          <div>
            <p className={styles.productBrand}>{product.brand}</p>
            <p className={styles.productCategory}>{product.category}</p>
          </div>
          <span className={styles.productScore}>{product.adjustedScore}%</span>
        </div>

        <h3 className={styles.productName}>{product.name}</h3>

        <div className={styles.tagRow}>
          {visibleTags.map((tag) => (
            <span key={`${product.id}-${tag}`} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <p className={styles.reasonText}>{product.reason}</p>
        {!isCompact ? (
          <p className={styles.matchedText}>
            {matchedLabels.length > 0
              ? `적용 기준: ${matchedLabels.join(" · ")}`
              : "현재는 전체 예시 제품을 보고 있습니다."}
          </p>
        ) : null}
      </div>
    </article>
  );
}
