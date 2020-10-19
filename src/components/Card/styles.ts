import styled from "styled-components/native";
import Animated from "react-native-reanimated";

interface Props {
  width: number;
}

export const Container = styled(Animated.View)<Props>`
  height: 210px;
  background: #fff;
  width: ${(props) => props.width}px;
  border-radius: 10px;
  padding: 12px 20px 30px 15px;
  justify-content: space-between;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CardTitleContainer = styled.View`
  flex-direction: row;
`;

export const CardTitle = styled.Text`
  margin-left: 10px;
  color: #8c91a9;
`;

export const CardVisibility = styled.View``;

export const CardContent = styled.View``;

export const HiddenCardContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const HiddenContentDescription = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-size: 12px;
  color: #757575;
`;
