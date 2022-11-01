import { API_KEY, BASE_API_ENDPOINTS } from '@common';
import { Article, Section } from '@models';

export type TopStoriesGetParams = {
  sections?: Section[];
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
  sections = [Section.HOME],
}: TopStoriesGetParams) => {
  try {
    const data = await Promise.all<TopStoriesGetResponse>(
      sections.map(async (section) => {
        const sectionData = await fetch(
          `${BASE_API_ENDPOINTS.topstories}/${section}.json?api-key=${API_KEY}`,
          {
            method: "GET",
          }
        ).then((resp) => resp.json());
        return sectionData;
      })
    );

    const allArticles = data.flatMap((response) => {
      return response.results;
    });

    return allArticles;
  } catch (error) {
    throw new Error("Error while fetching TopStories");
  }
};
