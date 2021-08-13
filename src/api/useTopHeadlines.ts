import { useApi } from '.';
import { convertObjToFilterStr } from '../utils';

export interface Source {
  id: string | null;
  name: string;
}

interface TopHeadlinesFilters {
  source?: Source;
  q?: string;
  category?: string;
  language?: string;
  country: string;
}

interface TopHeadline {
  source?: string;
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

interface UseTopHeadlinesResponse {
  error: null | Error;
  data: TopHeadline[];
  loading: boolean;
}

export const useTopHeadlines = (
  filters: TopHeadlinesFilters,
  props = 'title',
): UseTopHeadlinesResponse => {
  const formattedFilters = convertObjToFilterStr(
    filters as unknown as { [key: string]: string },
  );

  const resp = useApi(`query{
      topHeadlines(${formattedFilters}){
          ${props}
        }
      }`);
  return { ...resp, data: resp.data.topHeadlines };
};
