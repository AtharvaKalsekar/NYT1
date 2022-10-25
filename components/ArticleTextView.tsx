import { StyleSheet, Text, View } from "react-native";

type TArticleTextView = {
  title: string;
  abstract: string;
  byline: string;
};

export const ArticleTextView = ({
  title,
  abstract,
  byline,
}: TArticleTextView) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.abstract}>{abstract}</Text>
      <Text style={styles.byline}> - {byline}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14,
  },
  abstract: {
    fontSize: 16,
    marginBottom: 14,
  },
  byline: {
    fontSize: 12,
    marginBottom: 5,
    fontStyle: "italic",
  },
});
