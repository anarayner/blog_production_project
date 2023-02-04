import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { PageLoader } from '@/shared/ui/PageLoader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value?: string)=> void;
    onChangeLastname?: (value?: string)=> void;
    onChangeAge?: (value?: string)=> void;
    onChangeCity?: (value?: string)=> void;
    onChangeUsername?: (value?: string)=> void;
    onChangeAvatar?: (value?: string)=> void;
    onChangeCurrency?: (currency?: Currency)=> void;
    onChangeCountry?: (country?: Country)=> void;

}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly = true,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className])}>
                <PageLoader />
            </div>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('An error occurred while loading the profile')}
                    text={t('Try to reload the page')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="8" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max>
                    <Avatar src={data?.avatar} alt="avatar" size={150} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t('First Name')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeFirstname}
                data-testid="ProfileCard.firstname"
                data-cy="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Last Name')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeLastname}
                data-testid="ProfileCard.lastname"
                data-cy="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={t('Your age')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeAge}
            />
            <Input
                value={data?.city}
                placeholder={t('City')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <Input
                value={`@${data?.username}`}
                placeholder={t('Username')}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeUsername}
            />
            {!readonly && (
                <Input
                    value={data?.avatar}
                    placeholder={t('Avatar link')}
                    className={cls.input}
                    readonly={readonly}
                    onChange={onChangeAvatar}
                />
            )}
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
