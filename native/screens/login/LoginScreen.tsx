import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, StyleSheet, TextInput } from "react-native";
import { View, Text } from "../../components/Themed";
import { login, tryLogin } from "../../app/users";
import axios from "axios";
import { user } from "../../types";
import { InputStyles } from "./../../types";
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
    <View>
      <TextInput style={InputStyles.inputStyle} placeholder="이곳은 아이디" onChangeText={(text) => onChangeHandler("userId", text)}></TextInput>
      <TextInput
        style={InputStyles.inputStyle}
        placeholder="이곳은 비밀번호"
        secureTextEntry={true}
        onChangeText={(text) => onChangeHandler("password", text)}
      ></TextInput>
      <Button title="로그인" onPress={onButtonClick}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
  },
});

export default LoginScreen;
