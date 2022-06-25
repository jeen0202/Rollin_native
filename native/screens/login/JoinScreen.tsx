import React, { useState } from "react";
import { TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { addUser, fistload, joinIdCheck } from "../../app/users";
import { CookieText } from "../../components/StyledText";
import { InputStyles, user } from "../../types";

export default function JoinScreen({ navigation }: any) {
  const dispatch = useDispatch();
  const [newUser, setnewUser] = useState<user>();
  const check = useSelector((state: RootState) => state.user.check);

  const onChangeHandler = (name: string, value: string) => {
    setnewUser({ ...newUser!, [name]: value });
  };
  const onSubmitButton = async () => {
    if (newUser?.userId === "" || newUser?.userId === undefined) {
      alert("ID를 입력해주세요");
      setnewUser(undefined);
    } else if (newUser?.password === "" || newUser?.password === undefined) {
      alert("Password를 입력해주세요");
      setnewUser(undefined);
    } else if (newUser?.name === "" || newUser?.name === undefined) {
      alert("이름을 입력해주세요");
      setnewUser(undefined);
    } else {
      dispatch(addUser(newUser));
      setnewUser(undefined);
      navigation.navigate("Login");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={InputStyles.inputStyle}
        autoCapitalize="none"
        placeholder="아이디를 입력해 주세요"
        onChangeText={(text) => onChangeHandler("userId", text)}
      >
        {newUser?.userId}
      </TextInput>
      <TextInput
        secureTextEntry={true}
        style={InputStyles.inputStyle}
        placeholder="비밀번호를 입력해 주세요"
        onChangeText={(text) => onChangeHandler("password", text)}
      >
        {newUser?.password}
      </TextInput>
      <TextInput style={InputStyles.inputStyle} placeholder="이름을 입력해 주세요" onChangeText={(text) => onChangeHandler("name", text)}>
        {newUser?.name}
      </TextInput>
      <TouchableOpacity onPress={onSubmitButton}>
        <CookieText style={{ fontSize: 20, marginTop: 20 }}>회원가입</CookieText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "beige",
  },
});
