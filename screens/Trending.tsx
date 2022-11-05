import { Screens } from '@common';
import { ArticleTextView, UILoader } from '@components';
import { NetworkCheckStatus, useNetwork } from '@hooks';
import { Article } from '@models';
import { FilterMenu, StackNavProps } from '@modules';
import { useNavigation } from '@react-navigation/native';
import { AppDispatch, fetchTopStories, FiltersState, LoadingStages, RootState, TopStoriesState } from '@store';
import { useCallback, useEffect } from 'react';
import { FlatList, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
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

  const { isAvailable, statusCheck } = useNetwork();

  const onPress = useCallback(
    (article: Article) => {
      navigate(Screens.ARTICLE, {
        ...article,
      });
    },
    [navigate]
  );

  const onPressOpenSettings = useCallback(async () => {
    try {
      //ref: https://developer.android.com/reference/android/provider/Settings.html#ACTION_WIFI_SETTINGS
      await Linking.sendIntent("android.settings.WIFI_SETTINGS");
    } catch (err) {
      console.error("Unable to open settings");
    }
  }, []);

  useEffect(() => {
    dispatch(
      fetchTopStories(appliedFilters.length > 0 ? appliedFilters : undefined)
    );
  }, [fetchTopStories, appliedFilters]);

  if (loading === LoadingStages.PENDING) {
    return <UILoader size={30} />;
  }

  if (statusCheck === NetworkCheckStatus.PENDING) {
    return <UILoader size={30} />;
  }

  if (!isAvailable && statusCheck === NetworkCheckStatus.DONE) {
    return (
      <View style={styles.internetUnavailableContainer}>
        <Text style={styles.infoText}>
          Internet not accessible. Please turn on data or connect to a Wifi to
          see the News !!
        </Text>
        <Pressable
          style={styles.settingsButton}
          onPress={onPressOpenSettings}
          android_ripple={{ color: "#9bdbfa" }}
        >
          <Text style={styles.settingsButtonText}>Open Wifi Settings </Text>
        </Pressable>
      </View>
    );
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
  infoText: {
    padding: 8,
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    width: "70%",
  },
  internetUnavailableContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  settingsButton: {
    backgroundColor: "#006494",
    padding: 8,
    textTransform: "uppercase",
    fontWeight: "700",
    borderRadius: 8,
    elevation: 4,
    marginVertical: 8,
  },
  settingsButtonText: {
    textTransform: "uppercase",
    fontWeight: "700",
    color: "white",
    padding: 2,
  },
});
