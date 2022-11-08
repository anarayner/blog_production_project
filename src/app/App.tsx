import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInit, userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const initialized = useSelector(getUserInit);
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    console.log(theme);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="loading">
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
