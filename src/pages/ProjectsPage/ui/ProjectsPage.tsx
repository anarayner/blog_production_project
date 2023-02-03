import React, { useState } from 'react';
import { Page } from '@/widgets/Page';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RatingCard } from '@/entities/Rating';
// eslint-disable-next-line rayner-plugin/public-api-imports
import cls from '@/entities/Profile/ui/ProfileCard/ProfileCard.module.scss';
import { Input } from '@/shared/ui/Input/Input';

const ProjectsPage = () => {
    const dispatch = useAppDispatch();
    const [firstName, setFirstName] = useState('');

    return (
        <Page>
            Coming soon..
            <RatingCard
                title="How would rate the article?"
                feedbackTitle="Please leave your feedback"
                hasFeedback
            />
            <Input
                value={firstName}
                placeholder="First Name"
                className={cls.input}
                // readonly={readonly}
                onChange={(e) => setFirstName(e)}
                data-testid="ProfileCard.firstname"
            />
        </Page>
    );
};

export default ProjectsPage;
