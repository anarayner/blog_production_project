import React from 'react';
import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => (
    <div>
        <div style={{ color: 'red' }}>TEST</div>
        Main check
        <BugButton />
    </div>
);

export default MainPage;
