import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NewsFeed } from "@screens";
import { Provider } from "react-redux";
import { store } from "@store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { UILoader } from "@components";

const Tab = createBottomTabNavigator();

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
        <Tab.Navigator
          sceneContainerStyle={styles.container}
          screenOptions={{
            headerStyle: {
              backgroundColor: "#006494",
            },
            headerTitle: ({ children, tintColor }) => (
              <Text
                style={{
                  fontFamily: "wilson-wells",
                  color: tintColor,
                  fontSize: 24,
                }}
              >
                {children}
              </Text>
            ),
            headerTintColor: "white",
            tabBarStyle: {
              backgroundColor: "white",
              paddingVertical: 3,
            },
            tabBarActiveTintColor: "#006494",
          }}
        >
          <Tab.Screen
            options={{
              title: "Top stories",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="newspaper-outline" size={size} color={color} />
              ),
              tabBarLabel: "Trending",
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
