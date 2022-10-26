import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NewsFeed } from "@screens";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
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
          title: "Top Stories",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
          tabBarLabel: "Trending",
        }}
        name="TopStories"
        component={NewsFeed}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
});
