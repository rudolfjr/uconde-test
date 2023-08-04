import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { plansGetAll } from "./plansGetAll";

export async function plansDelete(code: string) {
  try {
    const plans = await plansGetAll();

    const indexToDelete = plans.findIndex((plan) => plan[code]);
    if (indexToDelete !== -1) {
      plans.splice(indexToDelete, 1);
    }

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(plans));
  } catch (error) {
    throw error;
  }
}
