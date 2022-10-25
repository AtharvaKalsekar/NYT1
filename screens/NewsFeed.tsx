import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  LoadingStages,
  fetchTopStories,
  TopStoriesState,
  AppDispatch,
  RootState,
} from "@store";
import { ArticleTextView, UILoader } from "@components";

export const NewsFeed = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { articles, loading } = useSelector<RootState, TopStoriesState>(
    (state) => state.topStories
  );

  useEffect(() => {
    dispatch(fetchTopStories());
  }, [fetchTopStories]);

  if (loading === LoadingStages.PENDING) {
    return <UILoader />;
  }

  return (
    <FlatList
      style={styles.listContainer}
      data={articles}
      keyExtractor={(item) => item.uri}
      renderItem={({ item }) => {
        const { title, abstract, byline } = item;
        return (
          <ArticleTextView title={title} abstract={abstract} byline={byline} />
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
});
