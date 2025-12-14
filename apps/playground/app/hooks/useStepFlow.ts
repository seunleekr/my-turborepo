import { useState } from "react";

export function useStepFlow () {
    // 1. step 상태 만들기 (초기값: 1)
    const [step, setStep] = useState(1);

    // 2. 다음 단계로 가는 함수
    const next = () => {
        setStep(prev => prev + 1);
    }
    // 3. 밖에서 쓸 것들 return
    return {
        step,
        next,
    }
}