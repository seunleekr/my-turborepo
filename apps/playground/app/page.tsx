"use client";

import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(1);

  return (
    <>
    <h1>현재 Step: {step}</h1>
    <button onClick={() => setStep(step + 1)}>다음</button>
    </>
  )
}