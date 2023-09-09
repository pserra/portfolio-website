# A blog/portfolio example using Next.js, Markdown, TypeScript and Postgres

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## See my portfolio live

[https://pserra-portfolio.vercel.app/](https://pserra-portfolio.vercel.app/)

## How to use

Clone and Fork the Repo
```bash
git clone https://github.com/pserra/portfolio-website.git
```

```bash
yarn install
```

Head over to Vercel, create a deployment.
```bash
vercel link
```

Create storage on Vercel (Postgres).

Link that storage and pull down the configuration.
```bash
vercel env pull .env.development.local
```

Your portfolio should be up and running on [http://localhost:3000](http://localhost:3000)!

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

`portfolio-website` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).

`portfolio-website` is loosely based on [next.js / examples / blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) [(#48842)](https://github.com/vercel/next.js/pull/48842).