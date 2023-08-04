import { useState } from "react";
import { usePlans } from "@context/PlansContext";

export const useFindPlan = () => {
  const { plans } = usePlans();

  const [existPlan, setExistPlan] = useState(false);

  const validatePlan = (father: string) => {
    try {
      const existPlanInfo = plans.find((plan) => plan[father]);

      if (existPlanInfo) {
        setExistPlan(true);
        return true;
      } else {
        setExistPlan(false);
        return false;
      }
    } catch (error) {
      console.error("Error to get plan:", error);
    }
  };

  return { existPlan, validatePlan };
};
