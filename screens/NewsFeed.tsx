import { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/store-config";
import { fetchTopStories, TopStoriesState } from "@store";

export const NewsFeed = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { articles, loading } = useSelector<RootState, TopStoriesState>(
    (state) => state.topStories
  );

  useEffect(() => {
    dispatch(fetchTopStories());
  }, [fetchTopStories]);

  return (
    <FlatList
      style={styles.listContainer}
      data={articles}
      keyExtractor={(item) => item.uri}
      renderItem={({ item }) => {
        return (
          <View style={styles.listItem}>
            <Text>{item.byline}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 2,
  },
  listItem: {
    padding: 3,
    marginHorizontal: 1,
    marginVertical: 3,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "black",
  },
});
