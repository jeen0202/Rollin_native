import React, { useEffect, useState } from "react";
import { GestureResponderEvent, TouchableOpacity } from "react-native";
import { StyleSheet, TextInput, Button, Image, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import RNPickerSelect from "react-native-picker-select";
import { Text, View } from "../components/Themed";
import { IMG_PATH } from "../app/AxiosApi";
import {
  getGift,
  getReceivers,
  requestGetGiftName,
  requestSort,
  updateView,
} from "../app/gifts";
import { RootState } from "../app/store";

const GiftScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const allGifts = useSelector((state: RootState) => state.gifts.allGifts);
  // const myId = localStorage.getItem("loginUser");

  const [searchKey, setSearchKey] = React.useState("");
  const [sortKey, setSortKey] = React.useState("default");

  useEffect(() => {
    dispatch(requestSort({ allGifts: allGifts, sortKey: sortKey }));
    // console.log("allGifts:", allGifts);
  }, [sortKey]);

  const onSubmitSearch = () => {
    // console.log("searchKey : ", searchKey);
    dispatch(requestGetGiftName(searchKey));
  };

  const goDetail = (id: any) => {
    console.log(id);
    dispatch(getGift(Number.parseInt(id)));

    dispatch(updateView(Number.parseInt(id)));

    // 로그인한 아이디값 필요
    dispatch(getReceivers(1));

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
          <RNPickerSelect
            onValueChange={(value) => setSortKey(value)}
            placeholder={{ label: "정렬", value: null }}
            items={[
              { label: "구매순", value: "count" },
              { label: "조회순", value: "view" },
              { label: "가격높은순", value: "hprice" },
              { label: "가격낮은순", value: "lprice" },
            ]}
          ></RNPickerSelect>
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
