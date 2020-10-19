import React, { useState } from "react";
import { FlatList, ListRenderItemInfo, Text } from "react-native";
import Animated, {
  call,
  cond,
  Extrapolate,
  set,
  useCode,
  useValue,
} from "react-native-reanimated";
import { timing } from "react-native-redash/lib/module/v1";

import { useIsFirstRender } from "../../hooks/useIsFirstRender";

import SVGLoader from "../SVGLoader";
import CustomIcon from "../CustomIcon";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

import { MenuItemContainer, MenuItem, Icon, MenuItemTitle } from "./styles";

const items = [
  {
    icon: "arrows-rotate",
    title: "Transferência",
  },
  {
    icon: "pix",
    title: "Pix",
  },
  {
    icon: <SVGLoader name="pai_logo" width={30} height={17} />,
    title: "Investimentos",
  },
  {
    icon: "card",
    title: "Cartões",
  },
  {
    icon: "gift",
    title: "Gift Card",
  },
  {
    icon: "billet",
    title: "Pagamentos",
  },
  {
    icon: "insurance",
    title: "Seguros",
  },
  {
    icon: "bill",
    title: "Depósito por boleto",
  },
  {
    icon: "check-paper",
    title: "Depósito por cheque",
  },
  {
    icon: "mei",
    title: "Conta MEI",
  },
  {
    icon: "schedule",
    title: "Agendamentos",
  },
  {
    icon: "salary-portability",
    title: "Portabilidade de salário",
  },
  {
    icon: "hand-money",
    title: "Empréstimo",
  },
  {
    icon: "house-money",
    title: "Financiamento Imobiliário",
  },
  {
    icon: "automatic-debits",
    title: "Débito automático",
  },
  {
    icon: "key",
    title: "Consórcio",
  },
  {
    icon: "exchange",
    title: "Câmbio",
  },
  {
    icon: "recharge-phone",
    title: "Recarga",
  },
  {
    icon: "qr-code-scan",
    title: "Interpag",
  },
];

interface MenuItemProps {
  icon: string | JSX.Element;
  title: string;
}

interface Props {
  handleScrollToTop: () => void;
  menuIsExpanded: boolean;
}

const Menu: React.FC<Props> = ({ handleScrollToTop, menuIsExpanded }) => {
  const isFirstRender = useIsFirstRender();

  const menuHeight = useValue(
    isFirstRender ? 115 : 120 * Math.ceil(items.length / 3)
  );
  const menuItemTranslateY = useValue(-30);

  useCode(
    () => [
      cond(Number(!menuIsExpanded), [
        set(menuHeight, timing({ from: menuHeight, to: 115 })),
        set(menuItemTranslateY, timing({ from: menuItemTranslateY, to: -30 })),
        call([], handleScrollToTop),
      ]),
      cond(Number(menuIsExpanded), [
        set(
          menuHeight,
          timing({
            from: menuHeight,
            to: 120 * Math.ceil(items.length / 3),
            duration: 300,
          })
        ),
        set(
          menuItemTranslateY,
          timing({ from: menuItemTranslateY, to: 0, duration: 300 })
        ),
      ]),
    ],
    [menuIsExpanded]
  );

  return (
    <AnimatedFlatList
      data={items}
      renderItem={({ item, index }: ListRenderItemInfo<MenuItemProps>) => (
        <MenuItemContainer
          style={{
            transform: [
              {
                translateY:
                  index > 2 ? menuItemTranslateY : new Animated.Value(0),
              },
            ],
            opacity:
              index > 2
                ? menuItemTranslateY.interpolate({
                    inputRange: [-30, 0],
                    outputRange: [0, 1],
                    extrapolate: Extrapolate.CLAMP,
                  })
                : 1,
          }}
        >
          <MenuItem>
            <Icon>
              {typeof item.icon === "string" ? (
                <CustomIcon name={item.icon} size={30} color="#ff8700" />
              ) : (
                item.icon
              )}
            </Icon>
            <MenuItemTitle>{item.title}</MenuItemTitle>
          </MenuItem>
        </MenuItemContainer>
      )}
      keyExtractor={(item: MenuItemProps) => item.title}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        justifyContent: "space-between",
      }}
      scrollEnabled={false}
      style={{ height: menuHeight }}
    />
  );
};

export default Menu;
