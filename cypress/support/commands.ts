// https://on.cypress.io/custom-commands
// ***********************************************

import '@testing-library/cypress/add-commands';
import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
