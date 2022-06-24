import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />;
}
export function CookieText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "cookieRun" }]} />;
}
