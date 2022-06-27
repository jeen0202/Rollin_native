import React, { useEffect, useState } from "react";
import {
  GestureResponderEvent,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
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
import { Row } from "reactstrap";

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
      <KeyboardAvoidingView
        style={{
          flex: 1,
          alignItems: "stretch",
          backgroundColor: "#FABEBE",
        }}
      >
        <View style={{ backgroundColor: "#FABEBE", alignItems: "center" }}>
          <Text style={{ paddingTop: 50, fontSize: 30 }}>선물하기</Text>
        </View>
        <KeyboardAvoidingView
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#FABEBE",
          }}
        >
          <TextInput
            style={{
              marginTop: 20,
              paddingHorizontal: 10,
              height: 40,
              borderRadius: 10,
              borderColor: "gray",
              borderWidth: 1,
            }}
            placeholder="Search..."
            onChangeText={(newText) => setSearchKey(newText)}
          ></TextInput>
          <Button
            title="검색"
            onPress={onSubmitSearch}
            color="#F07878"
          ></Button>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>

      <KeyboardAvoidingView style={styles.body}>
        <KeyboardAvoidingView
          style={{
            backgroundColor: "#FFF0F0",
            borderRadius: 10,
            alignItems: "flex-end",
          }}
        >
          <RNPickerSelect
            onValueChange={(value) => setSortKey(value)}
            placeholder={{ color: "#FF6E6E", label: "정렬", value: null }}
            items={[
              { label: "구매순", value: "count" },
              { label: "조회순", value: "view" },
              { label: "가격높은순", value: "hprice" },
              { label: "가격낮은순", value: "lprice" },
            ]}
          ></RNPickerSelect>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: "center", margin: 10 }}>
            <Text>총상품개수 : {allGifts.length}</Text>
          </View>
          <View style={{ flex: 20, flexWrap: "nowrap", flexDirection: "row" }}>
            <FlatList
              data={allGifts}
              renderItem={(item) => renderGifts(item)}
              numColumns={2}
              disableVirtualization
            ></FlatList>
          </View>
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default GiftScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textInput: {},
  body: {
    flex: 4,
  },
  search: {
    flexDirection: "row",
    margin: 10,
    alignItems: "stretch",
  },
});
