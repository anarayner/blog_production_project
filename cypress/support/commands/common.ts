import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User } from '@/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

export const local = 'https://localhost:8000';
export const unrelated = 'https://raynerserver.vercel.app/login';

export const login = (username: string = 'user', password: string = 'user') =>
    cy
        .request({
            method: 'POST',
            url: unrelated,
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(body),
            );
            return body;
        });

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
