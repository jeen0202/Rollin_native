import { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadaddcomment, loadcomment } from "../../app/comment";

const CommentScreen = () => {
    const dispatch = useDispatch();

    const [comment, setcomment] = useState("");
    const [load, setload] = useState("");

    let imagePath = require("./img_640x640.jpg");

    useEffect(() => {
        dispatch(loadcomment());
    }, [load]);

    const onChangecomment = (e) => {
        setcomment(e.nativeEvent.text);
    };

    const onSubmit = () => {
        console.log("commey", comment);
        dispatch(
            loadaddcomment({
                userId: "임기안",
                boardId: 123,
                img: "asdkosad",
                comment: comment,
            })
        );

        setload(comment);
        alert("댓글 작성이 완료되었습니다");
    };

    const detailcomment = useSelector((state) => state.user.users);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    {detailcomment?.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <Image
                                style={{ width: 30, height: 30, borderRadius: 100 / 2, backgroundColor: "red" }}
                                source={imagePath}
                            ></Image>

                            <Text
                                style={{
                                    marginLeft: 10,
                                    fontWeight: "bold",
                                    fontSize: 20,
                                }}
                            >
                                {item.userId}
                            </Text>

                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 100,
                                }}
                            >
                                {item.comment}
                            </Text>
                        </View>
                    ))}
                </View>
                <View style={styles.item}>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 100 / 2,
                            backgroundColor: "red",
                        }}
                        source={imagePath}
                    ></Image>

                    <TextInput style={styles.textInput} onChange={onChangecomment}></TextInput>
                    <Button title="댓글" onPress={onSubmit}></Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default CommentScreen;

const styles = StyleSheet.create({
    bottom: {
        flexDirection: "row",
    },
    col: {
        flexDirection: "column",
    },
    textInput: {
        marginLeft: 20,
        marginRight: 20,
        paddingHorizontal: 10,
        width: "70%",
        height: 40,
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 1,
        backgroundColor: "beige",
    },
    container: {
        flex: 10,
        backgroundColor: "beige",
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: "#000",
        backgroundColor: "beige",
    },

    bigBlue: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    red: {
        color: "red",
    },
});
