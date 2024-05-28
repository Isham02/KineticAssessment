class Checkoutpage

{
//Elements needed for Checkout Page

cartItems(){return cy.get('.cart_description>h4')}
orderMessage(){return cy.get('#ordermsg')}
houseAddress(){return cy.get('#address_delivery').find('.address_address1.address_address2')}
placeOrderButton(){return cy.get('.check_out')}

//expectedProducts=["Stylish Dress","Blue Top"]
//expectedAddress=["Wundermanthompson","H-81","R-7"]


//Methods for Checkout Page

verifyCartItems(expectedProducts){
    this.cartItems().each((product, index) => {
        cy.wrap(product).should('have.text', expectedProducts[index]);
      });
}
verifyAddress(expectedAddress){
    this.houseAddress().each((address, index) => {
        cy.wrap(address).should('have.text', expectedAddress[index]);
      });
}
orderNote(orderMessage){
    this.orderMessage().type(orderMessage)
}
placeOrder(){
    this.placeOrderButton().click()
}

}

export default Checkoutpage;