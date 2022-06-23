import { Link } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { StyleSheet, TextInput, Button, Image, FlatList } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { IMG_PATH } from "../store/AxiosApi";
import {
  load2,
  requestGetGiftName,
  requestSort,
  updateView,
} from "../store/gifts";
import { RootState } from "../store/store";

const GiftScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const allGifts = useSelector((state: RootState) => state.gifts.allGifts);
  // const myId = localStorage.getItem("loginUser");

  const [searchKey, setSearchKey] = React.useState("");
  const [sortKey, setSortKey] = React.useState("default");

  useEffect(() => {
    dispatch(requestSort({ allGifts: allGifts, sortKey: sortKey }));
    // console.log("allGifts:", allGifts);
  }, [sortKey, dispatch]);

  const onSubmitSearch = () => {
    // console.log("searchKey : ", searchKey);
    dispatch(requestGetGiftName(searchKey));
  };
  // const onClickImg = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
  //   // dispatch(load2(Number.parseInt(e.currentTarget.id)));

  //   // dispatch(updateView(Number.parseInt(e.currentTarget.id)));
  //   console.log("detailGift로 이동");
  // };

  const goDetail = (id: any) => {
    console.log(id);
    dispatch(load2(Number.parseInt(id)));

    dispatch(updateView(Number.parseInt(id)));

    navigation.navigate("GiftDetail");
  };

  const renderGifts = ({ item }: any) => {
    return (
      <View style={{ margin: 30, flex: 0.5 }}>
        {/* <Link to={{ screen: "GiftDetail", params: item }}> */}
        <TouchableOpacity onPress={() => goDetail(item.id)}>
          <Image
            source={{ uri: `${IMG_PATH}${item.img}` }}
            style={{ width: 140, height: 100, borderRadius: 10 }}
            key={item.id}
          ></Image>
          <Text ellipsizeMode="tail" style={{ textAlign: "center" }}>
            {item.name}
          </Text>
        </TouchableOpacity>
        {/* </Link> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="Search..."
            onChangeText={(newText) => setSearchKey(newText)}
          ></TextInput>
          <Button title="검색" onPress={onSubmitSearch} color="blue"></Button>
        </View>
        <View>
          <Text>총상품개수 : {allGifts.length}</Text>
        </View>
        <View style={{ flex: 1, flexWrap: "nowrap", flexDirection: "row" }}>
          <FlatList
            data={allGifts}
            renderItem={(item) => renderGifts(item)}
            numColumns={2}
            disableVirtualization
          ></FlatList>
        </View>
      </View>
    </View>
  );
};

export default GiftScreen;

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
