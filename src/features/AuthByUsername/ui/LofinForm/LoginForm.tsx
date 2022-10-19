import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { loginActions } from 'features/AuthByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);
    console.log('log', username);
    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text theme={TextTheme.PRIMARY} title={t('Login')} />
            {error && <Text theme={TextTheme.ERROR} text={error} />}
            <Input
                type="text"
                className={cls.input}
                placeholder="username"
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="password"
                className={cls.input}
                placeholder="password"
                onChange={onChangePassword}
                value={password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Sign in')}
            </Button>
        </div>
    );
});
