# Deployment Guide: GitHub → Vercel

This guide ensures your app deploys seamlessly without build errors.

## Initial Setup (One-time)

### 1. GitHub Repository Setup

```bash
# If you haven't already, initialize git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/DevanshRajani25/v0-homeo-reaches-case-14.git
git push -u origin main
```

### 2. Vercel Configuration

#### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy and link to GitHub
vercel --prod

# This will:
# - Create/link your Vercel project
# - Generate environment variables
# - Set up automatic deployments
```

#### Option B: Manual Vercel Setup

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select "Next.js" framework
5. Leave build settings as default (Vercel auto-detects)
6. Click "Deploy"

### 3. GitHub Secrets for Automatic Deployments

Add these secrets to your GitHub repository for automated CI/CD:

1. Go to GitHub Repo → Settings → Secrets and variables → Actions
2. Create new secrets:

```
VERCEL_TOKEN = [Your Vercel token]
VERCEL_ORG_ID = [Your Vercel org/team ID]
VERCEL_PROJECT_ID = [Your Vercel project ID]
```

**How to get these:**

- **VERCEL_TOKEN**: Visit https://vercel.com/account/tokens
- **VERCEL_ORG_ID**: Visit https://vercel.com/account/settings, it's shown as "Team ID"
- **VERCEL_PROJECT_ID**: Run `vercel projects list` or check Vercel dashboard

### 4. Verify GitHub Actions

Check `.github/workflows/deploy.yml` is present (it's already created for you).

## Daily Workflow

### To Deploy Updates:

```bash
# Make changes to your files
git add .
git commit -m "Your descriptive commit message"
git push origin main
```

That's it! GitHub Actions will automatically:
1. Run tests/lint
2. Build your Next.js app
3. Deploy to Vercel if build succeeds

### To Deploy Preview URLs:

Create a pull request → Vercel automatically creates a preview deployment → Review → Merge to main for production

## Troubleshooting

### Build Fails on Vercel but Works Locally?

1. Check Node version matches: `node --version`
2. Verify all dependencies are in package.json
3. Clear Vercel cache: Dashboard → Settings → Git → Clear Cache
4. Redeploy

### Slow Deployments?

- Check if `pnpm-lock.yaml` is committed
- Verify `.gitignore` is not excluding necessary files
- Ensure no large files are in `.next` or `node_modules`

### Environment Variables Not Working?

Add them in Vercel dashboard:
- Settings → Environment Variables
- Add each variable for Production/Preview/Development

## Build Configuration Files

These files prevent future production errors:

- **vercel.json** - Vercel-specific build config
- **.npmrc / .pnpmrc** - Package manager settings
- **.gitignore** - Prevents unnecessary files from slowing builds
- **package.json** - Only essential dependencies listed

## Important Notes

- Never commit `pnpm-lock.yaml` changes manually; let pnpm manage it
- Always push to main for production deployment
- Use branches for feature development, merge via PR
- Check build logs at https://vercel.com/dashboard/projects for any issues

## Quick Commands

```bash
# View Vercel deployment logs
vercel logs

# Check build status
vercel status

# Deploy directly without GitHub
vercel --prod

# Clear cache and redeploy
vercel --prod --force
```

## Still Getting Issues?

1. Check GitHub Actions logs: Repo → Actions → Latest workflow
2. Check Vercel logs: Vercel Dashboard → Project → Deployments
3. Verify package.json has no unused dependencies
4. Ensure all TypeScript imports are correct
