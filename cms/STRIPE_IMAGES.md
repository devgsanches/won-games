# Imagens no Checkout Stripe

## Comportamento

- **STRAPI_URL com HTTPS público** (ex: produção ou ngrok): as capas dos jogos aparecem no checkout.
- **localhost ou HTTP**: usa placeholder com o nome do jogo (Stripe não consegue acessar localhost).

## Ver imagens reais em desenvolvimento

1. Instale o [ngrok](https://ngrok.com/download)
2. Com o Strapi rodando na porta 1337, execute:
   ```bash
   ngrok http 1337
   ```
3. Copie a URL HTTPS gerada (ex: `https://abc123.ngrok-free.app`)
4. No `.env` do CMS:
   ```env
   STRAPI_URL=https://abc123.ngrok-free.app
   ```
5. Reinicie o Strapi

Depois disso, as capas reais dos jogos devem aparecer no checkout.
