import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'KIWI',
    lpAddresses: {
      97: '',
      56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    },
    tokenSymbol: 'SALSA',
    tokenAddresses: {
      97: '',
      56: '0x4375eA687330A95D42383Ef18AD3ea8C4Db7224d',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'KIWI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8405Be915Af56589756A275d4894FA9f0Ff6CA0F',
    },
    tokenSymbol: 'KIWI',
    tokenAddresses: {
      97: '',
      56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'KIWI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x8cC2f287195F3a1c7736cFE6348DA80e390622f6',
    },
    tokenSymbol: 'KIWI',
    tokenAddresses: {
      97: '',
      56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunity: false,
  },
  {
   pid: 3,
   lpSymbol: 'KIWI-USDT LP',
   lpAddresses: {
     97: '',
     56: '0x31295b81D5c9388fb3AfDd22bCA517AAF52840f8',
   },
   tokenSymbol: 'KIWI',
   tokenAddresses: {
     97: '',
     56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
   },
   quoteTokenSymbol: QuoteToken.USDT,
   quoteTokenAdresses: contracts.usdt,
   isCommunity: false,
 },
 {
  pid: 4,
  lpSymbol: 'KIWI-USDC LP',
  lpAddresses: {
    97: '',
    56: '0x36DCBA6A7b5769Acf74cEA7f58564EF1B44362C1',
  },
  tokenSymbol: 'KIWI',
  tokenAddresses: {
    97: '',
    56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
  },
  quoteTokenSymbol: QuoteToken.USDC,
  quoteTokenAdresses: contracts.usdc,
  isCommunity: false,
},
{
    pid: 5,
    lpSymbol: 'KIWI-CHS LP',
    lpAddresses: {
      97: '',
      56: '0x1E90d3C88A3E830983b70E6EF9799Ff1c0deCE62',
    },
    tokenSymbol: 'KIWI',
    tokenAddresses: {
      97: '',
      56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
    },
    quoteTokenSymbol: QuoteToken.CHS,
    quoteTokenAdresses: contracts.chs,
  },
  {
      pid: 6,
      lpSymbol: 'USDT-BNB LP',
      lpAddresses: {
        97: '',
        56: '0x1E90d3C88A3E830983b70E6EF9799Ff1c0deCE62',
      },
      tokenSymbol: 'USDT',
      tokenAddresses: {
        97: '',
        56: '0x2cc26dd730F548dc4ac291ae7D84a0C96980d2cB',
      },
      quoteTokenSymbol: QuoteToken.BNB,
      quoteTokenAdresses: contracts.wbnb,
    },
]

export default farms
