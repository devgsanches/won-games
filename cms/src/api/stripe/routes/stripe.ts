/** @type {import('@strapi/strapi').Core.RouterConfig} */
const config = {
  type: 'content-api',
  routes: [
    {
      method: 'POST',
      path: '/stripe/create-checkout',
      handler: 'api::stripe.stripe.createCheckout',
      config: {
        auth: false,
      },
    },
  ],
};

export default config;
