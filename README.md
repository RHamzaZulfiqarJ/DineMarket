# DineMarket

A full-stack ecommerce storefront for browsing products, managing a cart, and placing orders, with an admin area for product and order workflows.

Built with **Next.js 14, React, TypeScript, Prisma, and MongoDB**. Product and order images are handled through Cloudinary.

## What is in the app

- Product listings, categories, product detail pages, and responsive storefront pages
- Cart and checkout flows
- Order submission and order management
- Admin-facing product and order views
- Contact and service pages

The checkout records a payment type; it does not claim an integrated card-payment gateway.

## Stack

| Layer | Tools |
| --- | --- |
| Web | Next.js 14, React, TypeScript, Tailwind CSS |
| Data | Prisma, MongoDB |
| Media | Cloudinary |
| UI | MUI, Radix components, Framer Motion |

## Run locally

```bash
git clone https://github.com/RHamzaZulfiqarJ/DineMarket.git
cd DineMarket
npm install
```

Create a local `.env` file with your own values:

```env
DATABASE_URL="mongodb+srv://..."
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
```

Then run:

```bash
npx prisma generate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project notes

The repository was formerly named `Fullstack-Ecommerce`. Its existing storefront branding is Dine Market, which is why the project and repository now use **DineMarket**.

Do not commit real environment files or credentials. The previously tracked root `.env` was removed from the current branch; if it contained active secrets, rotate them and consider a separate history cleanup.
