import { selectByTestId } from '../../helpers/selectByTestId';

describe('routing', () => {
    describe('user not authorized', () => {
        it('routing', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Click Sing in', () => {
            cy.visit('/');
            cy.get(selectByTestId('submit')).click();
        });
        it('Going to the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Goes to a route that does not exist ', () => {
            cy.visit('/fasfasfasf');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('user authorized', () => {
        beforeEach(() => {
            cy.login('admin', '123456');
        });
        it('Open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Переход открывает страницу со списком статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
