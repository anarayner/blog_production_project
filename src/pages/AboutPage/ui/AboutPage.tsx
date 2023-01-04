import React from 'react';
import { Page } from '@/widgets/Page/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

const AboutPage = () => {
    const dispatch = useAppDispatch();

    return (

        <Page>
            About
        </Page>

    );
};

export default AboutPage;
