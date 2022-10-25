import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Article } from "@screens";
import { StyleSheet } from "react-native";
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
        name="Main"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen name="Article" component={Article} />
    </StackNav.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
