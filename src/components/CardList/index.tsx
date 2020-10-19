import React from "react";
import { Dimensions } from "react-native";
import Animated, { Extrapolate, useValue } from "react-native-reanimated";

import Card from "../Card";

const { width } = Dimensions.get("window");

const CARD_WIDTH = width * 0.83;
const CARD_PADDING = (width - CARD_WIDTH) / 2;

import { Wrapper, Container } from "./styles";
import InfoCard from "../InfoCard";

const CardList: React.FC = () => {
  const offsetX = useValue(0);

  return (
    <Wrapper
      horizontal
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={CARD_WIDTH}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={1}
      onScroll={Animated.event([
        {
          nativeEvent: {
            contentOffset: {
              x: offsetX,
            },
          },
        },
      ])}
    >
      <Container
        style={{
          paddingLeft: offsetX.interpolate({
            inputRange: [0, CARD_WIDTH],
            outputRange: [CARD_PADDING / 2, CARD_PADDING],
            extrapolate: Extrapolate.CLAMP,
          }),
          paddingRight: CARD_PADDING / 2,
        }}
      >
        <InfoCard
          index={0}
          offsetX={offsetX}
          width={CARD_WIDTH}
          icon="shield-lock"
          title="Plataforma de Proteção Inter"
          description="Descubra como cuidar do que importa pra você."
          image={{ name: "protection_platform", width: 110, height: 88 }}
        />
        <Card
          index={1}
          offsetX={offsetX}
          width={CARD_WIDTH}
          icon="extract"
          title="Extrato"
          description="As informações estão ocultas para garantir sua privacidade, para
          habilitá-las, basta clicar no olho acima."
          image={{ name: "hidden_balance", width: 120, height: 113 }}
        />
        <Card
          index={2}
          offsetX={offsetX}
          width={CARD_WIDTH}
          icon={{ name: "card", width: 30, height: 20 }}
          title="Mastercard"
          description="As informações estão ocultas para garantir sua privacidade, para
          habilitá-las, basta clicar no olho acima."
          image={{ name: "hidden_balance", width: 120, height: 113 }}
        />
        <Card
          index={3}
          offsetX={offsetX}
          width={CARD_WIDTH}
          icon={{ name: "pai_logo", width: 30, height: 20 }}
          title="Plataforma Aberta Inter"
          description="As informações estão ocultas para garantir sua privacidade, para
          habilitá-las, basta clicar no olho acima."
          image={{ name: "hidden_balance", width: 120, height: 113 }}
        />
      </Container>
    </Wrapper>
  );
};

export default CardList;
