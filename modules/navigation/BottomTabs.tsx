import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Trending } from "@screens";
import { Screens, SCREENS_CONFIG } from "@common";

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
          title: SCREENS_CONFIG[Screens.TRENDING].title,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} />
          ),
          tabBarLabel: "Trending",
        }}
        name={SCREENS_CONFIG[Screens.TRENDING].name}
        component={Trending}
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
