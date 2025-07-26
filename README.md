# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/14995eb6-d8b2-45b5-8beb-f35ca9eddcd2

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/14995eb6-d8b2-45b5-8beb-f35ca9eddcd2) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages Deployment (Recommended)

This project is configured with GitHub Actions for automatic deployment to GitHub Pages. The deployment pipeline will automatically build and deploy your application on every push to the main branch.

#### Setup Instructions:

1. **Enable GitHub Pages**:

   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy to GitHub Pages

2. **Push to Deploy**:

   - Simply push your changes to the `main` or `master` branch
   - The GitHub Actions workflow will automatically:
     - Install dependencies
     - Build the project
     - Deploy to GitHub Pages

3. **Access Your Site**:
   - Your site will be available at: `https://<your-username>.github.io/mindbrains-gateway-path/`
   - The first deployment may take a few minutes to complete

#### Manual Deployment:

If you prefer to deploy manually:

```sh
# Build the project
npm run build

# The built files will be in the `dist` directory
# You can then deploy these files to any static hosting service
```

### Lovable Deployment

You can also deploy using Lovable by opening [Lovable](https://lovable.dev/projects/14995eb6-d8b2-45b5-8beb-f35ca9eddcd2) and clicking on Share → Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
