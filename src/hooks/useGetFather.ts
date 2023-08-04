import { usePlans } from "@context/PlansContext";

export const useGetFather = () => {
  const { plans } = usePlans();

  const getFather = (father: string) => {
    try {
      const planCode = plans.find((plan) => plan[father]);

      const fatherCode = planCode && planCode[father];

      if (fatherCode) {
        return fatherCode;
      } 
    } catch (error) {
      console.error("Error to get father:", error);
    }
  };

  return { getFather };
};
