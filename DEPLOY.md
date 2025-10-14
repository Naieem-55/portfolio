# GitHub Pages Deployment Guide

Your portfolio code has been successfully pushed to GitHub!

**Repository**: https://github.com/Naieem-55/portfolio

## Enable GitHub Pages

Follow these steps to enable GitHub Pages and make your portfolio live:

### Step 1: Go to Repository Settings

1. Open your repository: https://github.com/Naieem-55/portfolio
2. Click on **Settings** (top menu)

### Step 2: Enable GitHub Pages

1. In the left sidebar, click on **Pages** (under "Code and automation")
2. Under **Source**, select **Deploy from a branch**
3. Under **Branch**:
   - Select **main** from the dropdown
   - Select **/ (root)** as the folder
   - Click **Save**

### Step 3: Wait for Deployment

1. GitHub will automatically build and deploy your site
2. It may take 1-2 minutes for the first deployment
3. Once complete, you'll see a message: "Your site is live at https://naieem-55.github.io/portfolio/"

### Step 4: Access Your Live Portfolio

Your portfolio will be available at:
**https://naieem-55.github.io/portfolio/**

## Alternative: Quick Setup

If you have GitHub CLI installed, you can enable Pages with one command:

```bash
gh repo edit Naieem-55/portfolio --enable-pages --pages-branch main --pages-path /
```

## Updating Your Portfolio

Whenever you make changes to your portfolio:

1. Make your changes to the files
2. Commit and push:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin main
   ```
3. GitHub Pages will automatically redeploy your site in 1-2 minutes

## Custom Domain (Optional)

If you want to use a custom domain (e.g., www.yourname.com):

1. Go to Settings > Pages
2. Under "Custom domain", enter your domain name
3. Follow the DNS configuration instructions provided by GitHub
4. Add a CNAME file to your repository with your domain name

## Troubleshooting

### Site not loading?
- Wait 2-3 minutes after enabling Pages
- Check that you selected the correct branch (main) and folder (root)
- Refresh your browser and clear cache

### Changes not showing?
- Wait 1-2 minutes for GitHub to rebuild
- Check your commit was pushed: `git log`
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### 404 Error?
- Make sure your main HTML file is named `index.html`
- Check that the file is in the root directory, not a subdirectory

## Repository Status

✅ Git repository initialized
✅ All files committed
✅ Pushed to GitHub main branch
⏳ GitHub Pages - **Needs to be enabled manually**

---

**Next Step**: Go to https://github.com/Naieem-55/portfolio/settings/pages and enable GitHub Pages!
