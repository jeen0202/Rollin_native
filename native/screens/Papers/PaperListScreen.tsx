import { Link } from "@react-navigation/native";
import { FlatList, Image } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { View, Text } from "../../components/Themed";
import { listStyles, PaperListProps, user } from "../../types";

export default function PaperListScreen(props: PaperListProps) {
  return <FlatList data={props.listData} renderItem={(item: any) => <RenderItem item={item} />} numColumns={3} disableVirtualization={false}></FlatList>;
}
function RenderItem(props: any) {
  const { item } = props.item;
  return (
    <View style={{ margin: 10 }}>
      <Link to={{ screen: "PaperDetail", params: { id: item.id, name: item.giftid } }}>
        <View style={listStyles.item}>
          <Image
            source={{ uri: "https://raw.githubusercontent.com/jeen0202/Rollin/main/React/public/img/note.png" }}
            style={{ width: 100, height: 100 }}
          ></Image>
          <Text>{item.nickname}</Text>
        </View>
      </Link>
    </View>
  );
}
