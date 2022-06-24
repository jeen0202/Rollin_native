import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { insertBoard, selectAllBoards } from "../app/board";
import { Link } from "@react-navigation/native";
const BoardAddScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    img: "",
    file: "",
    content: "",
  });
  const [previewImg, setPreviewImg] = useState("");
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true,
    });

    const splitUri = pickerResult.uri.split("/");
    const img = `${splitUri[splitUri.length - 1]}`;
    const splitUriType = pickerResult.uri.split(".");
    const type = `image/${splitUriType[splitUriType.length - 1]}`;
    const file = {
      uri: pickerResult.uri.replace("file:/data", "file:///data"),
      name: img,
      type,
    };
    setPost({
      ...post,
      img,
      file,
    });
    setPreviewImg(pickerResult.uri);
  };
  const onSubmit = () => {
    dispatch(insertBoard(post));
    navigation.navigate('Users');
    alert("작성이 완료 되었습니다");
  };
  return (
    <View>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Text>Pick a photo</Text>
      </TouchableOpacity>
      {previewImg ? (
        <Image
          source={{ uri: previewImg }}
          style={{ height: 200, width: 200 }}
        ></Image>
      ) : null}
      <TextInput
        onChangeText={(value) => setPost({ ...post, content: value })}
        value={post.content} //
        placeholder="content"
      ></TextInput>
        <Button onPress={onSubmit} title="submit"></Button>
    </View>
  );
};
export default BoardAddScreen
