let profileId = '';

describe('User access the profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    // afterEach(() => {
    //     cy.resetProfile(profileId);
    // });
    it('profile successfully uploaded', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'User');
    });
    it('edit profile', () => {
        const newName = 'new';
        const newLastname = 'lastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
        cy.getByTestId('EditableProfileCardHeader.CancelButton').click();
        cy.updateProfile('User', 'User');
        cy.getByTestId('EditableProfileCardHeader.CancelButton').click();
    });
});
