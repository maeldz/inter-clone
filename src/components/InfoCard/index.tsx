import React from "react";
import Animated, {
  add,
  Extrapolate,
  multiply,
  sub,
} from "react-native-reanimated";

import CustomIcon from "../CustomIcon";
import SVGLoader from "../SVGLoader";

import {
  Container,
  CardHeader,
  CardTitleContainer,
  CardTitle,
  CardContent,
  ContentDescription,
  LeftSide,
  RightSide,
  KnowMore,
  KnowMoreText,
} from "./styles";

interface Props {
  index: number;
  width: number;
  title: string;
  description: string;
  image: {
    name: string;
    width: number;
    height: number;
  };
  icon: string;
  offsetX: Animated.Value<number>;
}

const InfoCard: React.FC<Props> = ({
  index,
  width,
  title,
  description,
  image,
  icon,
  offsetX,
}) => {
  return (
    <Container
      width={width}
      style={{
        transform: [
          {
            scale: offsetX.interpolate({
              inputRange: [
                multiply(sub(index, 1), width),
                multiply(index, width),
                multiply(add(index, 1), width),
              ],
              outputRange: [0.9, 1, 0.9],
              extrapolate: Extrapolate.CLAMP,
            }),
          },
        ],
      }}
    >
      <CardHeader>
        <CardTitleContainer>
          <CustomIcon name={icon} size={25} color="#ff8700" />
          <CardTitle>{title}</CardTitle>
        </CardTitleContainer>
      </CardHeader>
      <CardContent>
        <LeftSide>
          <SVGLoader
            name={image.name}
            width={image.width}
            height={image.height}
          />
        </LeftSide>

        <RightSide>
          <ContentDescription>{description}</ContentDescription>
          <KnowMore>
            <KnowMoreText>SAIBA MAIS</KnowMoreText>
          </KnowMore>
        </RightSide>
      </CardContent>
    </Container>
  );
};

export default InfoCard;
