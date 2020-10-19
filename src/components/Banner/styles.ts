import styled from "styled-components/native";
import Animated from "react-native-reanimated";

export const Wrapper = styled(Animated.View)``;

export const Container = styled.View`
  flex-direction: row;
  height: 102px;
  background: #e6e7f0;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
`;

export const BannerInfo = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const BannerTitle = styled.Text`
  color: #ff8700;
  font-weight: bold;
`;

export const BannerContent = styled.Text`
  color: #4b4e5c;
`;

export const BannerCloseButton = styled.TouchableOpacity`
  margin-left: 20px;
`;
