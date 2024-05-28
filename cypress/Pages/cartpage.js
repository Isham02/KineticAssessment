class Cartpage

{
//Elements needed for Cart Page
cartText = ".active";
checkoutButton(){return cy.get(".check_out")};
registerLoginLink(){return cy.get('a').contains("Register / Login")};

//Methods for Cart Page
verifyPage(){
    cy.get(this.cartText).invoke('text').then((text) => {
        expect(text).equal('Shopping Cart')
    });
}

proceedToCheckout(){
    this.checkoutButton().click()
}

}

export default Cartpage;