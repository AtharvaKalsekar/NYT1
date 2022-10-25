import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
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
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Article } from "@models";
import { StackNavProps } from "modules/navigation/types";

export const NewsFeed = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { navigate } = useNavigation<StackNavProps>();

  const { articles, loading } = useSelector<RootState, TopStoriesState>(
    (state) => state.topStories
  );

  const onPress = useCallback(
    (article: Article) => {
      navigate("Article", {
        ...article,
      });
    },
    [navigate]
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
          <Pressable
            android_ripple={{
              color: "#9bdbfa",
            }}
            onPress={() => onPress(item)}
          >
            <View style={styles.listItem}>
              <ArticleTextView
                title={title}
                abstract={abstract}
                byline={byline}
              />
            </View>
          </Pressable>
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
    padding: 6,
    marginHorizontal: 1,
    marginVertical: 3,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "black",
  },
});
