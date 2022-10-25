import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
} from "react-native";

type TUILoader = ActivityIndicatorProps;

export const UILoader = (props: TUILoader) => {
  return (
    <ActivityIndicator
      style={styles.container}
      size={24}
      color="#006494"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
