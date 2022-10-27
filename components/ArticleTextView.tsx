import { StyleSheet, Text, View } from "react-native";
import { PressableLink } from "./PressableLink";

type TArticleTextView = {
  title: string;
  abstract: string;
  byline: string;
  enableLinking?: boolean;
  url?: string;
};

export const ArticleTextView = ({
  title,
  abstract,
  byline,
  enableLinking = false,
  url,
}: TArticleTextView) => {
  let headLine = <Text style={styles.title}>{title}</Text>;

  if (enableLinking && url) {
    headLine = (
      <PressableLink url={url}>
        <Text style={styles.title}>{title}</Text>
      </PressableLink>
    );
  }

  return (
    <>
      {headLine}
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
