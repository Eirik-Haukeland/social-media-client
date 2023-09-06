describe('end to end tesing', () => {
    const username = 'ReservedUserName5'
    const email = `${username}@stud.noroff.no`;
    const password =  'testpassword';
    const testUrl = 'https://norofffeu.github.io/social-media-client/';
    const timeout = 10000
    // const expectedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

    beforeEach(() => cy.visit(testUrl))

    it('The user can log in and access their profile', () => {
        cy.wait(timeout)
        cy.get('form#registerForm').within(() => {
            cy.get('button[data-bs-target="#loginModal"]').click()
        })
        cy.wait(timeout)
        cy.get('form#loginForm').within(() => {
            cy.get('input#loginEmail').type(email)
            cy.get('input#loginPassword').type(password)
            cy.get("button[type='submit']").click()
        })
        cy.wait(timeout)
        cy.get('h4').should('contain.text', username)
    })

    it('The user can log out with the logout button', () => {
        cy.wait(timeout)
        cy.get('form#registerForm').within(() => {
            cy.get('button[data-bs-target="#loginModal"]').click()
        })
        cy.wait(timeout)
        cy.get('form#loginForm').within(() => {
            cy.get('input#loginEmail').type(email)
            cy.get('input#loginPassword').type(password)
            cy.get("button[type='submit']").click()
        })
        cy.wait(timeout)

        cy.get('button[data-auth="logout"]').click()

        cy.wait(timeout)

        cy.get('main').find('div.alert.alert-warning').should('contain.text', 'Please register or login to view this page.')
    })

    it('The user cannot submit the login form with invalid credentials and is shown a message', () => {
        cy.wait(timeout)
        cy.get('form#registerForm').within(() => {
            cy.get('button[data-bs-target="#loginModal"]').click()
        })
        cy.wait(timeout)
        cy.get('form#loginForm').within(() => {
            cy.get('input#loginEmail').type(email)
            cy.get('input#loginPassword').type(`not the right ${password}`)
            cy.get("button[type='submit']").click()

            cy.wait(timeout)
            cy.get('div.alert.alert-error').should('contain.text', 'Either your username was not found or your password is incorrect')
        })
    })
  }
)