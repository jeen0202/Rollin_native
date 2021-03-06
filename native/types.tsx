/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform, StyleSheet } from "react-native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
  interface Window {
    Kakao: any;
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  MyPapers: { id: number; name: string };
  PaperAdd: undefined;
  PaperDetail: { id: number; name: string };
  PaperModal: { gift: gift };
  BoardAdd: undefined;
  Comment: undefined;
  Gift: undefined;
  GiftDetail: undefined;
};

export type PaperStackParamList = {
  Main: undefined;
  Detail: undefined;
  Add: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  Paper: undefined;
  Users: undefined;
  Login: undefined;
  Gift: undefined;
  Join: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

//Redux state
export type user =
  | {
      id: number;
      userId: string;
      password?: string;
      name: string;
      img: string;
      pcnt?: string;
    }
  | undefined;
export type userState = {
  users?: Array<user>;
  isLogin: boolean;
  check: number;
  me: user;
};
export type paper = {
  id: number;
  userId: number;
  nickname: string;
  content: string;
  date?: Date;
  giftId: number;
  gift?: gift;
};
export type paperState = {
  papers: Array<paper>;
  isLoading: boolean;
  error: Error | null;
  selectedUser?: user;
  selectedPaper?: paper;
};
export type gift = {
  id: number;
  price?: number;
  content: string;
  count?: number;
  img?: string;
  name?: string;
  views?: number;
};

export type giftState = {
  allGifts: Array<gift>;
  giftId?: number;
  error?: Error;
  isLoading: boolean;
  detailGift: {
    gift?: gift;
    message: string;
  };
  receiversInfo: {
    receivers: Array<user>;
    message: string;
  };
};

export type UserListProps = {
  listdata?: user[];
};
export type PaperListProps = {
  listData?: paper[];
};

//styles
export const listStyles = StyleSheet.create({
  item: { justifyContent: "center", alignItems: "center", backgroundColor: "beige" },
});
export const InputStyles = StyleSheet.create({
  inputStyle: {
    fontSize: 20,
    margin: 10,
    ...Platform.select({
      ios: {
        fontFamily: "cookieRun",
        fontWeight: "600",
        fontStyle: "normal",
      },
      android: {
        fontFamily: "cookieRun",
      },
    }),
  },
});
