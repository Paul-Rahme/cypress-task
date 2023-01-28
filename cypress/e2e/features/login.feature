Feature: Creating Profile Feauture
    As a user
    I want to Log in
    So I can create a profile

Background:

Given I am on the login page
When I am not logged in

    Scenario: Sucessful Profile Creation
        Then I enter valid creddiental and sign in
        Then I visit the profile page
        And I create a new profile and save it
    
