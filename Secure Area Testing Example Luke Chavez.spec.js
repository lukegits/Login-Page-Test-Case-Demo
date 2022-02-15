/// <reference types="cypress" />

context('Login', () => {

    it('SecureAreaLoginTestCase', () => {
        cy

          // Visit the appropriate route for login.

          .visit('http://the-internet.herokuapp.com/login')

          // Check that the DOM header and body strings are present and are not missing or broken.

          .get('div').contains('Login Page', { matchCase: true })
          
          .get('div').contains('This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.', { matchCase: true })

          .get('div').contains('Powered by Elemental Selenium', { matchCase: true })

          .get('div').contains('Username', { matchCase: true })

          .get('div').contains('Password', { matchCase: true })

          // Check inputs work in the login if the username and password fields are incorrect.

          .get("input[name=username]").type("tomsmithFAKE")
          
          .get("input[name=password]").type("SuperSecretPassword!FAKE").type("{enter}")

          // After the user hits enter check that login has not worked and the user is still on the main login page. They will recieve a toast message that the password/username combination is invalid.

          .get('div').contains('Your username is invalid!', { matchCase: true })

          // Check inputs work in the login username and password fields if the fields are correct.

          .get("input[name=username]").type("tomsmith")
          
          .get("input[name=password]").type("SuperSecretPassword!").type("{enter}")

          // After the user hits enter check that login has worked and the user is on the Secure Area webpage.

          // Check that the green toast message at the top is appearing properly and with the correct string.

          .get('div').contains('You logged into a secure area!', { matchCase: true })

          // Check that the DOM header and body strings are present and are not missing or broken.

          .get('div').contains('Secure Area', { matchCase: true })

          .get('div').contains('Welcome to the Secure Area. When you are done click logout below.', { matchCase: true })

          // If the user clicks the logout button they will be re-directed to the login webpage.

          .get('body > .row > #content > .example > .button').click()

          // Check that the green toast message at the top of the page is appearing properly and with the correct string.
          
          .get('div').contains('You logged out of the secure area!', { matchCase: true })

          // Console log if the test case has passed.
  
          .log('Secure login and logout is working! Test Case has Passed!')
    })
  })
  
