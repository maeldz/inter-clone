import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface CardProps {
  width: number;
}

export const Container = styled(Animated.View)<CardProps>`
  height: 210px;
  background: #fff;
  width: ${(props) => props.width}px;
  border-radius: 10px;
  padding: 10px 10px 20px 8px;
  justify-content: space-between;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 20px;
`;

export const CardTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardTitle = styled.Text`
  margin-left: 10px;
  color: #8c91a9;
`;

export const CardContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSide = styled.View`
  margin-bottom: 10px;
`;

export const RightSide = styled.View``;

export const ContentDescription = styled.Text`
  width: ${width * 0.32}px;
  flex: 1;
  font-weight: bold;
  font-size: 15px;
`;

export const KnowMore = styled.TouchableOpacity`
  justify-content: space-between;
`;

export const KnowMoreText = styled.Text`
  text-align: right;
  margin-right: 18px;
  font-weight: bold;
  color: #ff8700;
`;
