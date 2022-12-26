import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
import { PublicArticle } from '../../../../Article/model/types/article';

export const fetchArticlePortfolio = createAsyncThunk<
    PublicArticle,
    void,
    ThunkConfig<string>
    >(
        'articleDetails/fetchArticleProjects',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await axios.get<PublicArticle>('https://raynerserver.vercel.app/portfolio', {});

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
