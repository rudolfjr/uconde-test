import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function plansClear() {
  try {
    await AsyncStorage.removeItem(GROUP_COLLECTION);
  } catch (error) {
    throw error;
  }
}
