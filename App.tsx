import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "@store";
import { NavigationContainer } from "@react-navigation/native";
import { UILoader } from "@components";
import { Stack } from "@modules";

export default function App() {
  const [fontsLoaded] = useFonts({
    "wilson-wells": require("./assets/fonts/wilson-wells/wilson-wells.otf"),
  });

  if (!fontsLoaded) {
    return <UILoader />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
