import React, { useState } from "react";
import { Text } from "react-native";
import {
  cond,
  Extrapolate,
  set,
  useCode,
  useValue,
} from "react-native-reanimated";
import { timing } from "react-native-redash/lib/module/v1";

import {
  Wrapper,
  Container,
  BannerInfo,
  BannerTitle,
  BannerContent,
  BannerCloseButton,
} from "./styles";

import CustomIcon from "../../components/CustomIcon";

const Banner: React.FC = ({}) => {
  const [bannerIsClosed, setBannerIsClosed] = useState(false);

  const bannerHeight = useValue(102);

  useCode(
    () => [
      cond(
        Number(bannerIsClosed),
        set(bannerHeight, timing({ from: bannerHeight, to: 0, duration: 200 }))
      ),
    ],
    [bannerIsClosed]
  );

  return (
    <Wrapper
      style={{
        height: bannerHeight,
        marginTop: bannerHeight.interpolate({
          inputRange: [0, 102],
          outputRange: [0, 8],
          extrapolate: Extrapolate.CLAMP,
        }),
        opacity: bannerHeight.interpolate({
          inputRange: [0, 102],
          outputRange: [0, 1],
          extrapolate: Extrapolate.CLAMP,
        }),
      }}
    >
      <Container>
        <CustomIcon name="link" size={25} color="#ff8700" />
        <BannerInfo>
          <BannerTitle>O PIX CHEGOU 🔑</BannerTitle>
          <BannerContent>
            Cadastre suas chaves para fazer pagamentos instantâneos a partir de
            16 de novembro. É de graça!
          </BannerContent>
        </BannerInfo>
        <BannerCloseButton onPress={() => setBannerIsClosed(true)}>
          <CustomIcon name="close" size={25} color="#8c91a9" />
        </BannerCloseButton>
      </Container>
    </Wrapper>
  );
};

export default Banner;
