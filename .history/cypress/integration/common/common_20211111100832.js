import { defineStep } from "cypress-cucumber-preprocessor/steps/index";

defineStep('I want to wait {int} milliseconds', time => {
    cy.wait(time)
})