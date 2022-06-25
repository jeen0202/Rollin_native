import { Link } from "@react-navigation/native";
import { FlatList, Image, Text, View, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useIsFocused, useLinkTo } from "@react-navigation/native";
import { selectAllBoards } from "../app/board";
import { SafeAreaView } from "react-native-safe-area-context";
import { IMG_PATH } from "../app/AxiosApi";
import { RootState } from "../app/store";
import { CookieText } from "../components/StyledText";

let imagePath = require("./img_640x640.jpg");

const BoardScreen = () => {
  const Boards = useSelector((state: any) => state.boards.allBoards);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const selectMy = () => {
    dispatch(selectAllBoards());
  };
  const onComment = () => {
    console.log("dsd");
  };

  useEffect(() => {
    if (isFocused) {
      selectMy();
    }
  }, [isFocused]);
  // console.log("Board입니다  ", Boards);

  return <FlatList data={Boards} renderItem={(item) => renderItem(item)} contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}></FlatList>;
};
const renderItem = ({ item }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Link to={{ screen: "Comment" }}>
        <Image
          source={{ uri: `${IMG_PATH}${item.img}` }}
          style={{
            paddingLeft: 50,
            width: 300,
            height: 300,
          }}
        ></Image>
        <View style={styles.row}>
          <Image
            style={{
              width: 30,
              height: 30,
              borderRadius: 100 / 2,
              backgroundColor: "beige",
              paddingRight: 20,
            }}
            source={imagePath}
          ></Image>
          {/* <CookieText
            style={{
              fontWeight: "bold",
              fontSize: 20,
              paddingRight: 20,
            }}
          >
            {item.userId}
          </CookieText> */}
          <CookieText
            style={{
              paddingTop: 5,
              fontSize: 30,
            }}
          >
            {item.content}
          </CookieText>
        </View>
      </Link>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "beige",
    flex: 1,
  },
  row: {
    flexDirection: "row",
  },
});
export default BoardScreen;