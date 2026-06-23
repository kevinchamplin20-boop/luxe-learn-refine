To deploy your TanStack Start application on Netlify, we need to configure Nitro (the underlying server engine for TanStack Start) to build with the `netlify` preset.

We will:
1. Create a `netlify.toml` file at the root of the project to pre-configure the build commands, publish directories, and redirection rules for Netlify.
2. Ensure Netlify knows to use the `netlify` preset by defining it in the build settings.

### Manual Steps for Netlify Dashboard:
- **Build command:** `bun run build` (or `npm run build`)
- **Publish directory:** `.netlify/dist`
- **Environment variables:** Add `NITRO_PRESET=netlify` to your Netlify site settings.