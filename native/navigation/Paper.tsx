import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaperAddScreen from "../screens/PaperAddScreen";
import PaperDetailScreen from "../screens/PaperDetailScreen";
import PaperScreen from "../screens/PaperScreen";
import { PaperStackParamList, RootStackParamList, RootTabParamList, RootTabScreenProps } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

const Stack = createNativeStackNavigator<PaperStackParamList>();
export default function PaperNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={PaperScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={PaperDetailScreen} options={{ title: "쪽지 상세보기" }} />
      <Stack.Screen name="Add" component={PaperAddScreen} options={{ title: "새 쪽지 작성" }} />
    </Stack.Navigator>
  );
}
