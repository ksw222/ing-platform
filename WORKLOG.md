# Worklog

이 파일은 `ing-platform` 레포에서 진행한 주요 변경 사항을 날짜별로 기록합니다.

## 2026-05-03 - 랜딩 전면 리디자인

### 요청 요약

- 랜딩페이지를 AI SaaS 템플릿 같은 인상에서 벗어나게 정리하기
- Hero, Criteria, Product Preview, How It Works, Waitlist, Footer 중심으로 압축하기
- 글자 크기와 설명량을 줄이고 제품/기준/행동 중심으로 구조 재설계하기
- `/market` 페이지도 같은 톤으로 다시 정리하기
- Google Form 연동 준비를 `.env.example`과 README에 반영하기

### 변경 파일

- `src/app/page.tsx`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/compare/page.tsx`
- `src/app/lab/page.tsx`
- `src/components/layout/Navigation.tsx`
- `src/components/layout/Navigation.module.css`
- `src/styles/tokens.css`
- `src/features/landing/components/HeroSection.tsx`
- `src/features/landing/components/CriteriaBarSection.tsx`
- `src/features/landing/components/CriteriaChipGroup.tsx`
- `src/features/landing/components/HowItWorksSection.tsx`
- `src/features/landing/components/LandingCriteriaProvider.tsx`
- `src/features/landing/components/LandingFooter.tsx`
- `src/features/landing/components/LandingProductCard.tsx`
- `src/features/landing/components/MarketShowcase.tsx`
- `src/features/landing/components/ProductPreviewSection.tsx`
- `src/features/landing/components/WaitlistSection.tsx`
- `src/features/landing/data/landing-criteria.ts`
- `src/features/landing/data/landing-products.ts`
- `src/features/landing/styles/landing.module.css`
- `.env.example`
- `.gitignore`
- `README.md`

### 상세 변경 내용

#### 1. 랜딩 구조 재편

- 기존 `PainSection`, `ProductMatchSection`, `TrustSection`, `WorkflowSection`,
  `CriteriaDemoSection`을 제거했습니다.
- 홈은 `HeroSection`, `CriteriaBarSection`, `ProductPreviewSection`,
  `HowItWorksSection`, `WaitlistSection`, `LandingFooter` 6개 구조로 압축했습니다.
- `LandingCriteriaProvider`는 유지하고, 기준 선택 상태가 `CriteriaBarSection`과
  `ProductPreviewSection` 사이에서만 자연스럽게 연결되도록 정리했습니다.

#### 2. 카피와 정보 구조 조정

- 히어로 헤드라인을 더 작고 짧은 톤으로 다시 썼습니다.
- 서비스 설명은 “판정하지 않는다”, “기준에 맞춰 정리한다”, “MVP”라는 핵심만
  남기고 과장된 문장을 덜어냈습니다.
- 제품 카드의 `reason` 문구를 자연스럽게 바꾸고, 예시 고지는 카드마다 반복하지
  않고 섹션 하단에만 두었습니다.

#### 3. 제품 카드 및 시각 톤 조정

- 카드 radius와 그림자를 줄이고 border 중심으로 재정리했습니다.
- 제품 카드의 태그를 점수보다 먼저 읽히도록 배치했습니다.
- 제품 비주얼 placeholder는 유지하되, 크기를 줄이고 서비스 리스트 같은 밀도로
  정리했습니다.

#### 4. Waitlist 개선

- waitlist를 어두운 대형 CTA 박스에서 흰색 카드 기반 폼으로 바꿨습니다.
- 이메일, 관심 기준, 의견 필드는 유지했습니다.
- submit payload를 `email`, `interest`, `note`, `requestedAt`, `source`,
  `page`, `formVersion`, `externalFormEnabled` 구조로 정리했습니다.
- 성공 메시지는 “신청이 접수되었습니다. 남겨주신 기준은 베타 기능 우선순위에
  참고하겠습니다.”로 바꿨습니다.
- `NEXT_PUBLIC_WAITLIST_FORM_URL` 값이 있으면 Google Form 링크를 함께
  노출하도록 준비했습니다.

#### 5. Navigation 및 보조 페이지

- 상단 네비게이션은 `제품 매칭`과 `베타 알림 받기` 중심으로 유지했습니다.
- `비교`, `성분 랩`은 메인 네비에서 드러내지 않고 footer의 작은 링크로만
  남겼습니다.
- `/compare`, `/lab` placeholder 문구도 현재 MVP 상태에 맞게 다시 정리했습니다.

#### 6. 문서 및 환경 파일

- `.env.example` 파일을 추가했습니다.
- `.gitignore`에 `!.env.example`를 추가해 예시 env 파일을 추적할 수 있게 했습니다.
- README를 현재 MVP 범위, 실행 방법, Google Form 연결 방법, 아직 없는 항목 기준으로
  다시 작성했습니다.

### 검증 메모

- `npm run lint` 성공
- `npm run build` 성공
- `npm run dev` 실행 후 `/`, `/market` 응답 `200` 확인
- 이 환경에서는 `next build`가 샌드박스 안에서 `spawn EPERM`으로 막혀,
  동일 명령을 샌드박스 밖에서 다시 실행해 최종 확인했습니다.

## 2026-05-03 - MVP 랜딩 고도화 2차

### 요청 요약

- WaitlistSection을 실제 고객 수집 직전 단계처럼 다듬기
- 제품 카드 reason 문구를 더 자연스럽게 정리하기
- Navigation을 MVP 유입 중심으로 단순화하기
- `/market` 하단에 베타 알림 CTA 추가하기
- `dev-server*.log`, `.gitignore`, README 정리하기

### 변경 파일

- `src/features/landing/components/WaitlistSection.tsx`
- `src/features/landing/data/landing-products.ts`
- `src/features/landing/data/landing-copy.ts`
- `src/components/layout/Navigation.tsx`
- `src/features/landing/components/ProductMatchSection.tsx`
- `src/features/landing/components/MarketShowcase.tsx`
- `src/features/landing/components/LandingFooter.tsx`
- `src/features/landing/styles/landing.module.css`
- `README.md`
- `.gitignore`

### 요약

- waitlist payload 구조를 명확히 했고, 성공 메시지를 자연스럽게 다듬었습니다.
- 카드별 reason 문구에서 반복되는 표현을 줄였습니다.
- 네비게이션은 `제품 매칭`, `베타 알림 받기` 중심으로 단순화했습니다.
- `/market` 하단에 `/#waitlist`로 연결되는 CTA를 추가했습니다.
- README와 ignore 규칙을 현재 MVP 기준으로 업데이트했습니다.

## 2026-05-03 - Next.js 16 Turbopack manifest 에러 안정화

### 요청 요약

- `builtin/global-error.js#default` 관련 React Client Manifest 에러 해결
- Turbopack dev/runtime 불안정성 회피
- `npm run dev`, `npm run build`가 안정적으로 동작하도록 정리

### 변경 파일

- `package.json`
- `next.config.ts`
- `src/app/global-error.tsx`

### 요약

- 기본 `dev`, `build`를 webpack 기반으로 전환했습니다.
- Turbopack 확인용 `dev:turbopack`, `build:turbopack` 스크립트를 따로 두었습니다.
- `src/app/global-error.tsx`를 추가해 App Router용 global error boundary를
  명시했습니다.
- `next.config.ts`는 `outputFileTracingRoot: process.cwd()`만 남기는 최소 설정으로
  정리했습니다.

## 2026-05-03 20:37:26 KST - 반응형 최적화

### 요청 요약

- 랜딩페이지와 `/market` 페이지를 모바일, 태블릿, 데스크톱에서 자연스럽게 보이도록 반응형 최적화
- 가로 스크롤 가능성이 있는 레이아웃 정리
- 네비게이션, 히어로, 기준 칩, 제품 카드, 웨이트리스트 폼, footer 반응형 재정리
- `WORKLOG.md`에는 기존 내용을 지우지 않고 이번 작업 내역을 추가 기록

### 변경 파일

- `src/components/layout/Navigation.tsx`
- `src/components/layout/Navigation.module.css`
- `src/styles/utilities.css`
- `src/app/layout.tsx`
- `src/app/route-placeholder.module.css`
- `src/features/landing/data/landing-criteria.ts`
- `src/features/landing/data/landing-products.ts`
- `src/features/landing/components/HeroSection.tsx`
- `src/features/landing/components/CriteriaBarSection.tsx`
- `src/features/landing/components/CriteriaChipGroup.tsx`
- `src/features/landing/components/ProductPreviewSection.tsx`
- `src/features/landing/components/LandingProductCard.tsx`
- `src/features/landing/components/HowItWorksSection.tsx`
- `src/features/landing/components/WaitlistSection.tsx`
- `src/features/landing/components/MarketShowcase.tsx`
- `src/features/landing/components/LandingFooter.tsx`
- `src/features/landing/styles/landing.module.css`

### 상세 변경 내용

#### 1. 반응형 breakpoint 정리

- 기존 `1100 / 980 / 760 / 640` 중심 규칙을 `1280 / 1023 / 767 / 639` 축으로 다시 정리했다.
- `landing.module.css`를 기준으로 홈과 `/market`의 카드, 섹션, 폼 규칙이 같은 breakpoint를 공유하도록 맞췄다.
- 넓은 화면에서는 3~4열, 태블릿에서는 2열, 모바일에서는 1열로 자연스럽게 바뀌도록 제품 그리드를 정리했다.

#### 2. Navigation 모바일 대응

- 모바일에서 메뉴 링크는 숨기고 CTA만 남기는 구조를 유지했다.
- CTA 문구를 `베타 알림 받기` / `베타 알림` 두 버전으로 분리해 작은 폭에서 짧은 라벨이 보이도록 바꿨다.
- `brand`, `actions`, `startButton`에 shrink / max-width / margin 규칙을 추가해 작은 폭에서도 상단 요소가 겹치지 않도록 조정했다.
- 네비 높이는 데스크톱 64px, 모바일 58~60px 수준으로 정리했다.

#### 3. HeroSection 모바일 대응

- 히어로 타이틀 최대 폭과 글자 크기를 조정해 모바일에서 줄바꿈이 더 자연스럽게 보이도록 했다.
- 태블릿 이하에서는 1열 레이아웃으로 전환하고, 모바일에서는 CTA 버튼을 전체 폭으로 배치했다.
- Hero 패널 안의 preview 카드는 모바일에서 3개를 모두 억지로 보여주지 않고 2개까지만 노출되도록 조정했다.
- compact 제품 카드에서는 태그를 2개까지만 보여주고, `matchedText`는 숨겨서 패널 높이를 줄였다.

#### 4. Criteria / Product 카드 대응

- 긴 기준 칩을 위해 `shortLabel` 구조를 도입했다.
- `특정 성분 직접 입력 예정`은 모바일에서 `직접 입력 예정`, `에센셜오일 제외`는 `에센셜오일`로 줄여 보이도록 했다.
- 처음 반영 과정에서 모바일에서 짧은 칩 텍스트가 비어 보이는 문제가 있어서, `criterionWithShortLabel` 분기 클래스를 추가해 긴 칩만 축약 표시되도록 수정했다.
- 모바일 제품 카드는 세로 카드에서 짧은 가로형 카드로 바꿔 한 화면에 더 많은 정보를 볼 수 있게 했다.
- 제품 이미지 placeholder 높이와 본문 패딩, 타이포 크기를 모바일 기준으로 낮췄다.

#### 5. Waitlist / Footer 대응

- 웨이트리스트는 태블릿 이하에서 1열로 전환되도록 정리했다.
- 모바일에서 input, textarea, submit button이 전부 100% 폭으로 자연스럽게 보이도록 gap과 padding을 조정했다.
- Google Form 링크는 줄 수가 길어져도 버튼 레이아웃을 깨지 않도록 별도 줄바꿈 가능한 보조 링크 스타일로 유지했다.
- footer는 모바일에서 1열로 정리하고, 링크도 세로 스택으로 보이게 조정했다.

#### 6. Container / 보조 페이지

- `utilities.css`의 `.container`에 모바일 전용 좌우 여백 규칙을 추가했다.
- `route-placeholder.module.css`에도 모바일/태블릿 타이포와 spacing을 추가해 `/compare`, `/lab` 페이지가 과하게 커 보이지 않도록 맞췄다.

### 수동 검증 메모

- 헤드리스 Edge로 홈과 `/market`을 각각 `390 / 430 / 768 / 1024 / 1440` 폭에서 캡처해 레이아웃을 확인했다.
- 모바일 구간에서 기준 칩 축약 표시 문제를 스크린샷으로 발견했고, 수정 후 다시 390 / 430 폭을 재확인했다.
- 스크린샷 파일은 `artifacts/responsive/` 아래에 생성해 두었다.

### 검증 결과

- `npm run lint` 성공
- `npm run build` 성공
- `npm run build`는 이 환경에서 샌드박스 내부 `spawn EPERM` 이슈가 있어, 동일 명령을 샌드박스 밖에서 다시 실행해 최종 확인했다.
