import React, { useState } from "react";
import { Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { add } from "react-native-reanimated";
import {
  cond,
  eq,
  Extrapolate,
  set,
  useCode,
  useValue,
} from "react-native-reanimated";
import {
  snapPoint,
  timing,
  usePanGestureHandler,
} from "react-native-redash/lib/module/v1";

import { useAuth } from "../../contexts/auth";

import CustomIcon from "../../components/CustomIcon";

import {
  Container,
  HeaderContent,
  AccountInfo,
  LeftSide,
  AccountBalanceLabel,
  AccountBalanceRow,
  AccountBalance,
  AccountBalanceCurrency,
  AccountBalanceValue,
  VisibilityToggle,
  AccountBalanceInfo,
  RightSide,
  Avatar,
  Initials,
  SideIndicator,
  ActiveIndicator,
  LeftEmptyIndicator,
  RightEmptyIndicator,
} from "./styles";

const { width } = Dimensions.get("window");

const Header: React.FC = () => {
  const [balanceIsVisible, setBalanceIsVisible] = useState(true);

  const snapPoints = [-width - 20, (-width - 20) / 2, 0];

  const {
    gestureHandler,
    state,
    translation,
    velocity,
  } = usePanGestureHandler();

  const accountInfoTranslateX = useValue(0);
  const accountInfoOffsetX = useValue(0);
  const to = snapPoint(accountInfoTranslateX, velocity.x, snapPoints);

  const { signOut } = useAuth();

  useCode(
    () => [
      cond(
        eq(state, State.ACTIVE),
        set(accountInfoTranslateX, add(accountInfoOffsetX, translation.x))
      ),
      cond(eq(state, State.END), [
        set(accountInfoTranslateX, timing({ from: accountInfoTranslateX, to })),
        set(accountInfoOffsetX, accountInfoTranslateX),
      ]),
    ],
    []
  );

  return (
    <Container>
      <HeaderContent>
        <PanGestureHandler {...gestureHandler}>
          <AccountInfo
            style={{
              transform: [
                {
                  translateX: accountInfoTranslateX.interpolate({
                    inputRange: [(-width - 20) * 0.5, 0],
                    outputRange: [(-width - 20) * 0.5, 0],
                    extrapolate: Extrapolate.CLAMP,
                  }),
                },
              ],
            }}
          >
            <LeftSide
              style={{
                opacity: accountInfoTranslateX.interpolate({
                  inputRange: [(-width - 20) * 0.5, 0],
                  outputRange: [0, 1],
                  extrapolate: Extrapolate.CLAMP,
                }),
              }}
            >
              <AccountBalanceLabel>Saldo em conta</AccountBalanceLabel>
              <AccountBalanceRow>
                <AccountBalance>
                  <AccountBalanceCurrency>R$</AccountBalanceCurrency>
                  <AccountBalanceValue>0,00</AccountBalanceValue>
                </AccountBalance>
                <VisibilityToggle
                  onPress={() => setBalanceIsVisible(!balanceIsVisible)}
                >
                  {balanceIsVisible ? (
                    <CustomIcon name="eye-open" size={32} color="#fff" />
                  ) : (
                    <CustomIcon name="eye-close" size={32} color="#fff" />
                  )}
                </VisibilityToggle>
              </AccountBalanceRow>
              <AccountBalanceInfo>Atualizado neste momento</AccountBalanceInfo>
            </LeftSide>
            <RightSide
              style={{
                opacity: accountInfoTranslateX.interpolate({
                  inputRange: [(-width - 20) * 0.5, 0],
                  outputRange: [1, 0],
                  extrapolate: Extrapolate.CLAMP,
                }),
              }}
            >
              <AccountBalanceLabel>Total investido</AccountBalanceLabel>
              <AccountBalanceRow>
                <AccountBalance>
                  <AccountBalanceCurrency>R$</AccountBalanceCurrency>
                  <AccountBalanceValue>0,00</AccountBalanceValue>
                </AccountBalance>
                <VisibilityToggle
                  onPress={() => setBalanceIsVisible(!balanceIsVisible)}
                >
                  {balanceIsVisible ? (
                    <CustomIcon name="eye-open" size={32} color="#fff" />
                  ) : (
                    <CustomIcon name="eye-close" size={32} color="#fff" />
                  )}
                </VisibilityToggle>
              </AccountBalanceRow>
              <AccountBalanceInfo>Atualizado neste momento</AccountBalanceInfo>
            </RightSide>
          </AccountInfo>
        </PanGestureHandler>
        <Avatar onPress={() => signOut()}>
          <Initials>ID</Initials>
        </Avatar>
      </HeaderContent>
      <SideIndicator>
        <ActiveIndicator
          style={{
            transform: [
              {
                translateX: accountInfoTranslateX.interpolate({
                  inputRange: [(-width - 20) * 0.5, 0],
                  outputRange: [31 + 5, 0],
                  extrapolate: Extrapolate.CLAMP,
                }),
              },
            ],
          }}
        >
          <CustomIcon name="minus" size={30} color="#fff" />
        </ActiveIndicator>
        <LeftEmptyIndicator>
          <CustomIcon name="minus" size={30} color="rgba(255, 255, 255, 0.3)" />
        </LeftEmptyIndicator>
        <RightEmptyIndicator>
          <CustomIcon name="minus" size={30} color="rgba(255, 255, 255, 0.3)" />
        </RightEmptyIndicator>
      </SideIndicator>
    </Container>
  );
};

export default Header;
