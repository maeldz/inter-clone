import React, { useRef, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { Extrapolate } from "react-native-reanimated";

import supportAvatar from "../../assets/images/babi.png";

import CustomIcon from "../../components/CustomIcon";
import SVGLoader from "../../components/SVGLoader";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Banner from "../../components/Banner";
import CardList from "../../components/CardList";

import { useAuth } from "../../contexts/auth";

import {
  Container,
  Content,
  ExpandBarContainer,
  ExpandBar,
  Buttons,
  ShoppingButton,
  ShoppingButtonInfo,
  ShoppingButtonTitle,
  ShoppingButtonDescription,
  RightArrow,
  ButtonsInRow,
  InterTravelButton,
  InterTravelButtonTitle,
  InterTravelButtonDescription,
  ShellBoxButton,
  ShellBoxButtonTitle,
  ShellBoxButtonDescription,
  LifeStyleMenuItem,
  LifeStyleMenuImage,
  LifeStyleMenuTitle,
  Separator,
  BottomCards,
  SupportCard,
  SupportCardInfo,
  SupportAvatarContainer,
  SupportAvatar,
  SupportQuestion,
  SupportQuestionFirstLine,
  SupportQuestionSecondLine,
  SupportCardButton,
  ISafeCard,
  ISafeCardGenerate,
  ISafeCardButton,
  ISafeCardGenerateText,
  Footer,
  FooterLeftSide,
  FooterTitle,
  FooterDescription,
  FooterButtonContainer,
  FooterButton,
  FooterButtonText,
  FooterRightSide,
} from "./styles";

interface MenuItemProps {
  icon: string | JSX.Element;
  title: string;
}

interface MenuLifeStyleItemProps {
  image: {
    name: string;
    width: number;
    height: number;
  };
  title: string;
}

const lifeStyleItems = [
  {
    image: { name: "lifestyle_house", width: 55, height: 34 },
    title: "Casa",
  },
  {
    image: { name: "lifestyle_entertainment", width: 55, height: 36 },
    title: "Entretenimento",
  },
  {
    image: { name: "lifestyle_technology", width: 29, height: 55 },
    title: "Tecnologia",
  },
  {
    image: { name: "lifestyle_mobility", width: 55, height: 23 },
    title: "Transporte",
  },
  {
    image: { name: "lifestyle_sport", width: 55, height: 55 },
    title: "Esporte",
  },
  {
    image: { name: "lifestyle_travel", width: 55, height: 38 },
    title: "Viagem",
  },
  {
    image: { name: "lifestyle_drugstore", width: 48, height: 55 },
    title: "Saúde",
  },
  {
    image: { name: "lifestyle_beauty", width: 41, height: 55 },
    title: "Beleza",
  },
  {
    image: { name: "lifestyle_fashion", width: 52, height: 55 },
    title: "Moda",
  },
];

const Home: React.FC = () => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);

  function handleScrollToTop() {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }

  return (
    <Container showsVerticalScrollIndicator={false} ref={scrollViewRef}>
      <Header />
      <Content>
        <Menu
          handleScrollToTop={handleScrollToTop}
          menuIsExpanded={menuIsExpanded}
        />
        <ExpandBarContainer onPress={() => setMenuIsExpanded(!menuIsExpanded)}>
          <ExpandBar>
            {menuIsExpanded ? (
              <CustomIcon name="arrow-up" size={8.5} color="#ff8700" />
            ) : (
              <CustomIcon name="arrow-down" size={8.5} color="#ff8700" />
            )}
          </ExpandBar>
        </ExpandBarContainer>
        <Banner />
        <CardList />
        <Buttons>
          <ShoppingButton>
            <SVGLoader name="shopping_cart" width={41} height={40} />
            <ShoppingButtonInfo>
              <ShoppingButtonTitle>Shopping</ShoppingButtonTitle>
              <ShoppingButtonDescription>
                Aproveite todos os produtos com cashback!
              </ShoppingButtonDescription>
            </ShoppingButtonInfo>
            <RightArrow>
              <CustomIcon name="arrow-right" size={13} color="#ff8700" />
            </RightArrow>
          </ShoppingButton>
          <ButtonsInRow>
            <InterTravelButton>
              <CustomIcon name="travels" size={25} color="#ff8700" />
              <InterTravelButtonTitle>Inter Travel</InterTravelButtonTitle>
              <InterTravelButtonDescription>
                Receba cashback em passagens aéreas
              </InterTravelButtonDescription>
            </InterTravelButton>
            <ShellBoxButton>
              <CustomIcon name="shellbox" size={25} color="#ff8700" />
              <ShellBoxButtonTitle>Shell Box</ShellBoxButtonTitle>
              <ShellBoxButtonDescription>
                Abasteça seu veículo com cashback
              </ShellBoxButtonDescription>
            </ShellBoxButton>
          </ButtonsInRow>
        </Buttons>
        <FlatList
          data={lifeStyleItems}
          renderItem={({ item }) => (
            <LifeStyleMenuItem>
              <LifeStyleMenuImage>
                <SVGLoader
                  name={item.image.name}
                  width={item.image.width}
                  height={item.image.height}
                />
              </LifeStyleMenuImage>
              <LifeStyleMenuTitle>{item.title}</LifeStyleMenuTitle>
            </LifeStyleMenuItem>
          )}
          keyExtractor={(item: MenuLifeStyleItemProps) => item.title}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 8,
            justifyContent: "space-between",
            backgroundColor: "#fff",
          }}
          scrollEnabled={false}
        />
        <Separator />
        <BottomCards>
          <SupportCard>
            <SupportCardInfo>
              <SupportAvatarContainer>
                <SupportAvatar source={supportAvatar} />
              </SupportAvatarContainer>
              <SupportQuestion>
                <SupportQuestionFirstLine>Oi, Ismael.</SupportQuestionFirstLine>
                <SupportQuestionSecondLine>
                  Posso ajudar?
                </SupportQuestionSecondLine>
              </SupportQuestion>
            </SupportCardInfo>
            <SupportCardButton>
              <CustomIcon name="arrow-right" size={12} color="#ff8700" />
            </SupportCardButton>
          </SupportCard>
          <ISafeCard>
            <SVGLoader name="isafe_logo" width={120} height={40} />
            <ISafeCardGenerate>
              <ISafeCardButton>
                <CustomIcon name="four-dots" size={30} color="#ff8700" />
              </ISafeCardButton>
              <ISafeCardGenerateText>Gerar</ISafeCardGenerateText>
            </ISafeCardGenerate>
          </ISafeCard>
        </BottomCards>
        <Footer>
          <FooterLeftSide>
            <FooterTitle>Convide seus amigos</FooterTitle>
            <FooterDescription>
              Indique a Conta Digital e chame todo mundo pra ficar livre das
              tarefas!
            </FooterDescription>
            <FooterButtonContainer>
              <FooterButton>
                <FooterButtonText>CONVIDAR</FooterButtonText>
              </FooterButton>
            </FooterButtonContainer>
          </FooterLeftSide>
          <FooterRightSide>
            <SVGLoader name="group_people" width={155} height={152} />
          </FooterRightSide>
        </Footer>
      </Content>
    </Container>
  );
};

export default Home;
