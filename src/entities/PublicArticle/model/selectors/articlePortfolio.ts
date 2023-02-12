import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlePortfolioData = (state: StateSchema) =>
    state.portfolio?.data;
export const getArticlePortfolioIsLoading = (state: StateSchema) =>
    state.portfolio?.isLoading || false;
export const getArticlePortfolioError = (state: StateSchema) =>
    state.portfolio?.error;
export const getArticlePortfolioDataProjects = (state: StateSchema) =>
    state.portfolio?.data?.projects;
