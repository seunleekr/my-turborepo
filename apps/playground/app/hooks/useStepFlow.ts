import { useState } from "react";

export function useStepFlow () {
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [BirthDate, setBirthDate] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');

    const canNext = () => {
        if ( step === 1 && name !== '') return;
        if ( step === 2 && BirthDate !== '') return;
        if ( step === 3 && PhoneNumber !== '') return;
    };

    const next = () => {
        if (!canNext) return;
        setStep((prev) => prev + 1);
    }

    return {
        step,
        next,
        canNext,
        name,
        setName,
        BirthDate,
        setBirthDate,
        PhoneNumber,
        setPhoneNumber
    }
}