import { useIsFocused } from "@react-navigation/native";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadPapers } from "../../app/paper";
import { RootState } from "../../app/store";
import { CookieText } from "../../components/StyledText";

import { Text, View } from "../../components/Themed";
import PaperListScreen from "./PaperListScreen";

export default function MyPapersScreen({ route }: any) {
  const dispatch = useDispatch();
  const myPapers = useSelector((state: RootState) => state.paper.papers);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      dispatch(loadPapers());
      // console.log(myPapers);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <CookieText style={styles.title}>{route?.params.name}님에게 전달된 Rollin</CookieText>
      {/* <Text>{route?.params.id}</Text>
      <Text>{route?.params.name}</Text> */}
      <View style={styles.separator} lightColor="beige" darkColor="rgba(255,255,255,0.1)" />
      <PaperListScreen listData={myPapers}></PaperListScreen>
      {/* <EditScreenInfo path="/screens/PaperScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "beige",
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
