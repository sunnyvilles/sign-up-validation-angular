# sign-up-form-angular

The application showcases a sign up page for a user to fill in his details and create a user. a success notification page shows up if user is created successfully .

Following env used for development
    node v20.2.0
    npm v9.6.6
    macos Montery 12.5.1
    Vscode
    
used: angular, angular-material , scss and flex ,rxjs

## Steps

run following commands to install and execute from the base directory of project

### Install dependencies
```sh
npm install
```

### Development server
```sh
ng serve
```
### Build

Run below command to build the project. The build artifacts will be stored in the `dist/` directory.
```sh
ng build
```

### Running tests

#### unit test
```sh
ng test
ng test --code-coverage
```

#### e2e test
```sh
ng e2e
```

### Lint with EsLint

```sh
ng lint
```

## assumptions:
- server port is allowed for CORS 

### The good

1. no bootstrap only scss and flex for responsive behaviour (material is used)
2. notifications errors
3. separate components based approach
4. Architecture allows other features to be added in future
5. Responsive

### improvements/ TODO
1. Move template texts/error messages to use them as variables (i18n?) 
2. move test data to files
3. styling/Design , global scss
4. create and inject services for string manipulation functions

### issues faced

1. proxy / cors
2. cypress config might need to be excluded in tsconfig to avoid some test errors

"exclude": [
    "cypress.config.ts"
]
"files": [
    "cypress.config.ts"
],




