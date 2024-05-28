class Homepage

{

//Elements for Home Page 
url = "http://automationexercise.com";
carouselElement(){return cy.get('#slider-carousel')};
addInCart = '.add-to-cart';
loggedInUserName(){return cy.get('a').contains('Logged in as');}
cartLink(){return cy.get('li').contains('Cart')} 
continueShoppingButton(){return cy.contains("Continue Shopping")}

//Methods for Home Page
visitSite(){
    cy.visit(this.url)
}

verifyHomepage(){
    this.carouselElement().should('be.visible');
}

addToCart(cartItem){
    cy.contains(cartItem).siblings(this.addInCart).click();
    this.continueShoppingButton().click();    
}

verifyLoggedInUser(username){
    this.loggedInUserName().should('contain.text', username)
}

}

export default Homepage;