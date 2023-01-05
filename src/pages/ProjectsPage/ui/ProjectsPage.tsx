import React from 'react';
import { Page } from '@/widgets/Page/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RatingCard } from '@/entities/Rating';

const ProjectsPage = () => {
    const dispatch = useAppDispatch();

    return (
        <Page>
            Coming soon..
            <RatingCard
                title="How would rate the article?"
                feedbackTitle="Please leave your feedback"
                hasFeedback
            />

        </Page>
    );
};

export default ProjectsPage;
