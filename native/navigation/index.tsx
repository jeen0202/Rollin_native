/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import UsersScreen from "../screens/Papers/UsersScreen";
import PaperAddScreen from "../screens/Papers/PaperAddScreen";
import PaperDetailScreen from "../screens/Papers/PaperDetailScreen";
import MyPapersScreen from "../screens/Papers/MyPaperScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import LoginScreen from "../screens/login/LoginScreen";
import CommentScreen from "../screens/comment/CommentScreen";
import BoardAddScreen from "../screens/BoardAddScreen";
import GiftDetailScreen from "../screens/GiftDetailScreen";
import GiftScreen from "../screens/GiftScreen";
import JoinScreen from "../screens/login/JoinScreen";
import PaperModalScreen from "../screens/Papers/PaperModalScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {isLogin ? <RootNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: "beige" }, headerShadowVisible: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        {/* <Stack.Screen name="Modal" component={ModalScreen} /> */}
        <Stack.Screen name="PaperModal" component={PaperModalScreen} options={{ title: "선물확인" }} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="MyPapers" component={MyPapersScreen} />
        <Stack.Screen name="PaperAdd" component={PaperAddScreen} />
        <Stack.Screen name="PaperDetail" component={PaperDetailScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="BoardAdd" component={BoardAddScreen} options={{ title: "게시판 등록" }} />
        <Stack.Screen name="Comment" component={CommentScreen} options={{ title: "이글의 댓글" }} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Gift" component={GiftScreen} />
        <Stack.Screen name="GiftDetail" component={GiftDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const LoginTab = createBottomTabNavigator<RootTabParamList>();

function LoginNavigator() {
  const colorScheme = useColorScheme();
  return (
    <LoginTab.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: { backgroundColor: "beige" },
      }}
    >
      <LoginTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "로그인",
          tabBarIcon: ({ color }) => <Ionicons name="person" size={25} color={color} />,
        }}
      ></LoginTab.Screen>
      <LoginTab.Screen
        name="Join"
        component={JoinScreen}
        options={{
          title: "회원가입",
          tabBarIcon: ({ color }) => <Ionicons name="person-add" size={25} color={color} />,
        }}
      ></LoginTab.Screen>
    </LoginTab.Navigator>
  );
}
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: { backgroundColor: "beige" },
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Feed",
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate("Modal")}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}
          //   >
          //     <FontAwesome name="info-circle" size={25} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
          //   </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="Users"
        component={UsersScreen}
        options={{
          title: "Paper",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="edit" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Gift"
        component={GiftScreen}
        options={({ navigation }: RootTabScreenProps<"Gift">) => ({
          title: "Gift",
          tabBarIcon: ({ color }) => <TabBarIcon name="gift" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
