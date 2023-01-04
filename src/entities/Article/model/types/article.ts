import { User } from '@/entities/User';
import { ArticleBlockType, ArticleType } from '../../model/consts/articleConsts';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export interface ArticleLinkBlock extends ArticleBlockBase {
    type: ArticleBlockType.LINK;
    paragraphs: string[];
    title?: string;
    link: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock | ArticleLinkBlock;

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    user: User;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export interface ProjectsArticle {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    blocks: ArticleBlock[];
    skills: string[];
}

export interface PublicArticle {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    blocks: ArticleBlock[];
    skills: Array<any>;
    projects: ProjectsArticle[];
}
