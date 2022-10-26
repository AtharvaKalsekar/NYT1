import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "@store";
import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { UILoader } from "@components";
import { Stack } from "@modules";
import * as Linking from "expo-linking";

const prefix = Linking.createURL("/");

export default function App() {
  const [fontsLoaded] = useFonts({
    "wilson-wells": require("./assets/fonts/wilson-wells/wilson-wells.otf"),
  });

  if (!fontsLoaded) {
    return <UILoader />;
  }

  const linking: LinkingOptions<any> = {
    prefixes: [prefix],
    config: {
      screens: {
        Article: {
          path: "/article/:articleId",
          parse: {
            id: (articleId) => articleId,
          },
        },
      },
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <Stack />
      </NavigationContainer>
      <StatusBar style="light" />
    </Provider>
  );
}
