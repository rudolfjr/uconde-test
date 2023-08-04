import { plansGetAll } from "@storage/plans/plansGetAll";

export const useSearchPlans = () => {
  const searchPlan = async (search: string) => {
    try {
      const plans = await plansGetAll();

      const regex = new RegExp(search, "i"); // 'i' é para case-insensitive
      return plans.filter((obj) => {
        const item = Object.values(obj)[0]; // Obtém o objeto interno
        return regex.test(item.name);
      });
    } catch (error) {
      console.error("Error searching plan:", error);
    }
  };

  return { searchPlan };
};
