///This repository is for the Kinetik Assesment given on 22/05/2024/ and due on 28/05/2024

Below is a step by step guide on how to Run the Automation cases

PREREQUISITES.
1. Ensure that you have the latest version of Node installed

   Although the following dependencies are already installed, however, if the script is not running,
3. Ensure Cypress is installed in the local directory where the repository will be pulled. (npm install cypress)
4. For reporting, install the mochawesome reporter  "npm i --save-dev cypress-mochawesome-reporter"

Running the tests
To Run the test, Open the terminal on the cypress folder and type the command "npx cypress run --headed --browser chrome". To run the test on Chrome browser.

You can access the Test data on the fixtures folder. 
There are 3 .json files which you can modify.

It is advised to change the email property of the userDetails.json file in Fixtures. As the test will require a unique email to complete after each run

About the Framework
The end to end automation test is covered using the Page object model where each individual page has its own element and method.
The elements and/or methods are used on the main specfile "kineticassesment.js".
There is only one spec file with Multiple IT blocks for each of the given cases assigned for the task.


HTML reports can be found on the reports folder. After the test is complete, you can find a video of the test on the Videos folder


   
