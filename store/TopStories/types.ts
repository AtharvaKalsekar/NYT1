import { Article } from "@models";
import { Loading } from "store/types";

export type TopStoriesState = Loading & {
  articles: Article[];
};
