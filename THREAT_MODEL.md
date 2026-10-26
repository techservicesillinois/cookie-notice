## External Dependencies

### Required Dependencies
* Illinois Web Toolkit slide-over component

### Optional Dependencies
* Shared Content Delivery Network (CDN)
* Illinois Web Theme

## Stride Threat List

| Risk | Threat | Mitigations |
|------|--------|-------------|
| Analytics tracks user without consent | Misconfiguration | Documentation for site owners
| | | Configuration support by securitysupport@illinois.edu
| Malicious script injection | Dynamic Name (DNS) spoofing | Support script checksum validation |
| | | Support Cross Origin Resource Sharing (CORS) |
| | | Discurage use of dynamically loading from the CDN |

## Trust Level

| Name | Description |
|------|-------------|
| Analytics | Analytics Partner (Google, Meta, etc.) |
| User | Page Visitor |
| CDN Admin | Admin of the Shared Content Delivery Network |
| Site Admin | Admin of a website that uses the cookie notice banner |

## Entry Points

|Name|Description|Trust Level|
|----|-----------|-----------|
| Shared Content Delivery Network (CDN)| To simplify hosting on campus, components of this solution may be dynamically loaded from this shared endpoint. | CDN Admin |
| Analytics | Web Traffic Analytics scripts may share details of vistors' behavior to 3rd parties | Site Admin, User, Analytics |

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
