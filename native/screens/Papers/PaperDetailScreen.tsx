import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { paper, user } from "../../types";
import { useDispatch } from "react-redux";
import { selectPaper } from "../../app/paper";
import { CookieText } from "../../components/StyledText";

export default function PaperDetailScreen({ route }: any) {
  const paper: paper = route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectPaper(paper));
  }, []);
  return (
    <View style={styles.container}>
      <CookieText style={styles.title}>{paper.nickname}님에게서 온 Rollin</CookieText>
      <CookieText style={styles.date}>{paper.date!.toString()}</CookieText>
      {/* <View style={styles.separator} lightColor="beige" darkColor="rgba(255,255,255,0.1)" /> */}
      <ScrollView style={{ margin: 10 }}>
        <CookieText style={styles.content}>{paper.content}</CookieText>
      </ScrollView>
      {/* <EditScreenInfo path="/screens/PaperScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    // alignItems: "center",
    backgroundColor: "beige",
    // justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  date: {
    marginTop: 5,
    fontSize: 10,
    color: "gray",
    textAlign: "right",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  content: {
    fontSize: 20,
  },
});
