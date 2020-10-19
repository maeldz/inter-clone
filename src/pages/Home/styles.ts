import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import Constants from "expo-constants";

const { width } = Dimensions.get("window");

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    justifyContent: "space-between",
  },
})`
  background: #f5f6fa;
`;

export const Content = styled.View`
  margin-top: -36px;
`;

export const ExpandBarContainer = styled.TouchableOpacity``;

export const ExpandBar = styled(LinearGradient).attrs({
  colors: ["#f5f6fa", "#fff"],
})`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  padding: 13px 0;
`;

export const Buttons = styled.View`
  background: #fff;
  padding: 20px 20px 0;
`;

export const ShoppingButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #f5f6fa;
  padding: 0 25px;
  margin-bottom: 20px;
  height: 100px;
  border-radius: 6px;
`;

export const ShoppingButtonInfo = styled.View`
  margin-left: 15px;
  flex: 1;
`;

export const ShoppingButtonTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #4b4e5c;
`;

export const ShoppingButtonDescription = styled.Text`
  font-size: 13px;
  margin-top: 3px;
  color: #6a6e81;
`;

export const RightArrow = styled.View`
  margin-left: 10px;
`;

export const ButtonsInRow = styled.View`
  flex-direction: row;
  margin-bottom: 4px;
`;

export const InterTravelButton = styled.TouchableOpacity`
  width: ${width * 0.5 - 30}px;
  margin-right: 10px;
  background: #f5f6fa;
  padding: 20px;
  border-radius: 6px;
`;

export const InterTravelButtonTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-top: 15px;
  color: #4b4e5c;
`;

export const InterTravelButtonDescription = styled.Text`
  font-size: 13px;
  margin-top: 5px;
  color: #6a6e81;
`;

export const ShellBoxButton = styled.TouchableOpacity`
  width: ${width * 0.5 - 30}px;
  margin-left: 10px;
  background: #f5f6fa;
  padding: 20px;
  border-radius: 6px;
`;

export const ShellBoxButtonTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
  margin-top: 15px;
  color: #4b4e5c;
`;

export const ShellBoxButtonDescription = styled.Text`
  font-size: 13px;
  margin-top: 5px;
  color: #6a6e81;
`;

export const LifeStyleMenuItem = styled.TouchableOpacity`
  width: ${(width - 40) / 3}px;
  padding: 16px 0 8px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

export const LifeStyleMenuImage = styled.View`
  width: ${((width - 40) / 3) * 0.75}px;
  height: ${((width - 40) / 3) * 0.75}px;
  border-radius: ${((width - 40) / 3) * 0.8 * 0.5}px;
  background: #f5f6fa;
  align-items: center;
  justify-content: center;
`;

export const LifeStyleMenuTitle = styled.Text`
  margin-top: 8px;
  font-size: 13px;
  color: #4b4e5c;
`;

export const Separator = styled.View`
  height: 1px;
  background: #f5f6fa;
  margin-left: 20px;
`;

export const BottomCards = styled.View`
  background: #fff;
  padding: 16px;
`;

export const SupportCard = styled.View`
  background: #f5f6fa;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SupportCardInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SupportAvatarContainer = styled.View`
  background: #fdfffc;
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
`;

export const SupportAvatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 22.5px;
`;

export const SupportQuestion = styled.View`
  margin-left: 10px;
`;

export const SupportQuestionFirstLine = styled.Text`
  color: #4b4e5c;
`;

export const SupportQuestionSecondLine = styled.Text`
  color: #4b4e5c;
`;

export const SupportCardButton = styled.TouchableOpacity`
  background: #fff;
  height: 45px;
  width: 45px;
  border-radius: 22.5px;
  align-items: center;
  justify-content: center;
`;

export const ISafeCard = styled.View`
  background: #f5f6fa;
  border-radius: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 125px;
`;

export const ISafeCardGenerate = styled.View`
  align-items: center;
`;

export const ISafeCardButton = styled.TouchableOpacity`
  background: #fff;
  height: 45px;
  width: 45px;
  border-radius: 22.5px;
  align-items: center;
  justify-content: center;
`;

export const ISafeCardGenerateText = styled.Text`
  margin-top: 5px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0 0 20px;
`;

export const FooterLeftSide = styled.View`
  padding-bottom: 20px;
  justify-content: space-between;
  flex: 1;
`;

export const FooterTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #4b4e5c;
`;

export const FooterDescription = styled.Text`
  font-size: 16px;
  color: #8c91a9;
`;

export const FooterButtonContainer = styled.TouchableOpacity``;

export const FooterButton = styled(LinearGradient).attrs({
  colors: ["#ff500f", "#ff8700"],
  end: [0.6, 1],
})`
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border-radius: 4px;
  align-self: flex-start;
`;

export const FooterButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const FooterRightSide = styled.View`
  align-self: flex-end;
`;
