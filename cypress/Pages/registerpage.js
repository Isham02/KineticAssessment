class RegisterPage

{
//Elements for Register Page

nameField(){return cy.get('[data-qa="signup-name"]')}
emailField(){return cy.get('[data-qa="signup-email"]')}
signupButton(){return cy.get('[data-qa="signup-button"]')}
genderField(gender){return cy.get('#uniform-id_gender'+[gender]+'')}
passwordField(){return cy.get('[data-qa="password"]')}
birthDateField(){return cy.get('#days')}
birthMonth(){return cy.get('#months')}
birthYear(){return cy.get('#years')}
firstName(){return cy.get('[data-qa="first_name"]')}
lastName(){return cy.get('[data-qa="last_name"]')}
company(){return cy.get('[data-qa="company"]')}
address1(){return cy.get('[data-qa="address"]')}
address2(){return cy.get('[data-qa="address2"]')}
country(){return cy.get('#country')}
state(){return cy.get('#state')}
city(){return cy.get('#city')}
zipcode(){return cy.get('#zipcode')}
mobile(){return cy.get('#mobile_number')}
createAccountButton(){return cy.get('[data-qa="create-account"]')}
accountSuccessMessage(){return cy.get('[data-qa="account-created"]')}
continueToHomepageButton(){return cy.get('[data-qa="continue-button"]')}

// Actions for Register Page

      createAccount(name,email,gender,password,birthDay,birthMonth,birthYear,fname,lname,company,add1,add2,country,state,city,zip,mobile){ //Fills out all the data in signup page.
        //Filling up all the fields
        this.nameField().type(name);
        this.emailField().type(email);
        this.signupButton().click();
        this.genderField(gender).click()
        this.passwordField().type(password);
        this.birthDateField().select(birthDay);
        this.birthMonth().select(birthMonth);
        this.birthYear().select(birthYear);
        this.firstName().type(fname);
        this.lastName().type(lname);
        this.company().type(company);
        this.address1().type(add1);
        this.address2().type(add2);
        this.country().select(country);
        this.state().type(state);
        this.city().type(city);
        this.zipcode().type(zip);
        this.mobile().type(mobile);
        //Clicking the create account button
        this.createAccountButton().click()
}

      verifyAccountCreate(){
        cy.url().should('eq', "https://automationexercise.com/account_created"); //verifying the URL
        this.accountSuccessMessage().should('have.text', 'Account Created!') //Verifying the account create text
      }


}

export default RegisterPage;