# Aymane Ezzourkani — Portfolio

A responsive portfolio built with React + Vite.

## Run locally

1. Install Node.js (LTS) if you do not already have it.
2. Extract this folder.
3. Open the folder in VS Code.
4. Open a terminal in the project folder and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal.

## Before publishing

- Verify the LinkedIn link in `src/main.jsx` and replace the generic link with your exact profile URL.
- Confirm all CV dates and project descriptions are accurate.
- Add a real project link only when it is available; no fake project links are included.
- The email and GitHub link are taken from the supplied CV.
- `public/portrait.png` contains the supplied profile photo.

## Free hosting with GitHub Pages

The simplest route is to publish this Vite site using GitHub Pages via GitHub Actions. Create a repository, upload the project files, then in GitHub open **Settings → Pages** and choose **GitHub Actions**. Use the official Vite guide for the current workflow and base-path settings:
https://vite.dev/guide/static-deploy.html#github-pages

You can also deploy the built `dist` folder to Cloudflare Pages. Run `npm run build`; the output folder is `dist`.

## Content note

Only EasyPark and DormSense are shown in the project section. DormSense is marked as in progress. No unverified project features are claimed.
