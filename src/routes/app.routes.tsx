import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Plans } from "@screens/Plans";
import { InsertPlans } from "@screens/InsertPlans";
import { ViewPlans } from "@screens/ViewPlans";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="plans" component={Plans} />
      <Screen name="add" component={InsertPlans} />
      <Screen name="view" component={ViewPlans} />
    </Navigator>
  );
}
