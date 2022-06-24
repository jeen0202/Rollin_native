import { Link } from "@react-navigation/native";
import { FlatList, Image,Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useIsFocused, useLinkTo } from "@react-navigation/native";
import { selectAllBoards } from "../app/board";
import { IMG_PATH } from "../app/AxiosApi";
import {View,Text} from "../components/Themed"
import BoardScreen from "./BoardScreen";
import {StyleSheet} from "react-native";

const TabOneScreen = ({ }) => {

  // <Button title="+" onPress={() => {linkto("/Users")}}></Button>
  return (
    <>
      <View>
        <Link to={{screen: "BoardAdd"}}>
        <Text>게시글 작성하러가기</Text>
        </Link>
      </View>
      <View style={styles.container}>
        {/* <BoardScreen board={Boards}></BoardScreen> */}
        <BoardScreen></BoardScreen>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
export default TabOneScreen;
