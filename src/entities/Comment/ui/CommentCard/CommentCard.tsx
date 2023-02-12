import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    isLoading?: boolean;
    comment?: Comment;
}

export const CommentCard = memo(
    ({ className, isLoading, comment }: CommentCardProps) => {
        const { t } = useTranslation();

        if (isLoading) {
            return (
                <div className={classNames(cls.CommentCard, {}, [className])}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton
                            height={16}
                            width={100}
                            className={cls.username}
                        />
                    </div>
                    <Skeleton className={cls.text} width="100%" height={50} />
                </div>
            );
        }

        if (!comment) {
            return null;
        }

        return (
            <VStack
                max
                gap="8"
                className={classNames(cls.CommentCard, {}, [className])}
            >
                <AppLink
                    to={getRouteProfile(`${comment.user.id}`)}
                    className={cls.header}
                >
                    {comment.user.avatar ? (
                        <Avatar size={30} src={comment.user.avatar} />
                    ) : null}
                    <Text
                        className={cls.username}
                        title={comment?.user.username}
                    />
                </AppLink>
                <Text className={cls.text} text={comment?.text} />
            </VStack>
        );
    },
);
