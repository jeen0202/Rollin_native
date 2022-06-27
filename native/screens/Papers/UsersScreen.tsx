import { Text, View } from "../../components/Themed";
import { Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useIsFocused, useLinkTo } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkLogin, login, logout } from "../../app/users";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import UserListScreen from "./UserListScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { CookieText } from "../../components/StyledText";
import LogoutBar from "../login/LogoutBar";

export default function UsersScreen() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const users = useSelector((state: RootState) => state.user.users);
  useEffect(() => {
    if (isFocused) {
      dispatch(checkLogin());
    }
  }, [isFocused]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "beige" }}>
      <LogoutBar />
      <View style={styles.container}>
        <CookieText style={styles.title}>사용자 목록</CookieText>
        <View style={styles.separator} lightColor="beige" darkColor="rgba(255,255,255,0.1)" />
        <UserListScreen listdata={users}></UserListScreen>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "beige",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
