import { useState } from "react";

type UseStepFlowOptions = {
    onSubmit: () => Promise<void> | void;
};

    export function useStepFlow(options: UseStepFlowOptions) {
        const [step, setStep] = useState(1);
        const [name, setName] = useState('');
        const [birthDate, setBirthDate] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const MAX_STEP = 3;
        const isLastStep = step === MAX_STEP;
      
        const canNext =
          (step === 1 && name !== '') ||
          (step === 2 && birthDate !== '') ||
          (step === 3 && phoneNumber !== '');
              
        const next = () => {
            if (!canNext) return;
            if (isLastStep) return;

            setStep((prev) => prev + 1);
        };

        const submit = async () => {
            if (!isLastStep) return;

            await options.onSubmit();
            setStep(1);
        };
      
        return {
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
        };
      }