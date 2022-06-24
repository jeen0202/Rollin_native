import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "../../components/Themed";
import { login, tryLogin } from "../../app/users";
import axios from "axios";
import { user } from "../../types";
import { InputStyles } from "./../../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { CookieText } from "../../components/StyledText";
const LoginScreen = () => {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState<user>();
  // const onChangeid = (e) => {
  //     setId(e.target.value)
  //     console.log(e)
  // }

  // const onChangepassword = (e) => {
  //     setPassword(e.target.value)
  // }

  const onChangeHandler = (name: string, value: string) => {
    setNewUser({ ...newUser!, [name]: value });
    // console.log(user);
  };

  const onButtonClick = () => {
    dispatch(tryLogin(newUser));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={{ ...InputStyles.inputStyle }} placeholder="아이디를 입력하세요" onChangeText={(text) => onChangeHandler("userId", text)}></TextInput>
      <TextInput
        style={InputStyles.inputStyle}
        placeholder="비밀번호를 입력하세요"
        secureTextEntry={true}
        onChangeText={(text) => onChangeHandler("password", text)}
      ></TextInput>
      <TouchableOpacity onPress={onButtonClick}>
        <CookieText style={{ fontSize: 20, marginTop: 20 }}>로그인</CookieText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "beige",
  },
});

export default LoginScreen;
