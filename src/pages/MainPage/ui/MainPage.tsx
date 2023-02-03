import React from 'react';
import { Page } from '@/widgets/Page';
import { ArticlePortfolio } from '@/entities/PublicArticle';

const MainPage = () => (
    <Page data-cy="MainPage">
        <ArticlePortfolio />
    </Page>
);

export default MainPage;
