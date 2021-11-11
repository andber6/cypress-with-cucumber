import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I submit login', () => {
    LoginPage.visit()
})

Then('I should see homepage', () => {
    // get some element after login
    cy.get('#account_summary_tab').should('be.visible')
})