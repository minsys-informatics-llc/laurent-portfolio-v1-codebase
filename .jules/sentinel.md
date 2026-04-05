# Sentinel's Journal 🛡️

Your journal is NOT a log - only add entries for CRITICAL security learnings.

## 2025-05-15 - Infrastructure-Level Security Headers via Vercel
**Vulnerability:** While standard meta tags in HTML can provide some protection (like CSP), they are not as comprehensive as infrastructure-level HTTP headers. Some security headers (like HSTS and X-Frame-Options) *cannot* be set via meta tags.
**Learning:** For a portfolio site deployed on a modern platform like Vercel, it is far more effective and secure to define headers in `vercel.json`. This ensures that every request is protected from the start, and it allows for a "fail-secure" configuration that is harder for attackers to bypass.
**Prevention:** Always check the deployment platform's documentation (like Vercel, Netlify, or Cloudflare) for native ways to set security headers. Prefer infrastructure-level configuration over application-level (HTML/Meta) tags when possible.
