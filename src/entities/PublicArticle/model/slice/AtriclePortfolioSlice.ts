import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PublicArticle } from '@/entities/Article';
import { fetchArticlePortfolio } from '../../model/services/fetchArticlePortfolio/fetchArticlePortfolio';
import { ArticlePortfolioSchema } from '../types/articlePortfolioSchema';

const initialState: ArticlePortfolioSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const articlePortfolioSlice = createSlice({
    name: 'articlePortfolio',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlePortfolio.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlePortfolio.fulfilled,
                (state, action: PayloadAction<PublicArticle>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchArticlePortfolio.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articlePortfolioActions } = articlePortfolioSlice;
export const { reducer: articlePortfolioReducer } = articlePortfolioSlice;
