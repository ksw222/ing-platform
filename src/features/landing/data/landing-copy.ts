import type { LandingCriterionId } from "./landing-products";

export type LandingCriterionDefinition = {
  id: LandingCriterionId;
  label: string;
  caption: string;
  planned?: boolean;
};

export const criteriaLabelMap: Record<LandingCriterionId, string> = {
  "fragrance-free": "향료 제외",
  "ethanol-free": "에탄올 제외",
  "sensitive-check": "민감 기준 확인",
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
    caption: "향료 포함 여부를 먼저 보는 기준",
  },
  {
    id: "ethanol-free",
    label: "에탄올 제외",
    caption: "알코올 표기를 먼저 확인하는 기준",
  },
  {
    id: "sensitive-check",
    label: "민감 기준 확인",
    caption: "민감한 사용자가 먼저 보는 조건",
  },
  {
    id: "essential-oil-free",
    label: "에센셜오일 제외",
    caption: "향 기반 오일 표기를 먼저 확인",
  },
  {
    id: "custom-ingredient",
    label: "특정 성분 직접 입력 예정",
    caption: "다음 단계에서 직접 입력 기능 추가",
    planned: true,
  },
];

export const heroTrustChips = [
  "판정하지 않음",
  "기준 기반 매칭",
  "베타 MVP",
  "전성분 참고 데이터",
];

export const painItems = [
  {
    title: "제품명은 쉬운데, 성분표는 어렵습니다.",
    body: "같은 성분도 제품마다 다르게 표기되고, 전성분표는 길고 복잡합니다. 결국 제품 하나를 고르기 위해 여러 탭을 다시 열게 됩니다.",
  },
  {
    title: "추천은 많지만, 내 기준은 다릅니다.",
    body: "남들이 좋다고 한 제품보다, 내가 피하고 싶은 조건에 맞는지가 더 중요할 수 있습니다. ING는 사용자의 기준을 먼저 묻습니다.",
  },
  {
    title: "그래서 ING는 판정하지 않고 정리합니다.",
    body: "안전하다/위험하다가 아니라, 전성분표 기준 포함 여부와 사용자 기준 매칭 결과를 보여줍니다.",
  },
];

export const workflowSteps = [
  {
    number: "01",
    title: "성분명 정규화",
    body: "제품마다 다르게 적힌 성분명을 비교 가능한 기준으로 정리합니다.",
  },
  {
    number: "02",
    title: "사용자 기준 적용",
    body: "향료 제외, 에탄올 제외처럼 사용자가 직접 선택한 기준을 적용합니다.",
  },
  {
    number: "03",
    title: "제품 매칭 결과 제공",
    body: "좋다/나쁘다 대신, 기준에 얼마나 맞는지와 그 이유를 보여줍니다.",
  },
];

export const trustItems = [
  {
    title: "판정하지 않습니다.",
    body: "ING는 특정 제품을 안전하다거나 위험하다고 단정하지 않습니다.",
  },
  {
    title: "기준을 먼저 봅니다.",
    body: "누구에게나 좋은 제품보다, 사용자가 직접 정한 기준에 맞는지를 봅니다.",
  },
  {
    title: "이유를 보여줍니다.",
    body: "매칭 점수만 보여주지 않고, 어떤 기준에 맞았는지 함께 보여줍니다.",
  },
  {
    title: "아직 MVP입니다.",
    body: "현재는 제품 선택 경험을 검증하는 베타 단계이며, 데이터와 기능은 계속 정교화됩니다.",
  },
];

export const waitlistInterestOptions = [
  { value: "fragrance-free", label: "향료 제외" },
  { value: "ethanol-free", label: "에탄올 제외" },
  { value: "sensitive-skin", label: "민감 피부 기준" },
  { value: "custom-ingredient", label: "특정 성분 직접 입력" },
  { value: "product-compare", label: "제품 비교 기능" },
] as const;

export const waitlistProofPoints = [
  "출시 알림과 테스트 초대를 먼저 받을 수 있습니다.",
  "내가 자주 보는 기준이 무엇인지 함께 확인할 수 있습니다.",
  "MVP 단계에서 가장 필요한 피드백을 빠르게 모읍니다.",
];
