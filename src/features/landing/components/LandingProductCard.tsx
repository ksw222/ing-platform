import styles from "../styles/landing.module.css";
import { criteriaLabelMap } from "../data/landing-copy";
import type {
  LandingProductMatch,
  LandingProductShape,
  LandingProductTone,
} from "../data/landing-products";

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

  return (
    <article
      className={`${styles.productCard} ${
        variant === "compact" ? styles.productCardCompact : ""
      }`}
    >
      <div
        className={`${styles.productVisual} ${toneClassMap[product.tone]}`}
        role="img"
        aria-label={`${product.brand} ${product.name} 제품 미리보기`}
      >
        <span className={styles.categoryBadge}>{product.category}</span>
        <div className={`${styles.productShape} ${shapeClassMap[product.shape]}`} />
      </div>

      <div className={styles.productBody}>
        <div className={styles.productTopLine}>
          <p className={styles.productBrand}>{product.brand}</p>
          <span className={styles.productScore}>{product.adjustedScore}% 매칭</span>
        </div>
        <h3 className={styles.productName}>{product.name}</h3>

        <div className={styles.tagRow}>
          {product.tags.map((tag) => (
            <span key={`${product.id}-${tag}`} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <p className={styles.reasonText}>{product.reason}</p>
        <p className={styles.matchedText}>
          {matchedLabels.length > 0
            ? `현재 기준: ${matchedLabels.join(" · ")}`
            : "전체 예시 제품 보기 상태"}
        </p>
      </div>
    </article>
  );
}
