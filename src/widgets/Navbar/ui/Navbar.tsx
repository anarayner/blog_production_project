import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { BrowserView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import {
    getUserAuthData,
} from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text';
import { AppLinkTheme, AppLink } from '@/shared/ui/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import cls from './Navbar.module.scss';
import { RoutePath } from '@/shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    if (authData) {
        return (
            <div
                className={classNames(cls.Navbar, {}, [className])}
                data-testid="test1"
            >
                <BrowserView>
                    <Text
                        className={cls.appName}
                        title="RAYNER"
                        theme={TextTheme.PRIMARY}
                    />
                </BrowserView>
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.PRIMARY}
                    className={cls.createBtn}
                >
                    {t('Create new article')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>

            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <BrowserView>
                <Text
                    className={cls.appName}
                    title="RAYNER"
                    theme={TextTheme.PRIMARY}
                />
            </BrowserView>
            <Button
                className={cls.links}
                theme={ButtonTheme.OUTLINE}
                onClick={onShowModal}
                data-cy="submit"
            >
                {t('Sign in')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
});
