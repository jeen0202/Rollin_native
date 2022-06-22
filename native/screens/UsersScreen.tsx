import { Text, View } from "../components/Themed";
import { FlatList, StyleSheet } from "react-native";
import { useIsFocused, useLinkTo } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "../app/users";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import ListScreen from "./ListScreen";

export default function UsersScreen() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const users = useSelector((state: RootState) => state.user.users);
  useEffect(() => {
    isFocused ? dispatch(login(true)) : null;
  }, [isFocused]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ListScreen listdata={users}></ListScreen>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
