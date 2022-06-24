import { Link } from "@react-navigation/native";
import { FlatList, Image, Text, View, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useIsFocused, useLinkTo } from "@react-navigation/native";
import { selectAllBoards } from "../app/board";
import { IMG_PATH } from "../app/AxiosApi";

let imagePath = require("./img_640x640.jpg");

const BoardScreen = () => {
    const Boards = useSelector((state) => state.boards.allBoards);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const selectMy = () => {
        dispatch(selectAllBoards());
    };
    const onComment = () => {
        console.log("dsd");
    };

    useEffect(() => {
        selectMy();
    }, [isFocused]);
    console.log("Posts입니다  ", Boards);

    return (
        <FlatList
            data={Boards}
            renderItem={(item) => renderItem(item)}
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        ></FlatList>
    );
};
const renderItem = ({ item }) => {
    return (
        <Link to={{ screen: "Comment" }}>
            <View style={styles.container}>
                <Image
                    source={{ uri: `${IMG_PATH}${item.img}` }}
                    style={{
                        marginLeft: 50,
                        width: 300,
                        height: 300,
                    }}
                ></Image>
                <View style={styles.row}>
                    <Image
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 100 / 2,
                            backgroundColor: "red",
                            marginRight: 20,
                        }}
                        source={imagePath}
                    ></Image>
                    <Text
                        style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            marginRight: 20,
                        }}
                    >
                        {item.userId}
                    </Text>
                    <Text
                        style={{
                            marginTop: 5,
                            fontsize: 30,
                        }}
                    >
                        {item.content}
                    </Text>
                </View>
            </View>
        </Link>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",

        flex: 1,
        backgroundColor: "beige",
    },
    row: {
        flexDirection: "row",
    },
});
export default BoardScreen;
