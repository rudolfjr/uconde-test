import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { PlanProps } from "@type/plans";

export async function plansGetAll() {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);

    const plans: PlanProps[] = storage ? JSON.parse(storage) : [];

    plans.sort((a, b) => {
      const keyA = Object.keys(a)[0];
      const keyB = Object.keys(b)[0];

      const partsA = keyA.split(".").map(Number);
      const partsB = keyB.split(".").map(Number);

      for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
        if (partsA[i] === undefined) return -1;

        if (partsB[i] === undefined) return 1;

        if (partsA[i] !== partsB[i]) {
          return partsA[i] - partsB[i];
        }
      }

      return 0;
    });

    return plans;
  } catch (error) {
    throw error;
  }
}
