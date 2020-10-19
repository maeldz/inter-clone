import styled from "styled-components/native";
import Animated from "react-native-reanimated";

interface CardProps {
  width: number;
}

export const Wrapper = styled(Animated.ScrollView)`
  margin: 15px 0;
`;

export const Container = styled(Animated.View)`
  flex-direction: row;
`;
