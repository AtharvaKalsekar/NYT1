const BASE_URL = "https://api.nytimes.com";
const TOP_STORIES_PATH = "/svc/topstories/v2";

export const API_KEY = "edTOGyAP76XdAxaKwbnD9IqL8mpxbAXn";

export const BASE_API_ENDPOINTS = {
  topstories: `${BASE_URL}${TOP_STORIES_PATH}`,
};

export enum Screens {
  ARTICLE = "Article",
  MAIN = "Main",
  TRENDING = "Trending",
}

type ScreenConfig = { [key in Screens]: { title: string; name: string } };

export const SCREENS_CONFIG: ScreenConfig = {
  [Screens.ARTICLE]: {
    title: "Article",
    name: "Article",
  },
  [Screens.MAIN]: {
    title: "Main",
    name: "Main",
  },
  [Screens.TRENDING]: {
    title: "Trending",
    name: "Trending",
  },
};
