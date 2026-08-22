# CELLosophy content vault

This folder is the editorial source for the CELLosophy website. Open `content/` as an Obsidian vault.

The site build reads published Markdown notes from this vault. Site layout, styling, and interaction remain in the application code outside this folder.

## Publishing

Notes are private by default. A note is published only when its frontmatter explicitly contains `publish: true`.

```yaml
---
publish: true
---
```

Leaving out `publish` has the same effect as `publish: false`.

Edit the notes, commit the changes to GitHub, and the Cloudflare build will regenerate the site content.
