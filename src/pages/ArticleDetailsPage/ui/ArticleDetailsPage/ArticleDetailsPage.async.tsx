import React from 'react';

export const ArticleDetailsPageAsync = React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
}));
