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

## Data Sources

|Data Store|Data Type|Sensitivity|Notes|
|----------|---------|-----------|-----|
| Local Browser Storage | Cookie | Internal | When the notice is dismissed, a cookie is set to cause the notice to no longer appear in the current browser for six months. | 

## Endpoint Connections

|Endpoint|Purpose|Stage|Access|
|--------|-------|-----|------|
| https://onetrust.techservices.illinois.edu | To simplify hosting on campus, components of this solution may be dynamically loaded from this shared endpoint. | Production | Publc Read-Only |


## Product Lifecycle

This product is supported by the Office of the CIO teams at the
University of Illinois Urbana-Champaign on a best-effort basis.

As of the last update to this README, End-of-Life and End-of-Support dates of this product are June 2030.
This date may roll forward as future browser releases become available and the code is verified on them.

Web browsers provide very short official support windows (if any), but history of the shared EMCA Script Standard (for JavaScript) reveals minor breaking changes roughly every five years, during annual June updates.

The strongest factor for our End-of-Life date is the lifecycle of ECMAScript, the shared cross-browser JavaScript implementation standard. The ECMAScript standard is updated annually in June. [The ISO ECMA Script Specification has a 5 year lifecycle](https://www.iso.org/standard/73002.html).

End-of-Life was decided based on these dependencies:

- ECMAScript 2025 -  A conservative esimtate of earliest likely breaking changes for this effort, due to changes in the ECMAScript Standard, is June 2030.
- Firefox ESR 140 (Support Ends June 2026)
- Firefox 151 (Support Ends June 2026)
- Google Chrome (Support Ends 8 weeks after release - https://chromium.googlesource.com/chromium/src/+/master/docs/process/release_cycle.md)
- Microsoft Edge (Support Ends 16 weeks after release- https://learn.microsoft.com/en-us/deployedge/microsoft-edge-support-lifecycle)

