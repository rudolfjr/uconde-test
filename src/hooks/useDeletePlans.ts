import { plansDelete } from "@storage/plans/plansDelete";

export const useDeletePlans = () => {
  const deletePlan = async (code: string) => {
    try {
      await plansDelete(code);
    } catch (error) {
      console.error("Error deleting plan:", error);
    }
  };

  return { deletePlan };
};
