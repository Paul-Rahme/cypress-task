import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor"
import { faker } from '@faker-js/faker';
import { stateStore } from '../helpers.js'
import flatpickr from "flatpickr"
import { data } from "jquery";



Given('I am on the login page', () => {
    cy.visit('/')
    cy.get('span').contains('My Bl1nk').click()

});

When('I am not logged in', () => {
    cy.url().should('include', Cypress.env('signinUrl'))
});

When('I enter valid creddiental and sign in', () => {
    cy.intercept({
        method: 'POST',
        url: '**/login',
    }).as('login')
    cy.get('input[type="email"]').type('paul.rah@hotmail.com')
    cy.get('input[type="password"]').type('@$P76824956r')
    cy.get('button').contains('SIGN IN').click()
    cy.wait('@login').then(response => {
       expect(response.response.statusCode).to.eq(200)
        //console.log(response.response.body.meta.access_token)
    });
    
});

Then('I visit the profile page', () => {
    cy.get('a[href="/profiles"]').click()
    cy.url().should('include', Cypress.env('profileUrl'))
    cy.get('button').contains('Create Profile').click()
})

When('I create a new profile and save it', () => {
    cy.get('input[placeholder="Name Your Layout (Ex: Work, Personal, etc.)"]').type('test')
    cy.get('button').contains('Next').click()
    cy.intercept({
        method: 'POST',
        url: '**/filepond/api/process',
    }).as('upload')
    cy.get('input.filepond--browser').eq(0).selectFile('cypress/downloads/test.jpg', { force: true });
    cy.wait('@upload').then(response => {
        expect(response.response.statusCode).to.eq(200)
       
     });
    cy.get('input.filepond--browser').eq(1).selectFile('cypress/downloads/test.jpg', { force: true });
    cy.wait('@upload').then(response => {
        expect(response.response.statusCode).to.eq(200)
       
     });
    cy.get('input.filepond--browser').eq(2).selectFile('cypress/downloads/test.jpg', { force: true });
    cy.wait('@upload').then(response => {
        expect(response.response.statusCode).to.eq(200)
       
     });
    cy.get('input[placeholder="Something Cool"]').eq(0).type('Paul')
    cy.get('input[placeholder="Something Cool"]').eq(1).type('Mazhar')
    cy.get('input[placeholder="Something Cool"]').eq(2).type('Rahme')
    cy.get('input[placeholder="Something Cool"]').eq(3).type('test')
    cy.get('input[placeholder="Something Cool"]').eq(4).type('test1')
    cy.get('input[placeholder="Something Cool"]').eq(5).type('Web developer')
    cy.get('input[placeholder="Something Cool"]').eq(6).type('Polo')
    cy.get('textarea').eq(0).type('bauchrieh')
    cy.get('input[icon-name="phone"]').type('76824956')
    cy.get('input[placeholder="Something Cool"]').eq(7).type('paul.rah@hotmail.com')
    cy.get('input[placeholder="Something Cool"]').eq(8).type('Test')
    cy.get('textarea').eq(1).type('Hello how are you tell me')
    cy.get('input[placeholder="URL"]').eq(0).type('https://www.instagram.com/paul_rahme/?hl=en')
    cy.get('input[placeholder="Display Text"]').eq(0).type('Insta')
    cy.get('input[placeholder="URL"]').eq(1).type('https://www.tiktok.com/@paul_rahme')
    cy.get('input[placeholder="Display Text"]').eq(1).type('TikTok')
    cy.get('button[data-v-34a0b5a8]').click()
    
})

  after(() => {
    cy.get('a[href="/SignOut"]').click()
    cy.get('button').contains('SignOut').click()
});