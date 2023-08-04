import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { plansGetAll } from "./plansGetAll";
import { PlanProps } from "@type/plans";

export async function plansCreate(newPlan: PlanProps) {
  try {
    const storedPlans: PlanProps[] = await plansGetAll();
    const storage = JSON.stringify(
      storedPlans && Array.isArray(storedPlans)
        ? [...storedPlans, newPlan]
        : [newPlan]
    );
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
