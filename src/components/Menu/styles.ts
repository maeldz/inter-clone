import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

export const MenuItemContainer = styled(Animated.View)``;

export const MenuItem = styled.TouchableOpacity`
  background: #fff;
  width: ${(width - 56) / 3}px;
  height: 112px;
  margin: 0px 8px 8px 0;
  padding: 10px 10px 3px;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
`;

export const Icon = styled.View`
  background: #f5f6fa;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const MenuItemTitle = styled.Text`
  font-size: 12px;
  text-align: center;
  color: #4b4e5c;
`;
