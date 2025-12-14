"use client";

import { useStepFlow } from "./hooks/useStepFlow";
import { Modal } from "./components/Modal";

export default function Page() {
  const { step, next, canNext } = useStepFlow();
  const errorMessageByStep: Record<number,string> = {
    1: "이름을 입력해주세요.",
    2: "생년월일을 입력해주세요.",
    3: "전화번호를 입력해주세요.",
  }

  return (
    <Modal>
      <h1>현재 단계: </h1>
      <p>{step} 단계</p>

      {!canNext && (
      <p style={{ color: "red" }}>
        {errorMessageByStep[step]}
      </p>
      )}

      <button onClick={next} disabled={!canNext}>
      다음 단계
      </button>
    </Modal>
  )
}