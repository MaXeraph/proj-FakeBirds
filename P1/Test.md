# Test

## Unit Testing

For each feature, we will implement a test that tests for a specific feature set and functionality. For each test, there will be an equivalent issue/task. We plan to implement tests incrementally as new features are introduced. Issues and tasks will drive development. Unit tests will be ran through Travis CI on Github and when a pull request is created, all the unit tests will be automatically ran to ensure that new changes do not break old ones.

Unit tests will be implemented to test the behaviour of the functions. Testing every function brings security when reusing previous functions. Through unit testing, we have a likely guarantee that the helper functions we are using work correctly. Some unit tests will be made that test specific regular use case values. Additionally, some unit tests will use edge cases as parameters to check correctness.

## UI Testing

UI tests will be done with a combination of manually and automatic libraries such as with Selenium. While unit tests excel with testing data and predictable behaviour, UI is often better to test with using the application. During UI tests, functions are assumed to work correctly through unit testing. UI tests will be conducted to ensure that the application will work in a Chrome browser.
