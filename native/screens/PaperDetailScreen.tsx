import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import EditScreenInfo from "../components/EditScreenInfo";
import { user } from "../types";

export default function PaperDetailScreen(params: any) {
  //console.log(params);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PaperDetail</Text>
      <Text>{params?.route.params.id}</Text>
      <Text>{params?.route.params.name}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});