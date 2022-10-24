import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NewsFeed } from "@screens";
import { Provider } from "react-redux";
import { store } from "@store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          sceneContainerStyle={styles.container}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#006494",
            },
            headerTintColor: "white",
          }}
        >
          <Tab.Screen
            options={{
              title: "Top stories",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="newspaper-outline" size={size} color={color} />
              ),
            }}
            name="TopStories"
            component={NewsFeed}
          />
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
  },
});
