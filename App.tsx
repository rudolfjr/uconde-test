import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import {
  Rubik_700Bold,
  Rubik_500Medium,
  Rubik_400Regular,
} from "@expo-google-fonts/rubik";

import { Loading } from "@components/Loading";

import theme from "@theme/light";

import { Routes } from "@routes/index";
import { PlansProvider } from "@context/PlansContext";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <PlansProvider>{fontsLoaded ? <Routes /> : <Loading />}</PlansProvider>
    </ThemeProvider>
  );
}
