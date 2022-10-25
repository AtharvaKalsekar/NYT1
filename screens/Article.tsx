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
      <ArticleTextView abstract={abstract} title={title} byline={byline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 150,
  },
});
