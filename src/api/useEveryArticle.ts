import { useApi } from '.';
import { convertObjToFilterStr } from '../utils';

interface Source {
  id: string | null;
  name: string;
}

interface Article {
  source?: Source;
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

interface EverythingFilters {
  qInTitle?: string;
  q: string;
  from?: string;
  to?: string;
  language?: string;
  sortBy?: string;
  pageSize?: string;
  page?: string;
}

interface UseEveryArticleResp {
  error: null | Error;
  data: Article[];
  loading: boolean;
}

/**
 *
 * @param {EverythingFilters} filters
 * @param {Article} props
 * @returns {UseEveryArticleResp[]}
 */
export const useEveryArticle = (
  filters: EverythingFilters,
  props = 'title',
): UseEveryArticleResp => {
  const formattedFilters = convertObjToFilterStr(
    filters as unknown as { [key: string]: string },
  );

  const resp = useApi(`query{
      everything(${formattedFilters}){
          ${props}
        }
      }`);
  return { ...resp, data: resp.data.everything };
};
