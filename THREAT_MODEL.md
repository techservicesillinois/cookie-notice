#  Campus Cookie Notice Threat Model

## About

This a threat analysis for the University of Illinois campus cookie
notice. It is client side code. It runs on potentially every site
on campus. The cookie notice by design interacts with analytic
solutions to allow them to run when permitted by the end user.

### Scope

This document does not cover specifics for each installation. This
document does not include detailed analysis of each analytic engine
that could possible be used in a specific installation.

## Risks & Mitigations

| Risk | Threat | Mitigations |
|------|--------|-------------|
| Analytics tracks user without consent | Misconfiguration | Documentation for site owners
| | | Configuration support by securitysupport@illinois.edu
| Malicious script injection | Dynamic Name (DNS) spoofing | Support script checksum validation |
| | | Support Cross Origin Resource Sharing (CORS) |
| | | Discourage use of dynamically loading from the CDN |

## Assessment

Our support for CORS headers could be stronger.
Developers applying CORS headers are encouraged to reach out to securitysupport@illinois.edu.

We should discourage
the use of dynamic loading. We hope most implementers will use the
campus toolkit, and benefit from good defaults.

We should provide convenient support to allow browsers to perform
checksum verification. See [Cookie Notice issue 64](https://github.com/techservicesillinois/cookie-notice/issues/64).

## Appendices

### Appendix A - Dependencies

#### Required Dependencies
* Illinois Web Toolkit slide-over component

#### Optional Dependencies
* Shared Content Delivery Network (CDN)
* Illinois Web Theme

### Appendix B - Trust Actors

| Name | Description |
|------|-------------|
| Analytics | Analytics Partner (Google, Meta, etc.) |
| User | Page Visitor |
| CDN Admin | Admin of the Shared Content Delivery Network |
| Site Admin | Admin of a website that uses the Cookie Notice banner |

### Appendix C - Entry Points

|Name|Description|Trust Level|
|----|-----------|-----------|
| Shared Content Delivery Network (CDN)| To simplify hosting on campus, components of this solution may be dynamically loaded from this shared endpoint. | CDN Admin |
| Analytics | Web Traffic Analytics scripts may share details of a visitor's' behavior to 3rd parties | Site Admin, User, Analytics |

### Data Sources and Endpoint Connections

See [README.md](https://github.com/techservicesillinois/cookie-notice/blob/main/README.md)
