
# Shopping APP

### Overview

- Shopping-app client side is built on top of React-scripts.js.
- Shopping-app server side is built on top of Node.js.

*  Requires Node version (v16.14.2)
*  Requires Yarn version (v1.22.0 or greater).


### Run app service in local

  #### Run app server by docker compose
  Pull whole app from github and access root directory of app
  you can open `docker-compose.yml` file to check relevant docker configuration

  ```
  docker-compose up
  open http://localhost:3000/#/shopping

  docker-compose stop
  ```

### Development by local
pull whole app from github and access root directory of app

  #### Run Client server

  ```
  yarn
  yarn start
  open http://localhost:3000/#/shopping
  ```


###  Unit Test
```
yarn test
```
2. `react-testing-library` - Please use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) and it's a react official recommendation solution for testing React components and hooks function..


###  Pre-commit Hooks
We set up two git pre-commit hooks:

1. `prettier` - this will check the js file and formate it automatically.
2. `@typescript-eslint` - this will check the ts file if there have any linter problems.


### Front-end File Structure
```
└── /src
  ├── /components - reusable components like navigation bar, buttons, forms
  ├── /hooks - Contains common hook function
  ├── /providers - Contains all provider context
  ├── /utils - utilities, helpers, constants.
  ├── /views/pages - majority of the app pages would be here
  ├── index.tsx
  └── App.tsx
```
Reference: [React File structure](https://reactjs.org/docs/faq-structure.html)