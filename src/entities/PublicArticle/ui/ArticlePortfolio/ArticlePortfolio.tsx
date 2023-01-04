import { useTranslation } from 'react-i18next';
import {
    memo, useCallback, useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { VStack } from '@/shared/ui/Stack';
import { Card, CardTheme, Padding } from '@/shared/ui/Card/Card';
import { ArticleLinkBlockComponent } from '@/entities/Article/ui/ArticleLinkBlockComponent/ArticleLinkBlockComponent';
import { ArticleBlockType } from '@/entities/Article/model/consts/articleConsts';
import {
    getArticlePortfolioData, getArticlePortfolioDataProjects,
    getArticlePortfolioError,
    getArticlePortfolioIsLoading,
} from '../../model/selectors/articlePortfolio';
import { fetchArticlePortfolio } from '../../model/services/fetchArticlePortfolio/fetchArticlePortfolio';
import { articleDetailsReducer } from '../../../Article/model/slice/AtricleDetailsSlice';
import { ArticleBlock } from '../../../Article/model/types/article';
import { ArticleCodeBlockComponent } from '../../../Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../../../Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../../../Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticlePortfolio.module.scss';

interface ArticleDetailsProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticlePortfolio = memo(({ className }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticlePortfolioIsLoading);
    const portfolio = useSelector(getArticlePortfolioData);
    const error = useSelector(getArticlePortfolioError);
    const projects = useSelector(getArticlePortfolioDataProjects);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticlePortfolio());
        }
    }, [dispatch]);

    console.log(projects);

    const renderBlock = useCallback(
        (block: ArticleBlock) => {
            switch (block.type) {
            case ArticleBlockType.CODE:
                return (
                    <ArticleCodeBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.IMAGE:
                return (
                    <ArticleImageBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.TEXT:
                return (
                    <ArticleTextBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            case ArticleBlockType.LINK:
                return (
                    <ArticleLinkBlockComponent
                        key={block.id}
                        className={cls.block}
                        block={block}
                    />
                );
            default:
                return null;
            }
        },
        [],
    );

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('There was an error loading the article.')}
            />
        );
    } else if (portfolio) {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={portfolio?.img}
                        className={cls.avatar}
                    />
                </div>
                <VStack gap="4" max>
                    <Text
                        className={cls.title}
                        title={portfolio?.title}
                        text={portfolio?.subtitle}
                        size={TextSize.L}
                    />
                </VStack>
                <div className={cls.skills}>
                    <Text
                        align={TextAlign.LEFT}
                        title={t('Skills')}
                    />
                    <div className={cls.skills_wrap}>
                        {portfolio.skills.map((tab) => (
                            <Card
                                theme={CardTheme.OUTLINED}
                                className={cls.tab}
                                key={tab}
                                padding={Padding.S}
                            >
                                {tab}
                            </Card>
                        ))}
                    </div>
                </div>
                {portfolio?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="16" className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
