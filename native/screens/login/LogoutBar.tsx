import React from "react";
import { Button, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../../app/users";
import { CookieText } from "../../components/StyledText";
import { View } from "../../components/Themed";

export default function LogoutBar() {
  const dispatch = useDispatch();

  return (
    <View style={{ alignItems: "flex-end" }}>
      <TouchableOpacity
        style={styles.logout}
        onPress={() => dispatch(logout())}
      >
        <CookieText style={{ fontSize: 20, textAlign: "center" }}>
          로그아웃
        </CookieText>
      </TouchableOpacity>
    </View>
    // <View style={{ backgroundColor: "beige", alignItems: "flex-end" }}>
    //   <Button
    //     title="로그아웃"
    //     color="#FFA500"
    //     onPress={() => dispatch(logout())}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  logout: {
    marginRight: 20,
    backgroundColor: "#FFDC37",
    borderRadius: 8,
    padding: 5,
  },
});
