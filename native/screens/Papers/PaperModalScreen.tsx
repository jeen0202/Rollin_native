import { Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { IMG_PATH } from "../../app/AxiosApi";
import { RootState } from "../../app/store";
import { CookieText } from "../../components/StyledText";

export default function PaperModalScreen() {
  //   const gift = useSelector((state: RootState) => state.paper.selectedPaper?.gift);
  const gift = useSelector((state: RootState) => state.paper.selectedPaper?.gift);
  // console.log(gift);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: `${IMG_PATH}${gift?.img}` }} style={{ width: 400, height: 300, borderRadius: 10 }} />
      <CookieText style={styles.title}>{gift?.name}</CookieText>
      <CookieText>{gift?.content}</CookieText>
    </SafeAreaView>
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
});
