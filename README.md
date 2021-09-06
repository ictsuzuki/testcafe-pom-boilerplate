# Testcafe boilerplate
Repository created to help to new testcafe users. 

# Goals

* Define Page Models
* Usage of the Page Object Pattern
* Define a class to manage the test data
* Use of .env files

# Tools

* Testcafe
* Dotenv 

# Getting Started

### Prerequisites

You need to have the following tools installed on your computer.

Node.js v10.12.0 or higher.
To install Node.js, download it from the Node.js webpage.
[DOWNLOAD NODE](https://nodejs.org/en/download/)

### Instructions.
Clone the repository in your local machine
```
git clone https://github.com/ictsuzuki/testcafe-pom-boilerplate.git
```

### Installation
Install package dependencies by running.

```npm install```

Create a .env file allocated in the project root containing next variables:

```
BASE_URL=https://www.saucedemo.com/
USERNAME=standard_user
PASSWORD=secret_sauce
```

### Project Structure
```
    ├── pom               # PageObject folder contain
        ├── data          # Contains all test data for the test scripts
        └── pages         # Contains all the actions to interact with the web app
        └── tests         # Contains all the test scripts
```


### Test Run

To see the execution results in the console run the next command:
```
npm run test
```
