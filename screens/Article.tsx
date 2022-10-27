import { useLayoutEffect } from "react";
import { ArticleTextView, ShareAction } from "@components";
import { Article as TArticle } from "@models";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";

export const Article = () => {
  const { params } = useRoute() as Partial<{ params: TArticle }>;

  const { setOptions } = useNavigation();

  const { abstract, title, byline, multimedia, url } = params!;

  useLayoutEffect(() => {
    setOptions({
      headerRight: ({ tintColor }: any) => {
        return (
          <View style={styles.headerActionsContainer}>
            <ShareAction
              color={tintColor}
              sharableContent={{
                url,
                title: "Random title",
              }}
            />
          </View>
        );
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: multimedia[0].url,
        }}
      />
      <View style={styles.textContainer}>
        <ArticleTextView
          enableLinking={true}
          abstract={abstract}
          title={title}
          byline={byline}
          url={url}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "50%",
  },
  textContainer: {
    marginTop: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  headerActionsContainer: {
    flexDirection: "row",
    marginRight: 10,
    padding: 3,
  },
});
