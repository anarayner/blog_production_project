import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleLinkBlockComponent.module.scss';
import { ArticleLinkBlock } from '../../model/types/article';

interface ArticleLinkBlockComponentProps {
    className?: string;
    block: ArticleLinkBlock;
}

export const ArticleLinkBlockComponent = ({ className, block }: ArticleLinkBlockComponentProps) => (
    <div className={classNames(cls.ArticleLinkBlockComponent, {}, [className])}>
        {block.title && (
            <a href={block.link}>
                <Text title={block.title} className={cls.title} />
            </a>
        )}
        {block.paragraphs.map((paragraph) => (
            <Text key={paragraph} text={paragraph} className={cls.paragraph} />
        ))}
    </div>
);
