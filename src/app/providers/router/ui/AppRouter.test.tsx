import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';
import { ComponentRender } from '@/shared/lib/tests/componentRender/ComponentRender';
import {
    getRouteAdmin,
    getRouteProfile,
    getRouteProjects,
} from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    test('The page should render', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProjects(),
        });

        const page = await screen.findByTestId('ProjectsPage');
        expect(page).toBeInTheDocument();
    });

    test('Page not found', async () => {
        ComponentRender(<AppRouter />, {
            route: '/asfasfasfasf',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirecting an unauthorized user to the main page', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    // test('Access to a locked page for an authorized user', async () => {
    //     ComponentRender(<AppRouter />, {
    //         route: getRouteProfile('2'),
    //         initialState: {
    //             user: { authData: {}, _init: true },
    //         },
    //     });
    //
    //     const page = await screen.findByTestId('ProfilePage');
    //     expect(page).toBeInTheDocument();
    // });

    test('Доступ запрещен (отсутствует роль)', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _init: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Доступ разрешен (присутствует роль)', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _init: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
