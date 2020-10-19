import React from "react";
import Animated, {
  add,
  Extrapolate,
  multiply,
  sub,
} from "react-native-reanimated";

import {
  Container,
  CardHeader,
  CardTitleContainer,
  CardTitle,
  CardVisibility,
  CardContent,
  HiddenCardContent,
  HiddenContentDescription,
} from "./styles";

import CustomIcon from "../../components/CustomIcon";
import SVGLoader from "../SVGLoader";

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
  icon:
    | string
    | {
        name: string;
        width: number;
        height: number;
      };
  offsetX: Animated.Value<number>;
}

const Card: React.FC<Props> = ({
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
          {typeof icon === "string" ? (
            <CustomIcon name={icon} size={20} color="#ff8700" />
          ) : (
            <SVGLoader
              name={icon.name}
              width={icon.width}
              height={icon.height}
            />
          )}
          <CardTitle>{title}</CardTitle>
        </CardTitleContainer>
        <CardVisibility>
          <CustomIcon name="eye-close" size={25} color="#ff8700" />
        </CardVisibility>
      </CardHeader>
      <CardContent>
        <HiddenCardContent>
          <SVGLoader
            name={image.name}
            width={image.width}
            height={image.height}
          />
          <HiddenContentDescription>{description}</HiddenContentDescription>
        </HiddenCardContent>
      </CardContent>
    </Container>
  );
};

export default Card;
