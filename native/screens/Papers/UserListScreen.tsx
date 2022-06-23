import { Link } from "@react-navigation/native";
import { FlatList, Image } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { View, Text } from "../../components/Themed";
import { listStyles, UserListProps } from "../../types";

export default function UserListScreen(props: UserListProps) {
  const me = useSelector((state: RootState) => state.user.me);
  return (
    <FlatList data={props.listdata} renderItem={(item: any) => <RenderItem item={item} me={me} />} numColumns={3} disableVirtualization={false}></FlatList>
  );
}
function RenderItem(props: any) {
  const { item } = props.item;
  const me = props.me;
  return (
    <View style={{ margin: 10 }}>
      <Link to={{ screen: item.id === me?.id ? "MyPapers" : "PaperAdd", params: { id: item.id, name: item.name } }}>
        <View style={listStyles.item}>
          <Image source={{ uri: `${item.img}` }} style={{ width: 100, height: 100 }}></Image>
          <Text>{item.name}</Text>
        </View>
      </Link>
    </View>
  );
}
