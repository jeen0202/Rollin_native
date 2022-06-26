import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Image, Platform, StyleSheet, TextInput } from "react-native";
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
        //address: me.userId, (원래 이메일로 로그인하면 그 이메일을 보내줘야함)
        title: "구매한 내역입니다",
        giftName: gift.name,
        giftContent: gift.content,
        giftPrice: Number(gift.price),
        message: "상품 내역입니다",
      })
    );
    navigation.navigate("Gift");
  };

  const onCancle = () => {
    navigation.navigate("Gift");
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
      <Text style={styles.title}>{gift?.content}</Text>
      <Image source={{ uri: `${IMG_PATH}${gift?.img}` }} style={{ width: 230, height: 180, borderRadius: 10 }} key={gift?.id}></Image>
      <Text style={{ margin: 10 }}>닉네임</Text>
      <TextInput placeholder="닉네임을 입력하세요" onChangeText={(newNickName) => setNickName(newNickName)}></TextInput>
      <Text style={{ margin: 20 }}>받는 사람</Text>
      <RNPickerSelect
        onValueChange={(value) => setForm({ ...form, userId: value })}
        placeholder={{ label: "받는사람", value: null }}
        items={receiverList}
      ></RNPickerSelect>
      <Text style={{ margin: 20 }}>메시지</Text>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="메시지를 입력하세요"
        onChangeText={(newContent: any) => onChangeContent(newContent)}
        value={form?.content}
        style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
      />
      <Button title="선물하기" onPress={() => onSubmit} color="blue"></Button>
      <Button title="취소" onPress={() => onCancle} color="blue"></Button>
    </SafeAreaView>
  );
};

export default GiftDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "beige",
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
});
