import { PublicArticle } from '../../../Article/model/types/article';

export interface ArticlePortfolioSchema {
    data?: PublicArticle;
    isLoading?: boolean;
    error?: string;
}
