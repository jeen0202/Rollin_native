import { Link } from "@react-navigation/native";
import { FlatList, Image, Text, View,Button ,StyleSheet} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useIsFocused, useLinkTo } from "@react-navigation/native";
import { selectAllBoards } from "../app/board";
import { IMG_PATH } from "../app/AxiosApi";

const BoardScreen = () => {
  const Boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const selectMy = () => {
    dispatch(selectAllBoards());
  };
  useEffect(() => {
    selectMy();
  }, [isFocused]);
  console.log("Posts입니다  ",Boards);
  return (
    <FlatList data={Boards} renderItem={(item) => renderItem(item)} contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}></FlatList>
  );
};
const renderItem = ({ item }) => {
  return (
    // <Link to={{ screen: "PostDetail", params: item }}>     // </Link>
      <View style={styles.container}>
        <Text>{item.userId}</Text>
        {/* <Text>{item.date}</Text> */}
        <Image
          source={{ uri: `${IMG_PATH}${item.img}` }}
          style={{ width: '100%', height: 150,resizeMode:'contain' }}
        ></Image>
          {/* <Button title="댓글"></Button> */}
        <Text>{item.content}</Text>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
export default BoardScreen;
