import Stripe from 'stripe';
import { factories } from '@strapi/strapi';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default factories.createCoreController('api::stripe.stripe', ({ strapi }) => ({
  async createCheckout(ctx) {
    const { items } = ctx.request.body;

    const strapiBaseUrl = process.env.STRAPI_URL ?? 'http://localhost:1337';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',

      line_items: items.map((item: { title?: string; name?: string; price?: number; quantity?: number; cover?: { url?: string } | null }) => {
        const fullImageUrl = item.cover?.url
          ? `${strapiBaseUrl.replace(/\/$/, '')}${item.cover.url}`
          : null;
        const useRealImage = fullImageUrl?.startsWith('https://');
        const productName = (item.title ?? item.name ?? 'Game').slice(0, 20);
        // Thumbnail 800x450 + WebP para carregamento mais rápido no Stripe
        const thumbW = 800;
        const thumbH = 450;
        const images = useRealImage
          ? [`https://wsrv.nl/?url=${encodeURIComponent(fullImageUrl!)}&w=${thumbW}&h=${thumbH}&fit=cover&output=webp&q=85`]
          : [`https://placehold.co/${thumbW}x${thumbH}/2563eb/ffffff?text=${encodeURIComponent(productName)}`];

        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.title ?? item.name ?? 'Game',
              description: 'Digital game • Instant delivery',
              images,
            },
            unit_amount: Math.round((item.price ?? 0) * 100),
          },
          quantity: item.quantity ?? 1,
        };
      }),

      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/',
    });

    ctx.body = { url: session.url };
  },
}));