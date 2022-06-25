import React from "react";
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../app/users";
import { View } from "../../components/Themed";

export default function LogoutBar() {
  const dispatch = useDispatch();

  return (
    <View style={{ backgroundColor: "beige", alignItems: "flex-end" }}>
      <Button title="로그아웃" onPress={() => dispatch(logout())} />
    </View>
  );
}
