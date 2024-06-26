# About

This is the repository for the Hololive Fan Booth project website, powered by SvelteKit.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

To fetch data from the CMS, create a `.env` file in the root of the project by copying `example.env` and set the API key.

## Building

To create a production version of your app:

```bash
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Gotchas

- If you're changing the host (ex. the domain), it's important to change the config file at `src/config.json` to ensure the Open Graph metatags are prerendered with the right source for the embed image.
  - (If your social media embeds have a blank image or no image at all, this is probably why!)
