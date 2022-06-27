import React, { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "../../components/Themed";
import { gift, paper, user } from "../../types";
import { useDispatch } from "react-redux";
import { requestGetGift, selectPaper } from "../../app/paper";
import { CookieText } from "../../components/StyledText";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PaperDetailScreen({ navigation, route }: any) {
  const paper: paper = route.params;
  // const [isModalOpen, setisModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  useEffect(() => {
    if (paper.giftId !== null && paper.giftId !== undefined) {
      dispatch(requestGetGift(paper.giftId));
      let check = Alert.alert("선물 확인", "선물이 있습니다. 확인하시겠습니까?", [
        { text: "확인하기", onPress: () => navigation.navigate("PaperModal") },
        { text: "취소", style: "cancel" },
      ]);
    }
    dispatch(selectPaper(paper));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <CookieText style={styles.title}>{paper.nickname}님에게서 온 Rollin</CookieText>
      <CookieText style={styles.date}>{paper.date!.toString()}</CookieText>
      <ScrollView style={{ margin: 10 }}>
        <CookieText style={styles.content}>{paper.content}</CookieText>
      </ScrollView>
      {paper.giftId !== null && paper.giftId !== undefined ? (
        <View>
          <TouchableOpacity style={styles.checkGift} onPress={() => navigation.navigate("PaperModal")}>
            <CookieText style={{ fontSize: 20 }}>선물 확인</CookieText>
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    // alignItems: "center",
    backgroundColor: "beige",
    // justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  date: {
    marginTop: 5,
    fontSize: 10,
    color: "gray",
    textAlign: "right",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  content: {
    fontSize: 20,
  },
  checkGift: {
    backgroundColor: "#CCCCFF",
    color: "black",
    alignItems: "center",
  },
});
