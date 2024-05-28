import Cartpage from "../Pages/cartpage"
import Homepage from "../Pages/hompage"
import RegisterPage from "../Pages/registerpage"
import Checkoutpage from "../Pages/checkoutpage"
import Paymentpage  from "../Pages/paymentpage"
import 'cypress-mochawesome-reporter/register'
const homepage = new Homepage() 
const cartpage = new Cartpage()
const registerpage = new RegisterPage()
const checkoutpage = new Checkoutpage()
const paymentpage = new Paymentpage()

describe('Kinetic Assesment', () => {
   
    //Declaring variables to store Test Data
    let userData;
    let cardData;
    let productData;
    before(() => {
        // This Loads all the Data from fixtures folder
        cy.fixture('userdetails').then((data) => {
            userData = data;
          });
        cy.fixture('carddetails').then((data) => {
            cardData = data;
          }); 
        cy.fixture('Orderdetails').then((data) => {
            productData = data;
          });
      
      });


    it('Navigates to URL http://automationexercise.com ', () => {
        homepage.visitSite();
    })

    it('Verifies that the home page is visible successfully',()=>{
        homepage.verifyHomepage();
    })
    
    it('Adds Product to cart',()=>{
        homepage.addToCart(productData.products[0]); //Adding the first and second item from product test data
        homepage.addToCart(productData.products[1]);
      })
    it('Clicks the cart button',()=>{
        homepage.cartLink().click();
        
    })
    it('Verifies Cart page',()=>{
        cartpage.verifyPage();
    })

    it('Proceeds to checkout',()=>{
        cartpage.proceedToCheckout();
    })

    it('Clicks Register/Login',()=>{
        cartpage.registerLoginLink().click();
    })
    it('Fills all details in Sign up and creates an account',()=>{
        registerpage.createAccount(userData.name,userData.email,userData.Gender,userData.Password,userData.Birthday,userData.BirthMonth,userData.BirthYear,userData.FirstName,userData.LastName,userData.Company,userData.Address1,userData.Address2,userData.Country,userData.State,userData.City,userData.Postcode,userData.Mobile);
         //Pass in the user details to fill in the form
        
    })
    it('Verifies account creation and continues to homepage',()=>{
        registerpage.verifyAccountCreate();
        registerpage.continueToHomepageButton().click();
        
    })
    it('Verifies Logged in as username at top',()=>{
        homepage.verifyLoggedInUser(userData.name);        
        
    })
    it('Clicks the cart button',()=>{
        homepage.cartLink().click()
        
    })
    
    it('Proceeds to checkout',()=>{
        cartpage.proceedToCheckout();
        
    })

    it('Reviews Order and address',()=>{
        checkoutpage.verifyCartItems(productData.products);
        checkoutpage.verifyAddress([userData.Company,userData.Address1,userData.Address2]);
        
    })
    it('Writes order note',()=>{
        checkoutpage.orderNote(productData.orderNote);
      
    })
    it('Place Order',()=>{
        checkoutpage.placeOrder();
        
    })
    it('Enter Card Details',()=>{
        paymentpage.inputCardDetails(cardData.cardName,cardData.cardNum,cardData.cvc,cardData.month,cardData.year)
        
    })
    it('Pay for order',()=>{
        paymentpage.confirmPayment();
        
    })
    it('verfies payment confirmation',()=>{
        paymentpage.verifyPayment();
        cy.clearCookies()
        
    })


  })