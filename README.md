# Anime Interactive Website — Scaffold (Demo)

This repository is a **deploy-ready scaffold** for the Anime Themed Interactive Website. It's a minimal, opinionated starter you can deploy to Vercel and then replace mock parts with Supabase + Stripe for full features.

## What is included
- Next.js app (TypeScript-ready)
- Tailwind CSS setup
- Demo homepage reproducing the core UI pieces (Heroes wheel, rankings)
- `/api/create-checkout-session` stub for Stripe Checkout
- `lib/supabaseClient.ts` — ready to connect to Supabase (requires env vars)

## Quick deploy (5–10 minutes)
1. Create a GitHub repo and push this project.
2. Create accounts:
   - Vercel: https://vercel.com
   - Supabase: https://supabase.com (optional, required for real DB/auth)
   - Stripe: https://stripe.com (optional, required for payments)
3. In Vercel, import the GitHub repo and set environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only)
   - `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_APP_URL` (your deployed URL)
4. Deploy. Your site will be live on a `*.vercel.app` domain.

## Next steps to make it judge-ready (I can do these too)
- Replace local mock authentication with Supabase Auth (username mapped to dummy email).
- Seed `characters`, `rankings`, and `comments` tables in Supabase.
- Wire realtime subscriptions for `rankings` and `comments`.
- Complete Stripe checkout + webhook to save purchases in DB.
- Add demo account and a short demo video link in README.

---

If you'd like, I can now:
- (1) produce a ZIP of this scaffold (ready to upload to GitHub), or
- (2) auto-push the project to a GitHub repo for you (I will give exact steps to complete).
You originally asked for option A (ZIP). The ZIP is ready to download.

