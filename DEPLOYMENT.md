# Publishing Cellosophy publicly

This archive contains the complete Cellosophy website source and assets.

## What you need

- A free GitHub account
- A Cloudflare account
- Node.js 22 or newer

## 1. Put the site on GitHub

1. Unzip this archive.
2. Create a new empty GitHub repository named `cellosophy`.
3. Upload the unzipped files to that repository, or push them with Git.

Do not upload `node_modules`, `.sites-runtime`, or `dist` directories if your computer creates them.

## 2. Deploy with Cloudflare Workers

1. In Cloudflare, open **Workers & Pages** and choose **Create**.
2. Choose **Import a repository** and select the `cellosophy` repository.
3. Set the build command to `npm run build`.
4. Set the deploy command to `npm run deploy`.
5. Save and deploy.

Cloudflare will provide a public `workers.dev` address. You can later attach a custom domain from the Worker's **Domains & Routes** settings.

## Test locally

From the unzipped project directory, run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. To check the production build, run:

```bash
npm run build
```

## Newsletter form

The subscription form points to `https://cellosophy.substack.com/embed`. It will work publicly once that Substack publication is launched.

## Updating the site

Edit the source, commit the changes to GitHub, and Cloudflare will rebuild and publish the new version automatically.
