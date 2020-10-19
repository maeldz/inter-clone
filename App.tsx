import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import RootProvider from "./src/contexts";
import Routes from "./src/routes";
import { AppLoading } from "expo";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs(["VirtualizedLists"]);

  const [fontsLoaded] = useFonts({
    interIcons: require("./src/assets/fonts/inter-icons/font.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <RootProvider>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <Routes />
      </SafeAreaProvider>
    </RootProvider>
  );
}
