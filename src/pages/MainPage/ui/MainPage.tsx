import React from 'react';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';

const MainPage = () => (
    <div>
        Main check
        <BugButton />
        <Counter />
    </div>
);

export default MainPage;
