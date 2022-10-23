import { Article, Section } from "@models";
import { API_KEY, BASE_API_ENDPOINTS } from "@common";

export type TopStoriesGetParams = {
  section?: Section;
};

export type TopStoriesGetResponse = {
  copyright: string;
  last_updated: string;
  num_results: number;
  results: Article[];
  section: string;
  status: string;
};

export const getTopStories = async ({
  section = Section.HOME,
}: TopStoriesGetParams) => {
  try {
    const data: TopStoriesGetResponse = await fetch(
      `${BASE_API_ENDPOINTS.topstories}/${section}.json?api-key=${API_KEY}`,
      {
        method: "GET",
      }
    ).then((resp) => resp.json());
    return data;
  } catch (error) {
    throw new Error("Error while fetching TopStories");
  }
};
