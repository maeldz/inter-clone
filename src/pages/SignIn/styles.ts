import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { BaseButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
`;

export const LogoContainer = styled(LinearGradient).attrs({
  colors: ["#ff500f", "#ff8700"],
  start: [0, 1],
  end: [1, -1],
})`
  height: 45%;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100px;
  flex: 1;
`;

export const CardsContainer = styled.View`
  flex: 1;
  background: #fff;
  padding: 0 20px 20px;
`;

export const Cards = styled.View`
  position: absolute;
  width: 100%;
  margin-left: 20px;
  top: -25px;
`;

export const Login = styled.View`
  background: #f5f6fa;
  padding: 20px 20px 15px;
  border-radius: 6px;
`;

export const UserInfoRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  background: #e7e7ef;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

export const Initials = styled.Text`
  color: #f5f6fa;
  font-size: 18px;
  font-weight: bold;
`;

export const User = styled.View``;

export const Name = styled.Text`
  color: #4d4e60;
  font-size: 15px;
`;

export const Account = styled.Text`
  color: #999;
  font-size: 15px;
`;

export const ChangeAccountButtonContainer = styled.View`
  margin-left: auto;
  border: 1px solid #e7e7ef;
  border-radius: 4px;
`;

export const ChangeAccountButton = styled(BaseButton)`
  padding: 5px 15px;
`;

export const ChangeAccountText = styled.Text`
  color: #4d4e60;
  font-weight: bold;
`;

export const SignInButtonContainer = styled.TouchableOpacity`
  margin-top: 20px;
`;

export const SignInButton = styled(LinearGradient).attrs({
  colors: ["#ff500f", "#ff8700"],
  end: [0.6, 1],
})`
  width: 70%;
  align-self: center;
  align-items: center;
  padding: 15px 0;
  border-radius: 4px;
`;

export const SignInText = styled.Text`
  color: #f5f6fa;
  font-weight: bold;
  font-size: 15px;
`;

export const ISafe = styled.View`
  background: #f5f6fa;
  margin-top: 15px;
  padding: 30px 20px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ISafeLogo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Generate = styled.View`
  align-items: center;
`;

export const GenerateButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  padding: 0 9px;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const GenerateText = styled.Text`
  margin-top: 5px;
  color: #4b4e5c;
`;

export const Interpag = styled.View`
  background: #f5f6fa;
  margin-top: 15px;
  padding: 30px 20px 30px 30px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InterpagButtons = styled.View`
  flex-direction: row;
`;

export const Pay = styled.View`
  align-items: center;
  margin-right: 20px;
`;

export const PayButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  padding: 0 9px;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const PayText = styled.Text`
  margin-top: 5px;
  color: #4b4e5c;
`;

export const Receive = styled.View`
  align-items: center;
`;

export const ReceiveButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  padding: 0 9px;
  align-items: center;
  justify-content: center;
  background: #fff;
`;

export const ReceiveText = styled.Text`
  margin-top: 5px;
  color: #4b4e5c;
`;
