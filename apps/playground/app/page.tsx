"use client";

import { useStepFlow } from "./hooks/useStepFlow";

export default function Page() {
  const { step, next, canNext } = useStepFlow();

  return (
    <div>
      <h1>현재 단계: </h1>
      <p>{step} 단계</p>
      <button onClick={next} disabled={!canNext}>
      다음 단계
      </button>
    </div>
  )
}