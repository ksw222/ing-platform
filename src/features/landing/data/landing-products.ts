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
    tags: ["향료 제외", "민감 기준", "보습"],
    reason:
      "향료 제외와 민감 기준 항목이 먼저 맞아 비교 후보로 보기 좋습니다.",
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
    tags: ["에탄올 제외", "수분", "세럼"],
    reason: "에탄올 제외 기준을 먼저 볼 때 상단에서 비교해보기 좋습니다.",
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
    tags: ["향료 제외", "진정", "토너"],
    reason: "향료 제외 기준으로 먼저 좁혀볼 때 같이 보기 좋은 토너입니다.",
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
    tags: ["에탄올 제외", "보습", "에센스"],
    reason: "에탄올 제외 기준으로 제품을 추릴 때 비교 후보로 남기기 쉽습니다.",
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
    tags: ["복수 기준", "세라마이드", "로션"],
    reason:
      "여러 기준을 함께 적용했을 때도 우선순위 안에 남는 흐름을 보여줍니다.",
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
    tags: ["민감 기준", "진정", "앰플"],
    reason: "민감 기준이나 세부 조건을 함께 볼 때 자연스럽게 확인됩니다.",
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
    tags: ["기준 확인", "데일리", "선크림"],
    reason: "선택한 기준과 함께 다시 확인이 필요한 제품 흐름을 보여줍니다.",
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
    tags: ["에탄올 제외", "장벽", "앰플"],
    reason: "에탄올 제외 기준 안에서 장벽 케어 계열이 어떻게 보이는지 정리합니다.",
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
