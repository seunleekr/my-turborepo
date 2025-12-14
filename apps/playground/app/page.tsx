"use client";

import { useStepFlow } from "./hooks/useStepFlow";
import { Modal } from "./components/Modal";

export default function Page() {
  const {
    step,
    canNext,
    next,
    submit,
    isLastStep,
    name,
    setName,
    birthDate,
    setBirthDate,
    phoneNumber,
    setPhoneNumber,
  } = useStepFlow({
    onSubmit: async () => {
      console.log("제출!");
    },
  });

  const errorMessageByStep: Record<number, string> = {
    1: "이름을 입력해주세요.",
    2: "생년월일을 입력해주세요.",
    3: "전화번호를 입력해주세요.",
  };

  return (
    <Modal>
      <h1>현재 단계: {step}</h1>

      {/* Step별 입력 UI */}
      {step === 1 && (
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
      )}

      {step === 2 && (
        <input
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          placeholder="생년월일"
        />
      )}

      {step === 3 && (
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="전화번호"
        />
      )}

      {/* 에러 메시지 */}
      {!canNext && (
        <p style={{ color: "red" }}>
          {errorMessageByStep[step]}
        </p>
      )}

      {/* 버튼 */}
      <button
        onClick={isLastStep ? submit : next}
        disabled={!canNext}
      >
        {isLastStep ? "완료" : "다음 단계"}
      </button>
    </Modal>
  );
}
