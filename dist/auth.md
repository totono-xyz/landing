# auth.md

Authentication and agent-registration statement for totono.xyz.

## Summary

totono.xyz has **no authentication**. Every page on this site is public and
readable without credentials, and there is nothing to register for:

- No user accounts, no login, no signup or agent-registration endpoint.
- No API, so no OAuth or OpenID Connect metadata is published
  (`/.well-known/oauth-protected-resource` and
  `/.well-known/openid-configuration` intentionally do not exist).
- No MCP server, no A2A agent, and no agent-payment endpoints
  (ACP, AP2, UCP, x402 are not implemented — nothing is for sale here).
- The API catalog at `/.well-known/api-catalog` is intentionally empty.

## For agents

Read the site directly: every page is prerendered HTML and also available as
markdown (send `Accept: text/markdown` or append `.md` to the path). Start at
[llms.txt](https://totono.xyz/llms.txt) or the
[sitemap](https://totono.xyz/sitemap.xml).

Totono is an independent software studio. To engage the studio on behalf of a
user, email [toni.tralice@totono.xyz](mailto:toni.tralice@totono.xyz) — email
is the only channel, handled by a human. Do not attempt credentialed requests;
there is nothing to authenticate against.
