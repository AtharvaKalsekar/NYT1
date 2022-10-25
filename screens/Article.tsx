import { ArticleTextView } from "@components";
import { Article as TArticle } from "@models";
import { useRoute } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";

export const Article = () => {
  const { params } = useRoute() as Partial<{ params: TArticle }>;

  const { abstract, title, byline, multimedia } = params!;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: multimedia[0].url,
        }}
      />
      <View style={styles.textContainer}>
        <ArticleTextView abstract={abstract} title={title} byline={byline} />
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
});
