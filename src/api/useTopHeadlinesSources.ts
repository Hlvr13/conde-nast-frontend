import { useApi } from '.';

interface TopHeadlinesSources {
  id?: string;
  name?: string;
  description?: string;
  url?: string;
  category?: string;
  language?: string;
  country?: string;
}

interface TopHeadlinesSourcesResp {
  error: null | Error;
  data: TopHeadlinesSources[];
  loading: boolean;
}

/**
 * This API does not require filters
 *
 * @param props
 * @returns
 */
export const useTopHeadlinesSources = (
  props = 'name',
): TopHeadlinesSourcesResp => {
  const resp = useApi(`query{
        topHeadlinesSources{
          ${props}
        }
      }`);
  return { ...resp, data: resp.data.topHeadlinesSources };
};
