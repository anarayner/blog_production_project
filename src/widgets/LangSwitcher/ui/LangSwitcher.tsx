import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";
import {ThemeButton} from "shared/ui/Button/ui/Button";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "widgets/ThemeSwitcher/ui/ThemeSwitcher.module.scss";


interface LangSwitcherProps{
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {

    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en'? 'ru': 'en')
    }
    return(
        <div>
            <Button theme={ThemeButton.CLEAR}
                    onClick={toggle}
                    className={classNames(cls.LangSwitcher, {}, [className])}
            >
                {t('EN')}
            </Button>
        </div>
    )
};