import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Theme } from '@/shared/const/theme';

interface ThemeSwitcherProps{
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon /> }
        </Button>
    );
});
