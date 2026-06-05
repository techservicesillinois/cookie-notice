Project: Illinois Cookie Notice
Test Objectives: Verify core funtionality, accessibility, and branding.
Test Schedule: Before each release.
Test Strategy: Manual Tests
Resources:
    - [Demo Site on GitHub Pages][1]
Risks: The Illinois Cookie Notice runs on every campus web site.
    - Accessibility errors may harm campus users on any affected sites.
    - JavaScript errors may cause other scripts to fail.
    - Color mistakes are unattractive, erode our shared campus brand, and may cause accessibility failures through insufficient color contrast.
Deliverables:
    - Any issues found should be recorded in the [GitHub Issues][2]

[1]: https://app-illinois.github.io/Design-Resources/Cookie-Banner.html
[2]: https://github.com/techservicesillinois/cookie-notice/issues

## Shared Steps
Some steps are repeated often, and documented here for re-use.

### Shared Step - Open the Cookie Notice

- Visit https://app-illinois.github.io/Design-Resources/Cookie-Banner.html
- If the cookie notice is not visible, click 'Re-Show Cookie Notice'

## Test Information Slide-out
Objective: Verify that the information slide-out appears and all content can be reached.
- Open the Cookie Notice (see above)
- Click on 'About Cookies'
- Verify that 'University of Illinois - Cookie Information' appears.
- Verify that a hover element on 'University of Illinois System Cookie Policy' indicates that the link opens in a new window 
- Click on each category of cookies, to verify that additional text is displayed.
    - Strictly Necessary Cookies
    - Performance Cookies
    - Functional Cookies
    - Targeting Cookies
- Click each category to collapse the additional information.
- Close the information slide-out by pressing the 'Close' button.

## Test Dismissing the Notice with 'Close Cookie Notice'
Objective: Verify ways that the notice can be dismissed.
- Open the Cookie Notice (see above)
- Click 'Close Cookie Notice'
- Verify that the cookie notice disappears.
- In the developer tools, verify that a cookie has been added with name 'cookie_notice" and value "hide".

## Test Dismissing the Notice with 'X'
Objective: Verify ways that the notice can be dismissed.
- Open the Cookie Notice (see above)
- Click the 'X' in the upper right corner of the Cookie Notice.
- Verify that the cookie notice disappears.
- In the developer tools, verify that a cookie has been added with name 'cookie_notice" and value "hide".

## Test Keyboard Navigation
Objective: Verify that all notice functions are keyboard accessible
TODO

## Verify Accessible Landmarks
Objective: Verify that expected ARIA landmarks are present and correct
TODO

## Verify Brand Colors for each Campus
Objective: Verify that the notice can be loaded with each set of expected brand compliant accessible colors - Illinois, UIC, and UIS
TODO

## Verify Analytics
Objective: Verify that analytics are allowed to load if the user selects 'Accept All Cookies'
TODO

## Check for JavaScript Errors
Objective: Verify that JavaScript included in the notice does not cause scripts to stop loading.
TODO

