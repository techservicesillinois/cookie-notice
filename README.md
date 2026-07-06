## About

This repository provides the Cookie Notice banner used by the University of Illinois.

This notice solution complies with University of Illinois expectations for
accessibility, branding, and security.

This resource can help web hosting teams on campus comply with
University of Illinois Cybersecurity standards
- including [IT-07][it07], [IT08][it08], and [IT13][it13].

[it07]: https://go.illinois.edu/secstd-IT07
[it08]: https://go.illinois.edu/secstd-IT08
[it13]: https://go.illinois.edu/secstd-IT13

See [Cybersecurity Development on the Illinois Knowledge Base][kbsearch]
for information about our development standards.

[kbsearch]: https://answers.uillinois.edu/illinois/search.php?q=cybersecurity+developer&cat=0

## Expected Use by Users

- See `TESTPLAN.md` for details of expected use cases.

## Setup

Recommendations follow for using the Cookie Notice in a web site.

### Provide a Separate 'About Cookies' Button

The Illinois Cookie Notice will look for any button with `id="ila-about-cookies-btn"`,
and will bind it to the function that displays the `About Cookies` slide-out.

Most Illinois web pages should include an `About Cookies` button in the website footer.
Most Illinois web templates already include an `About Cookies` button in the website footer.

```html
<button type="button" id="ila-about-cookies-btn" class="il-button">
    About Cookies
</button>
```

Older templates may include an `About Cookies` button with `id="ot-sdk-btn"`.
Cookie Notice version 2.0.0 will also bind the slide-out function to these buttons,
for backwards compatibility.

## Usage with Analytics Platforms

Do not Load Third Party Analytics until a user presses 'Accept All'.

If your site provides a function called `enable_tracking`, the Cookie Notice will call it after the user presses `Accept All`, and on each future visit by such users to your site.

If your site uses version 2.0.0 or later of the cookie notice; loading analytics outside of the `enable_tracking` function is dishonest, and is a violation of University policies.

Example code:

```html
<script>
async function enable_tracking() {
    // This site uses the University of Illinois Cookie Notice.
    // The Cookie Notice will call `enable_tracking` on each visit
    // where appropriate

    // Loading tracking or analytics code outside of this function
    // is dishonest and violates University policies.

    console.warn('Loading Google analytics...');
    var gtagId = "G-<your google tag>";

    // Define queue + shim before loading GA
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { dataLayer.push(arguments); };

    // Wait for external script to finish loading
    await new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = "https://www.googletagmanager.com/gtag/js?id=" + gtagId;
        s.async = true;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });

    gtag("js", new Date());
    gtag("config", gtagId);
}
</script>
```

## Using Color Themes

The Illinois Cookie Notice ships with three sets of accessible brand-compliant colors. See `ila-cookie-banner.css`, `ila-cookie-uic-colors.css`, `ila-cookie-uis-colors.css`, and `ila-cookie-uiuc-colors.css` for specifics.

## Dyanamically Loading a Color Theme (Deprecated)

When the notice is being dynamically loaded, the `data-domain-script` attribute determines which color theme to load.

Dynamic loading is not recommended for version 2.0.0 and later of the Cookie Notice. Rather than dynamic loading, consider re-hosting the relevant files, or (coming soon) using the Cookie Notice through the Illinois Web Toolkit.

For example:

```
<script data-domain-script="uis" src="js/ila-cookie-banner.js"></script>
```

or

```
<script data-domain-script="uic" src="js/ila-cookie-banner.js"></script>
```

## Data Sources

|Data Store|Data Type|Sensitivity|Notes|
|----------|---------|-----------|-----|
| Local Browser Storage | Cookie | Internal | When the notice is dismissed, a cookie is set to cause the notice to no longer appear in the current browser for six months. |
| Local Browser Storage | Cookie | Internal | When a user clicks "Accept All", a cookie is set to remember their decision for six months and allow analytics to run. |
| Third-Party Analytics | Tracking | Internal | When a user clicks "Accept All", websites may track user behavior through third-party providers. |

## Endpoint Connections

|Endpoint|Purpose|Stage|Access|
|--------|-------|-----|------|
| https://onetrust.techservices.illinois.edu | To simplify hosting on campus, components of this solution may be dynamically loaded from this shared endpoint. | Production | Public Read-Only |
| Varies - Websites may invoke third-party analytics when a user clicks "Accept All" | To understand how users use campus websites. | Production | Varies With Third-Party Terms of Service |


## Product Lifecycle

This product is supported by the Office of the CIO teams at the
University of Illinois Urbana-Champaign on a best-effort basis.

As of the last update to this README, End-of-Life and End-of-Support dates of this product are June 2030.
This date may roll forward as future browser releases become available and the code is verified on them.

Web browsers provide very short official support windows (if any), but history of the shared EMCA Script Standard (for JavaScript) reveals minor breaking changes roughly every five years, during annual June updates.

The strongest factor for our End-of-Life date is the lifecycle of ECMAScript, the shared cross-browser JavaScript implementation standard. The ECMAScript standard is updated annually in June. [The ISO ECMA Script Specification has a 5 year lifecycle](https://www.iso.org/standard/73002.html).

End-of-Life was decided based on these dependencies:

- ECMAScript 2025 -  A conservative estimate of earliest likely breaking changes for this effort, due to changes in the ECMAScript Standard, is June 2030.
- Firefox ESR 140 (Support Ends June 2026)
- Firefox 151 (Support Ends June 2026)
- Google Chrome (Support Ends 8 weeks after release - https://chromium.googlesource.com/chromium/src/+/master/docs/process/release_cycle.md)
- Microsoft Edge (Support Ends 16 weeks after release- https://learn.microsoft.com/en-us/deployedge/microsoft-edge-support-lifecycle)

