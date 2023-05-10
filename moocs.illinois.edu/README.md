This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on cPanel

Deployment is currently a manual process.

1. Run `npm run build`.
2. Compress all files (exlcuding `node_modules`) from the project into a zip file.
3. Login to (cPanel)[web.illinois.edu] and open the file manager.
4. Navigate to `/home/smartmoocs/smartmoocs.web.illinois.edu`.
5. Upload the zip file from step 2 into this folder.
6. Right click and select _Extract_.
7. Delete the zip file.
8. Navigate back to the cPanel, scroll to the bottom and select _Setup Node.js App_.
9. On the right of the `smartmoocs.web.illinois.edu` app select the spinning circle icon to _Restart the application_.
10. Navigate to (smartmoocs.web.illinois.edu)[https://smartmoocs.web.illinois.edu]
