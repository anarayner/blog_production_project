## Project Launch

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - start server + frontend project in dev mode
```

----

## Скрипты

- `npm run start` - Run frontend project on webpack dev server
- `npm run start:vite` - Run frontend project on vite
- `npm run start:dev` - Run frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Run frontend project on vite + backend
- `npm run start:dev:server` - Backend server launch
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minimized)
- `npm run eslint` - Check ts files with linter
- `npm run eslint-fix` - Fix ts files by linter
- `npm run lint:scss` - Check scss files style linter
- `npm run lint:scss:fix` - Correct scss files style by linter
- `npm run test:unit` - Running unit tests with jest
- `npm run test:ui` - Running screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run test:ui:json` - Generate json report for screenshot tests
- `npm run test:ui:html` - Generate HTML reports for screenshot test
- `npm run sb` - Start Storybook
- `npm run storybook:build` - Build storybook build
- `npm run prepare` - Pre commit hooks
- `npm run generate:slice` - Script for generating FSD slice


----

## Project architecture

The project is written according to Feature sliced design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Work with translations

The project uses the i18next library to work with translations.
Files with translations are stored in public/locales.

For comfortable work I recommend installing the plugin for webstorm/vscode

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 4 types of tests:
1) Unit tests on jest - `npm run test:unit`.
2) Component tests with React testing library - `npm run test:unit`.
3) Screenshot testing with loki `npm run test:ui`
4) e2e testing with Cypress `npm run test:e2e`

More about tests - [documentation testing](/docs/tests.md)

----

## Linting.

The project uses eslint to check typescript code and stylelint to check style files.

Also, for the strict control of the main architectural principles
eslint's own plugin *eslint-plugin-rayner-plugin* is used,
which contains 3 rules
1) path-checker - prohibits absolute imports within one module
2) layer-imports - checks correctness of using layers from FSD point of view
   (e.g. widgets can not be used in features and entities)
3) public-api-imports - allows import from other modules only from public api. Has auto fix

##### Run linters
- `npm run eslint` - Check ts files with linter
- `npm run eslint-fix` - Fix ts files by linter
- `npm run lint:scss` - Checking of scss files by linter
- `npm run lint:scss:fix` - Correct scss files style by linter

----
## Storybook

The project describes storybooks for each component.
Requests to the server are mocked with storybook-addon-mock.

A file with storybooks is created next to the component with the extension .stories.tsx

You can run storybook with the command:
- `npm run storybook

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```


----

## Project Configuration

The project contains 2 configs for development:
1. webpack - ./config/build
2. vite - vite.config.ts

Both builds are adapted to the main features of the application.

The entire configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - configuration of the test environment
- /config/storybook - configuration of the storybook

In the folder `scripts` there are different scripts for refactoring/simplification of code writing/generating reports etc.

----

## CI pipeline and pre commit hooks

The configuration of github actions is in /.github/workflows.
All kinds of tests are run in ci, project and storybook building, linking.

The pre-commit hooks check the project with linters, the config is in /.husky

----

### Data handling

Interaction with data is done with the redux toolkit.
If possible re-usable entities should be normalized using an EntityAdapter

Requests to the server are sent using [RTK query](/src/shared/api/rtkApi.ts)

To connect redusers asynchronously (so as not to pull them into a shared bundle) use
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----


## Entities (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)
