This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Configure the application as below

## Create .env file and confiure as below
GOOGLE_ID=//goto https://console.cloud.google.com/apis/ and create OAuth 2.0 Client IDs and configure the below
1->  inside Authorised JavaScript originsconfigure
  a-> http://localhost:3000 (your local host url)
  b-> https://ai-prompt-steel.vercel.app (Live URL) 
2-> inside  Authorised redirect URIs configure
  a-> http://localhost:3000
  b-> http://localhost:3000/api/auth/callback/google
  c-> https://ai-prompt-steel.vercel.app
  d-> https://ai-prompt-steel.vercel.app/api/auth/callback/google

GOOGLE_CLIENT_SECRET=//paste your secret here
MONGODB_URI=//paste your mongo URI (mongodb+srv://#####.mongodb.net/?retryWrites=true&w=majority)
NEXTAUTH_URL_INTERNAL=https://ai-prompt-steel.vercel.app/  or http://localhost:3000
NEXTAUTH_URL=https://ai-prompt-steel.vercel.app/  or http://localhost:3000

NEXTAUTH_SECRET=// paste your next auth secret
