import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import { Button, Dimensions, Image, Platform, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { Item } from "react-native-picker-select";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Text, View } from "../components/Themed";
import { IMG_PATH } from "../app/AxiosApi";
import { insertGift, postEmail } from "../app/gifts";
import { RootState } from "../app/store";
import RNPickerSelect from "react-native-picker-select";
import { useEffect } from "react";
import { user } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { CookieText } from "../components/StyledText";

import { constants } from "buffer";

const GiftDetailScreen = ({ navigation }: any) => {
  const gift = useSelector((state: RootState) => state.gifts.detailGift.gift!);
  const receivers = useSelector((state: RootState) => state.gifts.receiversInfo.receivers);
  const me = useSelector((state: RootState) => state.user.me);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    nickname: "",
    userId: 0,
    content: "",
  });

  const [receiverList, setReceiverList] = useState<Item[]>([]);

  // const onChangeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   console.log("onChangeSelect, e.target.value:", value);
  //   setForm({ ...form, userId: Number(value) });
  // };

  const setNickName = (value: any) => {
    // console.log("nickname value", value);
    setForm({ ...form, nickname: value });
  };

  const onChangeContent = (value: any) => {
    // console.log("content:", value);
    setForm({ ...form, content: value });
  };

  const onSubmit = () => {
    // console.log("onSubmit, form:", form);
    const newForm = { ...form, giftId: gift.id };
    // console.log("-----newForm-----\n", newForm);
    dispatch(insertGift(newForm));
    dispatch(
      postEmail({
        //address: me.userId, (?????? ???????????? ??????????????? ??? ???????????? ???????????????)
        title: "????????? ???????????????",
        giftName: gift.name,
        giftContent: gift.content,
        giftPrice: Number(gift.price),
        message: "?????? ???????????????",
      })
    );
    navigation.navigate("Gift");
  };

  const onCancle = () => {
    navigation.goBack();
  };

  // console.log("receiverList:", receiverList);
  // console.log("receivers", receivers);

  useEffect(() => {
    const newList = receivers?.map((x) => {
      // console.log("x:", x);
      return {
        label: x!.name,
        value: x!.id,
      };
    });
    setReceiverList(newList);
  }, [receivers]);

  return (
    <SafeAreaView style={styles.container}>
      <CookieText style={styles.title}>{gift?.content}</CookieText>

      <Image source={{ uri: `${IMG_PATH}${gift?.img}` }} style={{ width: 400, height: 300, borderRadius: 10 }} key={gift?.id}></Image>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <CookieText style={{ flex: 0.4, fontSize: 20 }}>?????????</CookieText>
        <TextInput style={styles.inputStyle} placeholder="???????????? ???????????????" onChangeText={(newNickName) => setNickName(newNickName)}></TextInput>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <CookieText style={{ flex: 0.3, fontSize: 20 }}>?????? ??????</CookieText>
        <View style={{ flex: 0.7 }}>
          <RNPickerSelect
            onValueChange={(value) => setForm({ ...form, userId: value })}
            placeholder={{ label: "????????????", value: null }}
            items={receiverList}
          ></RNPickerSelect>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <CookieText style={{ flex: 0.4, fontSize: 20 }}>?????????</CookieText>
        <TextInput
          multiline
          numberOfLines={4}
          placeholder="???????????? ???????????????"
          onChangeText={(newContent: any) => onChangeContent(newContent)}
          value={form?.content}
          style={{ ...styles.inputStyle }}
        />
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.checkInput} onPress={() => onSubmit()}>
          <CookieText style={{ fontSize: 25, textAlign: "center" }}>????????????</CookieText>
        </TouchableOpacity>
        {/* <Button title="????????????" onPress={() => onSubmit} color="blue"></Button> */}
        {/* <TouchableOpacity style={styles.checkInput} onPress={() => onCancle()}>
          <CookieText style={{ fontSize: 20, textAlign: "center" }}>
            ??????
          </CookieText>
        </TouchableOpacity> */}

        {/* <Button title="??????" onPress={() => onCancle} color="blue"></Button> */}
      </View>
    </SafeAreaView>
  );
};

export default GiftDetailScreen;

const fullWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "beige",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  inputStyle: {
    fontSize: 20,
    flex: 0.6,
    ...Platform.select({
      ios: {
        fontFamily: "cookieRun",
        fontWeight: "600",
        fontStyle: "normal",
      },
      android: {
        fontFamily: "cookieRun",
      },
    }),
  },
  checkInput: {
    flex: 0.8,
    backgroundColor: "#FFDC37",
    borderRadius: 10,
    color: "black",
    alignItems: "stretch",
    fontSize: 25,
  },
  button: {
    width: fullWidth * 0.9,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
});
