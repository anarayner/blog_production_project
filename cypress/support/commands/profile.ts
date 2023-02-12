export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) =>
    cy.request({
        method: 'PUT',
        url: `https://raynerserver.vercel.app/profile/${profileId}`,
        headers: { Authorization: 'asasf' },
        body: {
            id: '3',
            first: 'User',
            lastname: 'User',
            age: 30,
            currency: 'USD',
            country: 'United State',
            city: 'Seattle',
            username: 'user',
            avatar: 'https://www.bleepstatic.com/content/hl-images/2022/05/12/evil-hacker-ai.jpg',
        },
    });

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
