import React, { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { Text, View } from "../../components/Themed";
import EditScreenInfo from "../../components/EditScreenInfo";
import { paper, user } from "../../types";
import { useDispatch } from "react-redux";
import { addPaper } from "../../app/paper";

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
    <View style={styles.container}>
      <Text style={styles.title}>{selectedUser?.name}님에게 Rollin보내기</Text>
      <TextInput>{selectedUser?.id}</TextInput>
      <TextInput placeholder="사용할 닉네임" onChangeText={(nickname) => onChangeHandler("nickname", nickname)}></TextInput>
      <TextInput placeholder="작성할 내용" multiline={true} numberOfLines={4} onChangeText={(content) => onChangeHandler("content", content)}></TextInput>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button title="작성 완료" onPress={() => submitPaper()}></Button>
      {/* <EditScreenInfo path="/screens/PaperScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
