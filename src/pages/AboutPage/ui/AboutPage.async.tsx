import React from 'react';

export const AboutPageAsync = React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // LOADING IMITATION!
    setTimeout(() => resolve(import('./AboutPage')), 3000);
}));
