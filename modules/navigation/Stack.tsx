import { Screens, SCREENS_CONFIG } from "@common";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Article } from "@screens";
import { StyleSheet, Text } from "react-native";
import { BottomTabs } from "./BottomTabs";
import { StackNavParamList } from "./types";

const StackNav = createNativeStackNavigator<StackNavParamList>();

export const Stack = () => {
  return (
    <StackNav.Navigator
      defaultScreenOptions={{
        contentStyle: styles.container,
      }}
    >
      <StackNav.Screen
        name={Screens.MAIN}
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name={Screens.ARTICLE}
        component={Article}
        options={{
          headerStyle: {
            backgroundColor: "#006494",
          },
          headerTintColor: "white",
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
        }}
      />
    </StackNav.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  headerText: {
    fontFamily: "wilson-wells",
    fontSize: 20,
  },
});
