import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NewsFeed } from "@screens";
import { Provider } from "react-redux";
import { store } from "@store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="TopStories" component={NewsFeed} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
