import { Screens } from '@common';
import { ArticleTextView, UILoader } from '@components';
import { Article } from '@models';
import { FilterMenu, StackNavProps } from '@modules';
import { useNavigation } from '@react-navigation/native';
import { AppDispatch, fetchTopStories, FiltersState, LoadingStages, RootState, TopStoriesState } from '@store';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const Trending = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { navigate } = useNavigation<StackNavProps>();

  const { articles, loading } = useSelector<RootState, TopStoriesState>(
    (state) => state.topStories
  );

  const { appliedFilters } = useSelector<RootState, FiltersState>(
    (state) => state.filters
  );

  const onPress = useCallback(
    (article: Article) => {
      navigate(Screens.ARTICLE, {
        ...article,
      });
    },
    [navigate]
  );

  useEffect(() => {
    dispatch(
      fetchTopStories(appliedFilters.length > 0 ? appliedFilters : undefined)
    );
  }, [fetchTopStories, appliedFilters]);

  if (loading === LoadingStages.PENDING) {
    return <UILoader />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FilterMenu>
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
                style={styles.listItem}
                onPress={() => onPress(item)}
              >
                <ArticleTextView
                  title={title}
                  abstract={abstract}
                  byline={byline}
                />
              </Pressable>
            );
          }}
        />
      </FilterMenu>
    </View>
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
    padding: 8,
    marginHorizontal: 6,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 12,
  },
});
