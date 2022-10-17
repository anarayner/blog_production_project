import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input type="text" className={cls.input} placeholder="username" />
            <input type="password" className={cls.input} placeholder="password" />
            <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>
                {t('Sign in')}
            </Button>
        </div>
    );
};
