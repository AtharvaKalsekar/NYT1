import { useCallback } from "react";
import { Alert, Linking, Pressable } from "react-native";

type PressableLinkProps = {
  url: string;
  children: React.ReactNode;
};

export const PressableLink = ({ url, children }: PressableLinkProps) => {
  const onPress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Cannot open url ${url}`);
    }
  }, [url]);

  return (
    <Pressable
      style={({ pressed }) => pressed && { backgroundColor: "#ccc" }}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};
