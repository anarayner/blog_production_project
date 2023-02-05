import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LangSwitcherProps{
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };
    return (
        <div>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggle}
                className={classNames('', {}, [className])}
            >
                {t('EN')}
            </Button>
        </div>
    );
});
