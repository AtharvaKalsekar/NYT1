import { useCallback } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  Pressable,
  Share,
  ShareContent,
  StyleSheet,
} from "react-native";

type ShareActionProps = {
  color?: string;
  sharableContent: ShareContent;
};

export const ShareAction = ({
  color = "#fff",
  sharableContent,
}: ShareActionProps) => {
  const onPress = useCallback(async () => {
    try {
      const result = await Share.share(sharableContent);

      if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert("Error occured while sharing");
    }
  }, [sharableContent]);

  return (
    <Pressable
      android_ripple={{
        color: "#75c1e6",
      }}
      onPress={onPress}
      style={styles.container}
    >
      <Ionicons color={color} size={24} name="share-social" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    overflow: "hidden",
  },
});
