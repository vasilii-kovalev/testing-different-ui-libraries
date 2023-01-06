# Testing different UI libraries

This repository contains examples of testing Select component from different UI libraries using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Test example

For each UI library, a separate page was created (with code splitting to ensure they don't affect each other). The pages contain:

- A title
- A link to the home page (not used in tests, as well as the home page, and are presented for convenience when moving between pages to verify them visually)
- A select with four options:
  - 10 (selected by default)
  - 20
  - 30
  - 40
- A text, that changes according to the selected option

The select component was chosen, because it is a perfect example of an asynchronous component, since when using it, it is necessary to:

- **Wait** until it gets the initial value
- Click on it and **wait** until the options list is displayed
- Select an option and **wait** until it has the expected effect

The simplicity of testing such scenarios says about the quality of the UI library, and gives users confidence, that the code works correctly.

## Test cases

Since the select not only changes itself after selecting options, but changes something else (a text) in the test example, it makes it possible to write good integration tests and check how easy this (usually non-trivial) task can be done.

For each page there are two tests:

- Static:
  - Render the page
  - Check the title
  - Check the dependent text's content
  - Check the select's value
- Dynamic:
  - Render the page
  - Select the value, that changes the dependent text's content
  - Check the dependent text's content
  - Check the select's value

## Tested UI libraries

- [Ant Design](https://ant.design/) [[code](./src/pages/ant-design.tsx)] [[tests](./src/pages/ant-design.test.tsx)]
- [React Bootstrap](https://react-bootstrap.github.io/) [[code](./src/pages/bootstrap.tsx)] [[tests](./src/pages/bootstrap.test.tsx)]
- [Material UI](https://mui.com/) [[code](./src/pages/material-ui.tsx)] [[tests](./src/pages/material-ui.test.tsx)]
- [UUI](https://uui.epam.com/) [[code](./src/pages/uui.tsx)] [[tests](./src/pages/uui.test.tsx)]
