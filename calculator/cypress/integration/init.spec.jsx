import React from 'react'

const {
  StyledDisplay,
} = require('@/components/Display/components')

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // it('it check loader', () => {
  //   cy.get('svg').should('be.visible')
  // })

  it('it check calculator title', () => {
    cy.get('h1')
      .should('have.text', 'Calculator')
      .should('be.visible')
  })

  it('it check settings and home buttons', () => {
    cy.get('.settings')
      .should('have.text', 'Settings')
      .click()

    cy.visit('/settings')

    cy.get('.home')
      .should('have.text', 'Home')
      .click()

    cy.visit('/')
  })

  it('it check display', () => {
    cy.get(<StyledDisplay />).should('have.text', '0')
  })
})
