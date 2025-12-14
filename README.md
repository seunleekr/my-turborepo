# My Turborepo

Turborepo를 활용한 모노레포 프로젝트입니다. Next.js 16과 React 19를 사용하며, 다단계 폼 플로우 기능을 제공합니다.

## 프로젝트 구조

이 Turborepo는 다음과 같은 패키지와 앱을 포함합니다:

### 앱 (Apps)

- **`playground`**: Next.js 16 기반 애플리케이션
  - React 19 사용
  - 다단계 폼 플로우 구현 (이름, 생년월일, 전화번호)
  - 커스텀 `useStepFlow` 훅 제공
  - Modal 컴포넌트 포함
  - Tailwind CSS v4 사용

### 패키지 (Packages)

- **`@repo/ui`**: 공유 React 컴포넌트 라이브러리
  - `Button`: 기본 버튼 컴포넌트
  - `Card`: 링크 카드 컴포넌트
  - `Code`: 코드 표시 컴포넌트
- **`@repo/eslint-config`**: ESLint 설정 (Next.js 및 Prettier 포함)
- **`@repo/typescript-config`**: TypeScript 설정 파일들
  - `base.json`: 기본 설정
  - `nextjs.json`: Next.js 프로젝트용
  - `react-library.json`: React 라이브러리용

모든 패키지와 앱은 100% [TypeScript](https://www.typescriptlang.org/)로 작성되었습니다.

## 주요 기능

### 다단계 폼 플로우 (useStepFlow)

`apps/playground/app/hooks/useStepFlow.ts:7`에 구현된 커스텀 훅으로, 다음 기능을 제공합니다:

- **3단계 폼 프로세스**: 이름 → 생년월일 → 전화번호
- **유효성 검사**: 각 단계별 입력값 검증
- **자동 상태 관리**: step, canNext, isLastStep 등
- **제출 처리**: 마지막 단계에서 onSubmit 콜백 실행

사용 예시:
```tsx
const { step, canNext, next, submit, isLastStep, name, setName } = useStepFlow({
  onSubmit: async () => {
    console.log("제출!");
  },
});
```

### Modal 컴포넌트

`apps/playground/app/components/Modal.tsx:1`에 구현된 간단한 모달 컴포넌트:
- 전체 화면 오버레이
- 중앙 정렬 콘텐츠 박스
- 자식 컴포넌트 렌더링

## 기술 스택

### 프레임워크 & 라이브러리
- **Turborepo**: 모노레포 빌드 시스템
- **Next.js 16**: React 프레임워크
- **React 19**: UI 라이브러리
- **TypeScript 5.9**: 정적 타입 체크

### 개발 도구
- **ESLint**: 코드 린팅
- **Prettier**: 코드 포매팅
- **Tailwind CSS v4**: 유틸리티 CSS 프레임워크

## 시작하기

### 필수 요구사항

- Node.js >= 18
- npm 10.9.2 이상

### 설치

```bash
npm install
```

### 개발 서버 실행

모든 앱을 개발 모드로 실행:

```bash
npm run dev
```

특정 앱만 실행:

```bash
npx turbo dev --filter=playground
```

### 빌드

모든 앱과 패키지 빌드:

```bash
npm run build
```

특정 앱만 빌드:

```bash
npx turbo build --filter=playground
```

### 기타 명령어

```bash
# 린트 실행
npm run lint

# 타입 체크
npm run check-types

# 코드 포매팅
npm run format
```

## 프로젝트 파일 구조

```
my-turborepo/
├── apps/
│   └── playground/          # Next.js 애플리케이션
│       └── app/
│           ├── components/  # Modal 등 컴포넌트
│           ├── hooks/       # useStepFlow 커스텀 훅
│           ├── page.tsx     # 메인 페이지
│           └── layout.tsx   # 레이아웃
├── packages/
│   ├── ui/                  # 공유 UI 컴포넌트
│   ├── eslint-config/       # ESLint 설정
│   └── typescript-config/   # TypeScript 설정
├── package.json
└── turbo.json              # Turborepo 설정
```

## Turborepo 주요 설정

`turbo.json`에 정의된 태스크:

- **`build`**: 빌드 태스크 (의존성 순서대로 실행)
- **`dev`**: 개발 서버 (캐시 비활성화, 지속 실행)
- **`lint`**: 린트 실행
- **`check-types`**: TypeScript 타입 체크

## 유용한 링크

Turborepo에 대해 더 알아보기:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)

## 라이선스

Private 프로젝트
