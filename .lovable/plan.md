## Problem

Clicking any "Start on WhatsApp" / "Get access" / "Claim this bundle" button in Firefox inside the Lovable preview shows:

> `NS_ERROR_DOM_COOP_FAILED` — security configuration doesn't match the previous page.

This happens because the preview iframe sends a `Cross-Origin-Opener-Policy` header, and Firefox blocks `target="_blank"` navigations from such a context to `wa.me`. The error is **preview-only** — the published site will work fine — but it's still confusing during testing.

## Fix

Update all WhatsApp `<a>` links in `src/routes/index.tsx` to use a shared click handler that:

1. Calls `e.preventDefault()`.
2. Tries `window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer")`.
3. If `window.open` returns `null` (blocked / COOP), falls back to `window.top.location.href = WHATSAPP_URL` so the link still works inside the preview iframe.

Keep the `href`, `target`, and `rel` attributes intact so right-click "Open in new tab", SEO crawlers, and the published site continue to behave normally.

## Scope

- One small helper added near the top of `src/routes/index.tsx`.
- Wire `onClick={openWhatsApp}` onto the 4 WhatsApp anchors: Nav "Get access", Hero "Start on WhatsApp", Pricing "Claim this bundle", ContactCTA "Start a chat".
- No other files change. No dependency, no config, no header changes.

## Verification

- Click each button in the Firefox preview → WhatsApp opens (new tab if allowed, otherwise top-level navigation).
- Right-click → "Open in new tab" still uses the real `href`.
