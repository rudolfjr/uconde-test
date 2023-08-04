import { useState } from "react";
import { usePlans } from "@context/PlansContext";

export const useFindSons = () => {
  const { plans } = usePlans();

  const [existSon, setExistSon] = useState(false);

  const validatePlanSon = (son: string) => {
    try {
      const childPrefix = son + ".";
      const existSonInfo = plans.some((plan) => {
        const key = Object.keys(plan)[0]; // Obtemos a primeira chave do objeto
        return key.startsWith(childPrefix);
      });

      if (existSonInfo) {
        setExistSon(true);
        return true;
      } else {
        setExistSon(false);
        return false;
      }
    } catch (error) {
      console.error("Error to get son:", error);
    }
  };

  return { existSon, validatePlanSon };
};
