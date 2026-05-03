import type { LandingCriterionId } from "./landing-products";

export type LandingCriterionDefinition = {
  id: LandingCriterionId;
  label: string;
  shortLabel?: string;
  caption: string;
  planned?: boolean;
};

export const criteriaLabelMap: Record<LandingCriterionId, string> = {
  "fragrance-free": "향료 제외",
  "ethanol-free": "에탄올 제외",
  "sensitive-check": "민감 기준",
  "essential-oil-free": "에센셜오일 제외",
  "custom-ingredient": "특정 성분 직접 입력 예정",
};

export const defaultLandingCriteria: LandingCriterionId[] = [
  "fragrance-free",
  "ethanol-free",
  "sensitive-check",
];

export const landingCriteria: LandingCriterionDefinition[] = [
  {
    id: "fragrance-free",
    label: "향료 제외",
    caption: "향료 포함 여부를 먼저 확인하는 기준",
  },
  {
    id: "ethanol-free",
    label: "에탄올 제외",
    caption: "에탄올 표기를 먼저 확인하는 기준",
  },
  {
    id: "sensitive-check",
    label: "민감 기준",
    caption: "민감하게 보는 항목을 먼저 보는 기준",
  },
  {
    id: "essential-oil-free",
    label: "에센셜오일 제외",
    shortLabel: "에센셜오일",
    caption: "에센셜오일 표기를 먼저 확인하는 기준",
  },
  {
    id: "custom-ingredient",
    label: "특정 성분 직접 입력 예정",
    shortLabel: "직접 입력 예정",
    caption: "다음 단계에서 직접 입력 기준을 추가할 예정입니다.",
    planned: true,
  },
];

export const heroTrustChips = ["판정 아님", "기준 기반", "베타 MVP"] as const;

export const howItWorksSteps = [
  {
    number: "01",
    title: "성분명 정리",
    body: "제품마다 다르게 적힌 성분명을 비교 가능한 기준으로 정리합니다.",
  },
  {
    number: "02",
    title: "기준 적용",
    body: "향료 제외, 에탄올 제외처럼 사용자가 고른 기준을 먼저 적용합니다.",
  },
  {
    number: "03",
    title: "이유 표시",
    body: "매칭 점수만 보여주지 않고 어떤 기준에 맞았는지 함께 보여줍니다.",
  },
] as const;

export const waitlistInterestOptions = [
  { value: "fragrance-free", label: "향료 제외" },
  { value: "ethanol-free", label: "에탄올 제외" },
  { value: "sensitive-skin", label: "민감 피부 기준" },
  { value: "custom-ingredient", label: "특정 성분 직접 입력" },
  { value: "product-compare", label: "제품 비교 기능" },
] as const;
