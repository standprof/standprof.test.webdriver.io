Feature: Sending emails

Scenario Outline: Client sends email
	Given I open the Home page
	When I send the email with the name 'John Smith', emailAddress 'tester1@standprof.co.uk' and details 'Hello, how are you?'
    Then I should see the '<ThankYouMessage>'
	Examples: 
	| Test            | ThankYouMessage             |
	| Correct Message | Thank you for your message. |
