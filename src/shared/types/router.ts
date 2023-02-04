import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line rayner-plugin/layer-imports
import { UserRole } from '@/entities/User';

export type AppRouteSProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
