import React, { useState } from "react";
import { ActivityIndicator } from "react-native";

import SVGLoader from "../../components/SVGLoader";
import CustomIcon from "../../components/CustomIcon";
import { useAuth } from "../../contexts/auth";

import {
  Container,
  LogoContainer,
  CardsContainer,
  Cards,
  Login,
  UserInfoRow,
  Avatar,
  Initials,
  User,
  Name,
  Account,
  ChangeAccountButton,
  ChangeAccountText,
  ChangeAccountButtonContainer,
  SignInButtonContainer,
  SignInButton,
  SignInText,
  ISafe,
  Generate,
  GenerateButton,
  GenerateText,
  Interpag,
  InterpagButtons,
  Pay,
  PayButton,
  PayText,
  Receive,
  ReceiveButton,
  ReceiveText,
} from "./styles";

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  function handleSignIn(email: string, password: string) {
    setLoading(true);
    signIn(email, password);
  }

  return (
    <Container>
      <LogoContainer>
        <SVGLoader name="inter_logo" width={110} height={40} />
      </LogoContainer>
      <CardsContainer>
        <Cards>
          <Login>
            <UserInfoRow>
              <Avatar>
                <Initials>ID</Initials>
              </Avatar>
              <User>
                <Name>ISMAEL DE JESUS</Name>
                <Account>1644746-8</Account>
              </User>
              <ChangeAccountButtonContainer>
                <ChangeAccountButton>
                  <ChangeAccountText>TROCAR</ChangeAccountText>
                </ChangeAccountButton>
              </ChangeAccountButtonContainer>
            </UserInfoRow>
            <SignInButtonContainer
              onPress={() => handleSignIn("mael.dazareia@gmail.com", "123456")}
            >
              <SignInButton>
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <SignInText>ENTRAR</SignInText>
                )}
              </SignInButton>
            </SignInButtonContainer>
          </Login>
          <ISafe>
            <SVGLoader name="isafe_logo" width={120} height={40} />
            <Generate>
              <GenerateButton>
                <CustomIcon name="four-dots" size={30} color="#FF8700" />
              </GenerateButton>
              <GenerateText>Gerar</GenerateText>
            </Generate>
          </ISafe>
          <Interpag>
            <SVGLoader name="interpag_logo" width={140} height={40} />
            <InterpagButtons>
              <Pay>
                <PayButton>
                  <CustomIcon name="interpag-pay" size={30} color="#FF8700" />
                </PayButton>
                <PayText>Pagar</PayText>
              </Pay>
              <Receive>
                <ReceiveButton>
                  <CustomIcon name="qr-code-scan" size={30} color="#FF8700" />
                </ReceiveButton>
                <ReceiveText>Receber</ReceiveText>
              </Receive>
            </InterpagButtons>
          </Interpag>
        </Cards>
      </CardsContainer>
    </Container>
  );
};

export default SignIn;
