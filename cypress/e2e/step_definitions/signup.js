import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor"
import { faker } from '@faker-js/faker';
import { stateStore } from '../helpers.js'
import flatpickr from "flatpickr"

Given('I visit the Bl1nk website', () => {
    cy.visit('/')
    
});

When('I click on My Bl1nk button', () => {
  cy.get('span').contains('My Bl1nk').click()
});

When('I click on my Sign Up button', () => {
    cy.get('span').contains('Sign Up').click()
  });

  When('I fill the Sign Up form', () => {
    cy.intercept({
        method: 'POST',
        url: 'https://api.bl1nk.co/api/v1/register'
    }).as('login')
    cy.get('input[placeholder="name@example.com"]').type(stateStore['email'])
    cy.get('input[placeholder="User Name"]').type(faker.internet.userName('Paul', 'Doe'))
    cy.get('input[placeholder="First Name"]').type('Jeanne')
    cy.get('input[placeholder="Last Name"]').type('Doe')
    cy.get('input[id="userPhoneNumber"]').type(faker.phone.number('76######'))
    cy.get('input[placeholder="Password"]').type(stateStore['password'])
    cy.get('input[placeholder="Confirm Password"]').type(stateStore['password'])
    cy.get('input[placeholder="Secret Code"]').type(Cypress.env('secretcode'))
    cy.get('button').contains('SIGN UP').click()
    
    cy.wait('@login')
    
  });

  Then('I m taken to the verification page', () => {
    cy.get('span').contains('Resend').should('exist')
  });




 