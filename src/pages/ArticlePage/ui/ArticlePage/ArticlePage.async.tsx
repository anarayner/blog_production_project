import React from 'react';

export const ArticlePageAsync = React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticlePage')), 400);
}));
