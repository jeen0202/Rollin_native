import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import EditScreenInfo from "../../components/EditScreenInfo";
import { paper, user } from "../../types";
import { useDispatch } from "react-redux";
import { selectPaper } from "../../app/paper";

export default function PaperDetailScreen({ route }: any) {
  const paper: paper = route.params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(selectPaper(paper));
  }, []);
  return (
    <View>
      <Text style={styles.title}>{paper.nickname}님에게서 온 Rollin</Text>
      <Text style={styles.date}>{paper.date!.toString()}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>{paper.content}</Text>
      {/* <EditScreenInfo path="/screens/PaperScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  date: {
    marginTop: 5,
    fontSize: 10,
    textDecorationColor: "gray",
    textAlign: "right",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
