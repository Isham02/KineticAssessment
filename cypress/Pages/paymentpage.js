class Paymentpage

{
//Elements needed for Payment Page
cartText = ".active";
cardName(){return cy.get('[data-qa="name-on-card"]')}
cardNumber(){return cy.get('[data-qa="card-number"]')}
cardCvc(){return cy.get('[data-qa="cvc"]')}
cardExpireMonth(){return cy.get('[data-qa="expiry-month"]')}
cardExpireYear(){return cy.get('[data-qa="expiry-year"]')}
payButton(){return cy.get('[data-qa="pay-button"]')}
paymentSuccessMessage(){return cy.get('#success_message > .alert-success',{ timeout: 10000 })}
//Methods for Payment Page
inputCardDetails(cardName,cardNum,cvc,month,year){

    this.cardName().type(cardName);
    this.cardNumber().type(cardNum);
    this.cardCvc().type(cvc);
    this.cardExpireMonth().type(month);
    this.cardExpireYear().type(year)

}

confirmPayment(){
    
    cy.get('#payment-form').then(form$ => {
        this.payButton().click();
        form$.on('submit', e => {
          e.preventDefault()
       })
      })
    
}

verifyPayment(){
    this.paymentSuccessMessage().should('be.visible').and('contain', 'Your order has been placed successfully!')
    this.payButton().click();
}

}

export default Paymentpage;