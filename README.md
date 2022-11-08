# Lucia Sveltekit Demo

This is a demo to try out [Lucia](https://lucia-auth.vercel.app/), a _"user and session management library that provides an abstraction layer between your app and your database"_, with [Prisma](https://www.prisma.io/). 

This is also using Lucia's OAuth package for Github's OAuth and my own implementation for Twitch's OAuth.

## Developing
Create a `.env` file and fill in the following with your OAuth App info:
```env
DATABASE_URL="file:./dev.sqlite"
PUBLIC_GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."

PUBLIC_TWITCH_CLIENT_ID="..."
TWITCH_CLIENT_SECRET="..."
PUBLIC_TWITCH_REDIRECT_URI="..."

```
Install the dependencies and start the development server:

```bash
# install deps
pnpm i
# start dev server
pnpm dev
```

