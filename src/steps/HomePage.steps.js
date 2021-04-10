import { Given, When, Then } from 'cucumber';
import {expect} from 'chai';
import HomePage from '../pages/HomePage';
import OurServicesPage from '../pages/OurServicesPage';


const homePage = new HomePage();
const ourServicesPage = new OurServicesPage();

Given(/^I open the Home page$/, () => {
  homePage.visit();
});

Then(/^the Home page should show the '(.+)' section$/, (text) => {
  expect(homePage.getSectionTitle()).contains(text);
})

Then(/^I should be able to open the Our Services page$/, () => {
  homePage.clickOurServices();
  expect(ourServicesPage.getPageTitle()).contains('OUR SERVICES');
})

When(/^I send the email with the name '(.+)', emailAddress '(.+)' and details '(.+)'$/, (name, emailAddress, details) => {
  homePage.sendEmail(name, emailAddress, details)
})

Then(/^I should see the '(.+)'$/, (text) => {
  homePage.getThankYouMessage()
  expect(homePage.getThankYouMessage()).contains(text);
})
