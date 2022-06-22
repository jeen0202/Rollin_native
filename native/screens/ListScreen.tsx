import { Link } from "@react-navigation/native";
import { FlatList, Image } from "react-native";
import { IMG_PATH } from "../app/AxiosApi";
import { View, Text } from "../components/Themed";
import { listProps } from "../types";

export default function ListScreen(props: listProps) {
  return <FlatList data={props.listdata} renderItem={(item: any) => renderItem(item)} numColumns={3}></FlatList>;
}
function renderItem(_item: any) {
  const { item } = _item;
  return (
    <Link to={{ screen: "PaperDetail", params: { id: item.id, name: item.name } }}>
      <View style={{ margin: 10, borderColor: "gray", borderWidth: 1 }}>
        <Image source={{ uri: `${item.img}` }} style={{ width: 100, height: 100 }}></Image>
        <Text>{item.name}</Text>
      </View>
    </Link>
  );
}
