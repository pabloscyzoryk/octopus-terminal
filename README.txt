Hi!

I'm happy you decided to test octopus-terminal software.
Here are some things you should know before you start:

Default password to access octopus is "szczur" (you can eaisly change it in ./client/src/index.ts)

Remember to set env variables!!! (check .env.example files)

After you use pkg to build the app, you might sometimes see the Fetch API experimental warning.
It's because of the way pkg works, and it's not a problem.
I hope one day they will fix it.

Let me know if you encounter any problems with babel while building the app (npm run build / pnpm build)
and if you know a way to fix them easily. (it took me quite a while and I don't even know what I did to fix it)

You should set these values in your database in meta table:
version, downloadUrl

Download source is meant to be not known publicly.
(it's a build exe application - it has access to all confidential data)

Version should be mutable from the backend side to let users know when a new update is available.

*Because you should be happy with developing the app on your own :D!*

These are useful for me as a developer, you don't have to do anything with them.
Just know that commands like "update" won't work properly in that case.

------------------------------------------------------------

To build the client:
npm run build / pnpm build

To run the client dev server:
npm run dev / pnpm dev

To start the client app:
npm run start / pnpm start

To compile the client app to executable:
npm run make / pnpm make

------------------------------------------------------------

To build the server:
npm run build / pnpm build

To run the server dev server (on nodemon):
npm run dev / pnpm dev

To start the client server:
npm run start / pnpm start

------------------------------------------------------------

To generate Prisma Client:
npx prisma generate

To push prisma schema to database:
npx prisma db push

------------------------------------------------------------

Thank you!

MIT License

by pabloscyzoryk