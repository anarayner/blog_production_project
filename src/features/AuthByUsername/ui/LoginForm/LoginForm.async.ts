import React, { FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = React.lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // LOADING IMITATION!
    setTimeout(() => resolve(import('./LoginForm')), 3000);
}));
