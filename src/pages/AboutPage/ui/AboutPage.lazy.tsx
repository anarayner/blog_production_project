import React from 'react';

export const AboutPageLazy = React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 3000);
}));
