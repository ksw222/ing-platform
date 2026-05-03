import Link from "next/link";
import { defaultLandingCriteria, heroTrustChips } from "../data/landing-copy";
import { getMatchedProducts, landingProducts } from "../data/landing-products";
import { LandingProductCard } from "./LandingProductCard";
import styles from "../styles/landing.module.css";

const heroProducts = getMatchedProducts(
  landingProducts,
  defaultLandingCriteria,
).slice(0, 4);

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>성분 기준 제품 매칭 서비스</span>
          <h1 className={styles.heroTitle}>
            들어오자마자,
            <br />
            내 기준에 맞는 제품부터.
          </h1>
          <p className={styles.heroDescription}>
            리뷰는 많지만, 내 기준에 맞는지는 결국 다시 확인해야 합니다.
            ING는 전성분 데이터를 정리하고, 사용자가 선택한 회피 기준에 맞는
            제품을 먼저 보여줍니다.
          </p>

          <div className={styles.heroActions}>
            <Link href="/market" className={styles.primaryAction}>
              내 기준으로 제품 보기
            </Link>
            <Link href="#criteria-demo" className={styles.secondaryAction}>
              30초 데모 체험하기
            </Link>
          </div>

          <div className={styles.trustChipRow}>
            {heroTrustChips.map((chip) => (
              <span key={chip} className={styles.trustChip}>
                {chip}
              </span>
            ))}
          </div>
        </div>

        <aside className={styles.heroPanel} aria-label="제품 매칭 미리보기">
          <div className={styles.heroPanelHeader}>
            <div>
              <p className={styles.heroPanelEyebrow}>MATCH PREVIEW</p>
              <h2 className={styles.heroPanelTitle}>지금 선택된 기준</h2>
            </div>
            <p className={styles.heroPanelMeta}>3개 기준 적용 중</p>
          </div>

          <div className={styles.criteriaPillRow}>
            <span className={styles.criteriaPill}>향료 제외</span>
            <span className={styles.criteriaPill}>에탄올 제외</span>
            <span className={styles.criteriaPill}>민감 기준</span>
          </div>

          <div className={styles.compactProductGrid}>
            {heroProducts.map((product) => (
              <LandingProductCard
                key={product.id}
                product={product}
                variant="compact"
              />
            ))}
          </div>

          <p className={styles.noteLine}>판정 아님 · 기준 기반 참고</p>
        </aside>
      </div>
    </section>
  );
}
