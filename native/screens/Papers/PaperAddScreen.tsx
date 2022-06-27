import React, { useEffect, useState } from "react";

import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "../../components/Themed";
import EditScreenInfo from "../../components/EditScreenInfo";
import { paper, user } from "../../types";
import { useDispatch } from "react-redux";
import { addPaper } from "../../app/paper";
import { CookieText } from "../../components/StyledText";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PaperAddScreen({ route, navigation }: any) {
  const dispatch = useDispatch();
  const selectedUser: user = route.params;
  const [Paper, setPaper] = useState<paper>();
  useEffect(() => {
    setPaper({ ...Paper!, userId: selectedUser!.id });
  }, []);

  function onChangeHandler(name: string, text: string) {
    const newPaper = { ...Paper!, [name]: text };
    setPaper(newPaper);
  }
  function submitPaper() {
    if (!Paper!.nickname) {
      alert("닉네임을 확인해주세요");
    } else if (!Paper!.content) {
      alert("쪽지 내용을 작성해 주세요");
    } else {
      const ret = dispatch(addPaper(Paper!));
      ret ? navigation.goBack() : console.log("작성 실패");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <CookieText style={styles.title}>
        {selectedUser?.name}님에게 Rollin보내기
      </CookieText>
      {/* <TextInput>{selectedUser?.id}</TextInput> */}
      <ScrollView style={{ padding: 10 }}>
        <TextInput
          style={styles.inputStyle}
          placeholder="사용할 닉네임"
          onChangeText={(nickname) => onChangeHandler("nickname", nickname)}
        ></TextInput>
        <TextInput
          style={styles.inputStyle}
          placeholder="작성할 내용"
          multiline={true}
          numberOfLines={4}
          onChangeText={(content) => onChangeHandler("content", content)}
        ></TextInput>
      </ScrollView>
      <TouchableOpacity style={styles.checkInput} onPress={() => submitPaper()}>

        <CookieText style={{ fontSize: 25, textAlign: "center" }}>
          작성 완료
        </CookieText>

      </TouchableOpacity>

      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/PaperScreen.tsx" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputStyle: {
    fontSize: 20,
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

    backgroundColor: "#FFDC37",
    color: "black",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,

  },
});
