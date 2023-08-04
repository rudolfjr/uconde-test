import { useState } from "react";

function useValidateSequence() {
  const [error, setError] = useState<string | null>(null);

  const validate = (input: string) => {
    setError(null);

    if (!/^[0-9.]+$/.test(input)) {
      setError("A entrada deve conter apenas números e pontos.");
      return false;
    }

    const sequences = input.split(".");
    for (let i = 0; i < sequences.length; i++) {
      if (i === sequences.length - 1 && Number(sequences[i]) > 999) {
        setError("A última sequência não pode ser maior que 999.");
        return false;
      }

      if (!sequences[i]) {
        setError("Sequência inválida. Não pode haver sequências vazias.");
        return false;
      }
    }

    return true;
  };

  return { error, validate };
}

export default useValidateSequence;
