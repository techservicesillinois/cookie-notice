# Illinois Cookie Notice Test Plan

Project: Illinois Cookie Notice

Test Objectives: Verify core funtionality, accessibility, and branding

Test Schedule: Before each release

Test Strategy: Manual Tests

Resources:
- [Demo Site on GitHub Pages][1]

Risks: 
- The Illinois Cookie Notice runs on every campus web site.
- Accessibility errors may harm campus users on any affected sites.
- JavaScript errors may cause other scripts to fail.
- Color mistakes are unattractive, erode our shared campus brand, and may cause accessibility failures through insufficient color contrast.

Deliverables:
- Any issues found should be recorded in the [GitHub Issues][2]

[1]: https://app-illinois.github.io/Design-Resources/Cookie-Banner.html
[2]: https://github.com/techservicesillinois/cookie-notice/issues

## Shared Steps

Some testing steps are repeated often, and documented here for re-use.

> Shared steps were written with Firefox in mind.
> Steps may vary slightly in different browsers.

### Shared Step - Open the Cookie Notice

- Visit https://app-illinois.github.io/Design-Resources/Cookie-Banner.html
- If the Cookie Notice is not visible, click 'Re-Show Cookie Notice'

### Shared Step - Open the Browser Developer Tools

- Right-click anywhere and select 'Inspect Element'
- Or press 'F12' on the keyboard

### Shared Step - Enable or Disable sending a 'Do Not Track' signal

> Support and how to configure 'Do Not Track' varies by web browser.
> These steps work for Firefox.

- Open Firefox and navigate to 'about:settings#privacy'
- To send 'Do Not Track', *check* the box next to 'Tell websites not to sell or share my data'
- To stop sending 'Do Not Track', *uncheck* the box next to 'Tell websites not to sell or share my data'

> Tip: When testing for successful analytics, be sure to disable both 'Do Not Track' and any ad-blocking plugins (such as uBlock), or the analytics may not load.

### Shared Step - Clear Browser Cookies

- Open the Browser Developer Tools (see above)
- Open 'Storage/Cookies'
- Click trash can icon to delete all cookies

## Test the 'About Cookies' Slide-Out from the Cookie Notice

Objective: Verify that the 'About Cookies' slide-out appears and all content can be reached.
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

## Test the 'About Cookies' Slide-Out from the Page Footer

Objective: Verify that the 'About Cookies' slide-out appears and all content can be reached.
- Close the Cookie Notice (see above)
- Click on 'About Cookies' in the page footer
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
- Verify that the Cookie Notice disappears.
- In the developer tools, verify that a cookie has been added with name 'cookie_notice" and value "hide".

## Test Dismissing the Notice with 'X'

Objective: Verify ways that the notice can be dismissed.
- Open the Cookie Notice (see above)
- Click the 'X' in the upper right corner of the Cookie Notice.
- Verify that the Cookie Notice disappears.
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

## Test Keyboard Navigation in the Information Slide Out

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
- Verify that focus returned to the Cookie Notice.

## Test Keyboard Navigation Looping

Objective: Verify that Keyboard Navigation stays within the Cookie Notice
- Open the Cookie Notice (see above)
- Verify that keyboard navigation stays within the notice, until dismissed.
    - With 'Reject Non-Essential Cookies' selected, press 'Tab' to navigate back to the 'X' in the upper right corner of the notice.
    - With the 'X' selected, hit 'Shift+Tab' to navigate back to 'Reject Non-Essential Cookies'

## Test Keyboard Navigation after Closing the Notice

Objective: Verify that Keyboard Navigation continues to function after closing the Cookie Notice
- Open the Cookie Notice (see above)
- Close the Cookie Notice
- use the 'Tab' and 'Shift+Tab' keys to verify that the keyboard functions to navigate the page after dismissing the Cookie Notice.

## Run a local Accessibility Test

- Install the Firefox AInspector plugin from https://addons.mozilla.org/en-US/firefox/addon/ainspector-wcag/
- Open the Cookie Notice (see above)
- Press plugin toolbar button to launch AInspector 
- Press the 'i' to review the legend
    - V means 'Violation' these should be addressed
    - MC mean 'Manual Check' these should be reviewed

## Verify Accessible Landmarks

Objective: Verify that expected ARIA landmarks are present and correct

- Open the Cookie Notice (see above)
- Right click on each button and press 'Inspect'
- Verify that 'X' has aria-describedby that points to the hover description, which lets the user know that it will reject non-essential cookies and close the notice
- Verify that 'Accept All Cookies' has aria-label that lets the user know it will accept all cookies and close the notice
- Verify that 'Reject Non-Essential Cookies' has an aria-label that lets the user know it will reject non-essential cookies and close the notice
- Right-click and 'Inspect Accessibility Properties' to verify that each of 'X', 'About Cookies', 'Accept All Cookies' and 'Reject Non-Essential Cookies' has 'role: button'

## Verify Brand Colors for each Variation

Objective: Verify that the notice can be loaded with each set of expected brand compliant accessible colors - Illinois, UIC, and UIS
- Visit https://app-illinois.github.io/Design-Resources/Cookie-Banner.html
- In the `Example` Section of the page, choose the alternate variation to test
- If the Cookie Notice is not visible, click 'Re-Show Cookie Notice' to view the chosen alternate variation 
- Expected colors are defined in files in `src/web/css`

## Verify Analytics on First Visit

Objective: Verify that analytics are allowed to load if the user selects 'Accept All Cookies'

> Tip: Only /gtag has example analytics. This test will fail on any other page.

- *Important* Visit '/gtag' on the test site.
- Configure the Browser to *not* send 'Do Not Track' (see above)
- Open the Browser Developer Tools (see above)
- Open the Cookie Notice (see above)
- Press 'Accept All Cookies'
- Verify analytics using Developer Tools
  - Under 'Network', if traffic is recorded, there should be requests to `www.googletagmanager.com`
  - Under 'Storage/Cookies', there should be one or more cookies named starting with `_ga`
- Reset for future tests by clearing all cookies (see above)

## Verify Analytics on Later Visits

Objective: Verify that analytics are allowed to load if the user selects 'Accept All Cookies'

> Tip: Only /gtag has example analytics. This test will fail on any other page.

- *Important* Visit '/gtag' on the test site.
- Configure the Browser to *not* send 'Do Not Track' (see above)
- Open the Browser Developer Tools (see above)
- Open the Cookie Notice (see above)
- Press 'Accept All Cookies'
- *Reload the page*
- Verify analytics using Developer Tools
  - Under 'Network', if traffic is recorded, there should be requests to `www.googletagmanager.com`
  - Under 'Storage/Cookies', there should be one or more cookies named starting with `_ga`
- Reset for future tests by clearing all cookies (see above)

## Check for JavaScript Errors

Objective: Verify that JavaScript included in the notice does not cause scripts to stop loading.

- Open the Cookie Notice (see above)
- Close the Cookie Notice
- Open the Browser Developer Tools (see above)
- Under 'Console' check for red Error messages

> Tip: Some yellow Warning messages are expected.

