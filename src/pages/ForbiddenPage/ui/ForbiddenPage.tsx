import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('');

    return (
        <Page>
            {t('Sorry, You Are Not Allowed to Access This Page')}
        </Page>
    );
};

export default ForbiddenPage;
