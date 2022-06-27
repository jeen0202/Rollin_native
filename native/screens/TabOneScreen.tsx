import { Link } from "@react-navigation/native";
import { FlatList, Image, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useIsFocused, useLinkTo } from "@react-navigation/native";
import { selectAllBoards } from "../app/board";
import { IMG_PATH } from "../app/AxiosApi";
import { View, Text } from "../components/Themed";
import BoardScreen from "./BoardScreen";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CookieText } from "../components/StyledText";
import LogoutBar from "./login/LogoutBar";

const TabOneScreen = ({}) => {
  // <Button title="+" onPress={() => {linkto("/Users")}}></Button>
  return (
    <SafeAreaView style={styles.container}>
      <LogoutBar />
      <View style={styles.container}>
        {/* <BoardScreen board={Boards}></BoardScreen> */}
        <BoardScreen></BoardScreen>
      </View>
      <View
        style={{
          backgroundColor: "#FFDC37",
          alignItems: "center",
        }}
      >
        <Link to={{ screen: "BoardAdd" }}>
          <CookieText
            style={{
              backgroundColor: "#FFDC37",
              color: "black",
              fontSize: 30,
            }}
          >
            글 작성하러 가기
          </CookieText>
        </Link>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "beige",
  },
});
export default TabOneScreen;
