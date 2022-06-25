import { Button, Image, TextInput, TouchableOpacity, StyleSheet, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { insertBoard, selectAllBoards } from "../app/board";
import Icon from "@expo/vector-icons/AntDesign";
import { Text, View } from "../components/Themed";
import { Link } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const BoardAddScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    img: "",
    file: "",
    content: "",
  });
  const [previewImg, setPreviewImg] = useState("");
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult: any = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      quality: Platform.OS === "ios" ? 0.2 : 1,
    });

    const splitUri = pickerResult.uri.split("/");
    const img = `${splitUri[splitUri.length - 1]}`;
    const splitUriType = pickerResult.uri.split(".");
    const type = `image/${splitUriType[splitUriType.length - 1]}`;
    // const file = {
    //   uri: pickerResult.uri.replace("file:/data", "file:///data"),
    //   name: img,
    //   type,
    // };
    const file = { uri: pickerResult.uri, name: img, type };
    setPost({
      ...post,
      img,
      file,
    });
    setPreviewImg(pickerResult.uri);
  };
  const onSubmit = () => {
    dispatch(insertBoard(post));
    navigation.navigate("Users");
    alert("작성이 완료 되었습니다");
  };
  return (
    <SafeAreaView style={style.container}>
      <TouchableOpacity onPress={() => openImagePickerAsync()}>
        <Icon name="camera" size={30} color="black" style={{ alignSelf: "flex-end" }}></Icon>
      </TouchableOpacity>
      {previewImg ? <Image source={{ uri: previewImg }} style={{ height: 200, width: "100%" }}></Image> : null}
      <TextInput
        multiline={true}
        numberOfLines={5}
        style={style.TextInput}
        onChangeText={(value) => setPost({ ...post, content: value })}
        value={post.content} //
        placeholder="글작성"
      ></TextInput>
      <View style={style.icon}>
        <Icon onPress={onSubmit} name="check" size={30} color="#3143e8"></Icon>
      </View>
    </SafeAreaView>
  );
};
export default BoardAddScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor: "beige",
  },
  TextInput: {
    marginTop: 16,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    padding: 16,
    maxHeight: 150,
    backgroundColor: "white",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "beige",
  },
});
