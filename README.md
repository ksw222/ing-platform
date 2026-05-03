# ING Platform

ING는 전성분 데이터를 정리하고, 사용자가 직접 고른 회피 기준에 맞춰
화장품을 먼저 보여주는 성분 기준 제품 매칭 MVP입니다.

제품을 좋다거나 나쁘다고 판정하지 않고, 매번 다시 열게 되는 성분표를
기준 중심으로 정리해보는 흐름을 먼저 검증하고 있습니다.

## 현재 MVP 범위

### 구현됨

- 랜딩페이지
- 기준 선택 데모
- 제품 매칭 예시 카드
- 베타 알림용 waitlist UI
- `/market` 제품 매칭 MVP 화면

### 아직 없음

- 실제 DB 저장
- 실제 성분 데이터 연동
- 실제 제품 상세
- 인증
- 검색
- 구매 링크 연동

## 기술 스택

- Next.js 16
- TypeScript
- App Router
- CSS Modules
- CSS Variables
- ESLint

## 실행 방법

```bash
npm install
npm run dev
npm run build
npm run lint
```

현재 레포는 webpack 기반 `next dev` / `next build`를 기본으로 사용합니다.
Turbopack 이슈 확인이 필요할 때만 `npm run dev:turbopack`,
`npm run build:turbopack`을 사용합니다.

## Google Form 연동 방법

waitlist 섹션은 기본적으로 로컬 상태로만 동작합니다. Google Form 링크를 함께
노출하려면 프로젝트 루트에 `.env.local` 파일을 만들고 아래 값을 넣어주세요.

```bash
NEXT_PUBLIC_WAITLIST_FORM_URL=https://example.com/your-form
```

값이 있으면 waitlist 섹션에 `Google Form으로 30초 만에 신청하기` 링크가
함께 보입니다. 값이 없어도 기존 로컬 폼은 그대로 동작합니다.

## 배포

Vercel 배포를 기준으로 바로 올릴 수 있는 구조로 유지하고 있습니다.

## 참고

현재 제품 정보와 매칭 결과는 랜딩 시연용 예시이며, 제품 안전성, 의학적
효능, 피부 적합성을 보장하지 않습니다.
