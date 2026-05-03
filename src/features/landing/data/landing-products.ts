export type LandingCriterionId =
  | "fragrance-free"
  | "ethanol-free"
  | "sensitive-check"
  | "essential-oil-free"
  | "custom-ingredient";

export type LandingProductTone =
  | "sage"
  | "linen"
  | "dew"
  | "cloud"
  | "peach"
  | "stone"
  | "mist"
  | "olive";

export type LandingProductShape =
  | "jar"
  | "dropper"
  | "tall"
  | "tube"
  | "pump"
  | "capsule"
  | "sun"
  | "bottle";

export type LandingProduct = {
  id: string;
  brand: string;
  name: string;
  category: string;
  matchScore: number;
  tags: string[];
  reason: string;
  criteria: LandingCriterionId[];
  tone: LandingProductTone;
  shape: LandingProductShape;
};

export type LandingProductMatch = LandingProduct & {
  adjustedScore: number;
  matchedCriteria: LandingCriterionId[];
};

export const landingProducts: LandingProduct[] = [
  {
    id: "round-lab-birch-cream",
    brand: "ROUND LAB",
    name: "자작나무 수분 크림",
    category: "Cream",
    matchScore: 92,
    tags: ["수분", "향료 제외", "민감 기준"],
    reason: "향료 제외 기준과 민감 기준에 매칭되는 예시 제품입니다.",
    criteria: ["fragrance-free", "sensitive-check"],
    tone: "sage",
    shape: "jar",
  },
  {
    id: "torriden-dive-in-serum",
    brand: "TORRIDEN",
    name: "다이브인 세럼",
    category: "Serum",
    matchScore: 89,
    tags: ["수분", "에탄올 제외"],
    reason: "에탄올 제외 기준에 매칭되는 예시 제품입니다.",
    criteria: ["ethanol-free", "sensitive-check"],
    tone: "dew",
    shape: "dropper",
  },
  {
    id: "anua-heartleaf-toner",
    brand: "ANUA",
    name: "어성초 토너",
    category: "Toner",
    matchScore: 86,
    tags: ["진정", "향료 제외"],
    reason: "향료 제외 기준을 선택했을 때 확인 가능한 예시 제품입니다.",
    criteria: ["fragrance-free", "sensitive-check"],
    tone: "cloud",
    shape: "tall",
  },
  {
    id: "cosrx-snail-essence",
    brand: "COSRX",
    name: "스네일 에센스",
    category: "Essence",
    matchScore: 84,
    tags: ["보습", "에탄올 제외"],
    reason: "에탄올 제외 조건에 매칭되는 예시 제품입니다.",
    criteria: ["ethanol-free"],
    tone: "linen",
    shape: "pump",
  },
  {
    id: "illiyoon-ato-lotion",
    brand: "ILLIYOON",
    name: "세라마이드 아토 로션",
    category: "Lotion",
    matchScore: 90,
    tags: ["세라마이드", "복수 기준"],
    reason: "여러 기준을 동시에 적용했을 때 남는 대표 예시 제품입니다.",
    criteria: ["fragrance-free", "ethanol-free", "sensitive-check"],
    tone: "olive",
    shape: "bottle",
  },
  {
    id: "beplain-cicaful-ampoule",
    brand: "BEPLAIN",
    name: "시카풀 앰플",
    category: "Ampoule",
    matchScore: 87,
    tags: ["진정", "민감 기준"],
    reason: "민감 기준 확인용으로 보기 좋은 데모 제품입니다.",
    criteria: ["sensitive-check", "essential-oil-free"],
    tone: "mist",
    shape: "capsule",
  },
  {
    id: "boj-rice-sunscreen",
    brand: "BEAUTY OF JOSEON",
    name: "맑은쌀 선크림",
    category: "Sunscreen",
    matchScore: 82,
    tags: ["데일리", "기준 확인"],
    reason: "선택한 기준에 따라 확인이 필요한 예시 제품입니다.",
    criteria: ["essential-oil-free"],
    tone: "peach",
    shape: "sun",
  },
  {
    id: "manyo-bifida-ampoule",
    brand: "MANYO",
    name: "비피다 앰플",
    category: "Ampoule",
    matchScore: 85,
    tags: ["장벽", "에탄올 제외"],
    reason: "에탄올 제외 기준에서 확인 가능한 예시 제품입니다.",
    criteria: ["ethanol-free", "essential-oil-free"],
    tone: "stone",
    shape: "tube",
  },
];

function clampScore(score: number) {
  return Math.max(78, Math.min(96, score));
}

export function getMatchedProducts(
  products: LandingProduct[],
  selectedCriteria: LandingCriterionId[],
): LandingProductMatch[] {
  const filterableCriteria = selectedCriteria.filter(
    (criterion) => criterion !== "custom-ingredient",
  );

  return products
    .map((product) => {
      const matchedCriteria = filterableCriteria.filter((criterion) =>
        product.criteria.includes(criterion),
      );
      const mismatchCount = Math.max(
        filterableCriteria.length - matchedCriteria.length,
        0,
      );
      const adjustedScore =
        filterableCriteria.length === 0
          ? product.matchScore
          : clampScore(
              product.matchScore - mismatchCount * 4 + matchedCriteria.length,
            );

      return {
        ...product,
        adjustedScore,
        matchedCriteria,
      };
    })
    .filter(
      (product) =>
        filterableCriteria.length === 0 || product.matchedCriteria.length > 0,
    )
    .sort((left, right) => {
      if (right.matchedCriteria.length !== left.matchedCriteria.length) {
        return right.matchedCriteria.length - left.matchedCriteria.length;
      }

      return right.adjustedScore - left.adjustedScore;
    });
}
