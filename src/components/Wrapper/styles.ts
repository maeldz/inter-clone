import { Platform } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Container = styled.View`
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

export const Content = styled.View`
  flex: 1;
`;
