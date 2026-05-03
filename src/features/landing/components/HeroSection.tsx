import Link from "next/link";
import {
  defaultLandingCriteria,
  heroTrustChips,
} from "../data/landing-criteria";
import { getMatchedProducts, landingProducts } from "../data/landing-products";
import { LandingProductCard } from "./LandingProductCard";
import styles from "../styles/landing.module.css";

const heroProducts = getMatchedProducts(
  landingProducts,
  defaultLandingCriteria,
).slice(0, 3);

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <span className={styles.heroLabel}>성분 기준 제품 매칭</span>
          <h1 className={styles.heroTitle}>
            내 기준에 맞는 화장품,
            <br />
            먼저 걸러서 봅니다.
          </h1>
          <p className={styles.heroDescription}>
            리뷰를 보고도 성분표를 다시 열게 될 때가 있습니다. ING는 사용자가
            피하고 싶은 기준을 먼저 고르고, 그 기준에 맞춰 제품을 정리합니다.
          </p>

          <div className={styles.heroActions}>
            <Link href="#criteria-bar" className={styles.primaryAction}>
              기준 선택해보기
            </Link>
            <Link href="#waitlist" className={styles.secondaryAction}>
              베타 알림 받기
            </Link>
          </div>

          <div className={styles.trustList}>
            {heroTrustChips.map((chip) => (
              <span key={chip} className={styles.trustChip}>
                {chip}
              </span>
            ))}
          </div>
        </div>

        <aside
          className={styles.heroPanel}
          aria-label="제품 매칭 미리보기"
        >
          <div className={styles.heroPanelHeader}>
            <div>
              <p className={styles.panelEyebrow}>서비스 미리보기</p>
              <h2 className={styles.heroPanelTitle}>지금 선택된 기준</h2>
            </div>
            <p className={styles.panelMeta}>기준 3개 적용</p>
          </div>

          <div className={styles.heroCriteriaRow}>
            <span className={styles.criteriaPill}>향료 제외</span>
            <span className={styles.criteriaPill}>에탄올 제외</span>
            <span className={styles.criteriaPill}>민감 기준</span>
          </div>

          <div className={styles.heroPreviewList}>
            {heroProducts.map((product) => (
              <LandingProductCard
                key={product.id}
                product={product}
                variant="compact"
              />
            ))}
          </div>

          <p className={styles.panelNote}>
            제품 안전성 판정이 아닌 기준 기반 참고 정보입니다.
          </p>
        </aside>
      </div>
    </section>
  );
}
