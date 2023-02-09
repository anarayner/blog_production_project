import React from 'react';
import { Page } from '@/widgets/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

const ProjectsPage = () => {
    const dispatch = useAppDispatch();

    return (
        <Page data-testid="ProjectsPage">
            Coming soon..

        </Page>
    );
};

export default ProjectsPage;
