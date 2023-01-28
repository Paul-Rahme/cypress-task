# Heron e2e testing
This is the `Heron` e2e testing repository. This project utilises `cypress v10` and [Gherkin syntax](https://cucumber.io/docs/gherkin/).

## Setup Local Environment
### Initial Checks
Make sure that you have appropriate access to [heron development server](https://heron-dev.mdgroup.com/login)

### Step 1: Prerequisites
- Install [node.js](https://nodejs.org/en/download/)
- Install [npm](https://www.npmjs.com/) 
- Install the [git tool](https://www.atlassian.com/git/tutorials/install-git) on your machine, if you don't have it already.
- Clone this repository.

:rocket: Great, we're almost there!

### Step 2: Installation and Configuration:
- Run `npm install` in the root of this repository
- Copy `cypress.config.js.example` to create `cypress.config.js` in the root of this repo
    - Change `baseUrl` and `mailHogUrl` to point to a different server
    - Update `superAdminPassword`
    - Update `prepaidCards` with a GBP card [Prepaid Cards](https://mdgroup.atlassian.net/wiki/spaces/HRN/pages/3064430593/Prepaid+Cards)


### Step 3: Run Cypress:
- If running tests against localhost, make sure your instance is up and running
- Type `npm run cypress:runner` and it will start the testing environment
