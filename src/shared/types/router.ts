import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';

export type AppRouteSProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
}
