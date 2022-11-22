import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // LOADING IMITATION!
    setTimeout(() => resolve(import('./AddCommentForm')), 3000);
}));
