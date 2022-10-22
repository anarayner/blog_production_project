import React from 'react';

export const ProfilePageAsync = React.lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
