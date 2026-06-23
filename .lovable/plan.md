# Plan - Fix Netlify Deploy

We will update the Netlify configuration file (`netlify.toml`) to point to the correct publish directory (`dist/client` or `dist`), ensuring that Netlify can locate the built client assets after running the build command.

## Steps
1. **Update `netlify.toml`**:
   - Change the `publish` directory to `"dist/client"`.
   - Keep the build command as `npm run build`.
   - Maintain the `NITRO_PRESET = "netlify"` environment variable.
