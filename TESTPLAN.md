Project: Illinois Cookie Notice
Test Objectives: Verify core funtionality, accessibility, and branding.
Test Schedule: Before each release.
Test Strategy: Manual Tests
Resources:
    - [Demo Site on GitHub Pages][1]
Risks: The Illinois Cookie Notice runs on every sites across the University of Illinois system, including Illinois, University of Illinois at Chicago, and University of Illinois at Springfield.
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

## Test Keyboard Navigation in the Cookie Notice
Objective: Verify that all notice functions are keyboard accessible
- Open the Cookie Notice (see above)
- Press 'Tab' to navigate. The expected order of items is:
    - The 'X' in the upper-right corner.
    - The 'University of Illinois System Cookie Policy' link
    - The 'About Cookies' button
    - The 'Accept All Cookies' button
    - The 'Reject Non-Essential Cookies' button
- Press 'Shift+Tab' to navigate the list above in reverse order.

> If the browser sent a 'Do Not Track' signal, navigation should skip the disabled 'Accept All Cookies' button

## Test Keyboard Navigation in the Information Slide out
Objective: Verify that all additional information is keyboard accessible
- Open the Cookie Notice (see above)
- Navigate to 'About Cookies' and press 'Enter' to show the cookie information slide-out.
- Navigate with the keyboard to each element:
    - The 'University of Illinois System Cookie Policy' link
    - Verify that each category of cookie can be selected by keyboard, and the information can be toggled by pressing 'Enter'
        - Strictly Necessary Cookies
        - Performance Cookies
        - Functional Cookies
        - Targeting Cookies
    - The 'Close' button
- Verify that pressing 'Enter' on the 'Close' button closes the cookie information slide-out.
- Verify that focus returned to the cookie notice.

## Test Keyboard Navigation Looping

Objective: Verify that Keyboard Navigation stays within the Cookie Notice
- Open the Cookie Notice (see above)
- Verify that keyboard navigation stays within the notice, until dismissed.
    - With 'Reject Non-Essential Cookies' selected, press 'Tab' to navigate back to the 'X' in the upper right corner of the notice.
    - With the 'X' selected, hit 'Shift+Tab' to navigate back to 'Reject Non-Essential Cookies'


## Test Keyboard Navigation after Closing the Notice

Objective: Verify that Keyboard Navigation continues to function after closing the cookie notice
- Open the Cookie Notice (see above)
- Close the Cookie Notice
- use the 'Tab' and 'Shift+Tab' keys to verify that the keyboard functions to navigate the page after dismissing the Cookie notice.

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

