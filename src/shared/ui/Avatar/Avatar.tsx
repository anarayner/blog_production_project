import { useTranslation } from 'react-i18next';
import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppImage } from '@/shared/ui/AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import UserIconLarge from '../../assets/icons/user-filled-150.svg';
import { Icon } from '../Icon';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    large?: boolean;
}

export const Avatar = ({
    className,
    src,
    size = 100,
    alt,
    large,
}: AvatarProps) => {
    const { t } = useTranslation();
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    const icon = large ? UserIconLarge : UserIcon;
    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={icon} />;
    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, {}, [className])}
        />
    );
};
