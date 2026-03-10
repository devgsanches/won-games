'use client'

import { Heading } from '../../_components/Heading'

import { Separator } from '@/components/ui/separator'
import { Showcase } from '../../_components/Showcase'
import mostPopularHighlight from '../../_components/Highlight/mock'
import mock from './mock'
import gamesMock from '../../_components/GameCardSlider/mock'
import { EmptyDecorate } from '../../_components/Empty'
import { CartList } from '../../_components/CartList'
import { PaymentOptions } from '../../_components/PaymentOptions'
import { Container } from '../../_components/Container'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Button } from '../../_components/Button'
import { Info } from 'lucide-react'
import { useCartStore } from '../../_store/cart'

export function Cart() {

  const isMobile = useMediaQuery('(max-width: 768px)')

  const { items } = useCartStore()


  return (
    <Container className={`pb-60 mt-20.25 h-full`}>
      <div className={isMobile ? 'px-grid-gutter' : ''}>
        <Heading
          text="My cart"
          color="white"
          size="xxlarge"
          decorate={{ color: 'secondary', orientation: 'vertical' }}
        />
      </div>

      {items.length === 0 ? (
        <div className="space-y-10">
          <div>
            <EmptyDecorate />
          </div>

          <Separator orientation="horizontal" className="bg-xxlight-gray/30" />

          <Showcase
            gameHighlight={mostPopularHighlight}
            title="You may also like"
            titleColor="white"
            games={mock}
            arrowColor="white"
          />
        </div>
      ) : (
        <div>
          <div
            className={`flex flex-col gap-7.5 mt-8 ${isMobile ? 'px-grid-gutter' : ''}`}
          >
            <div className="flex flex-col md:flex-row gap-7.5 h-full">
              <CartList items={items} total={items.reduce((acc, item) => acc + (item.price ?? 0), 0)} onOpenChange={() => { }} />
              <PaymentOptions />
            </div>
            <div className="my-10.5">
              <p className="font-light text-sm/7 md:text-base/5 text-xxlight-gray">
                <Info
                  className="inline mr-2 text-primary"
                  size={20}
                  strokeWidth={2}
                />
                Your purchase is protected by a secure connection from the WON
                platform. By purchasing from our store, you accept and agree to
                our{' '}
                <Button variant="link" to="/terms-of-use">
                  terms of use
                </Button>
                . After making your purchase, you are entitled to a refund
                within a maximum of 30 days, at no additional cost, provided
                that the game purchased has not been downloaded after your
                purchase.
              </p>
            </div>
            <Separator
              orientation="horizontal"
              className="bg-xxlight-gray/30"
            />
          </div>
          <Showcase
            gameHighlight={mostPopularHighlight}
            title="You may also like"
            titleColor="white"
            games={gamesMock}
            arrowColor="white"
          />
        </div>
      )}
    </Container>
  )
}
