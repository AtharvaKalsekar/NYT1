import { useEffect } from "react";
import { Text, View } from "react-native";
import { getTopStories } from "@services";

export const NewsFeed = () => {
  useEffect(() => {
    const data = getTopStories({});
    console.log({ data1: data });
  }, []);

  return (
    <View>
      <Text>NewsFeed page.</Text>
    </View>
  );
};
