import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInit, userActions } from '@/entities/User';
import { PageLoader } from '@/shared/ui/PageLoader';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const initialized = useSelector(getUserInit);
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {initialized && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
