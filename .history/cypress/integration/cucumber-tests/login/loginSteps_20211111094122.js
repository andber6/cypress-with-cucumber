import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
    // cy.visit('http://zero.webappsecurity.com/login.html')
    LoginPage.visit()
})

When('I submit login', () => {
    // cy.get('#user_login').type('username')
    // cy.get('#user_password').type('password')
    // cy.get('input[name="submit"]').click()
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.submit()
})

Then('I should see homepage', () => {
    // get some element after login
    cy.get('#account_summary_tab').should('be.visible')
})