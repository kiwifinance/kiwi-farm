import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'KIWI',
    lpAddresses: {
      97: '',
      56: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
    },
    tokenSymbol: 'SALSA',
    tokenAddresses: {
      97: '',
      56: '0x75A26B9EfD0a5BD1A73bCc791Ac14B818E11758E',
    },
    quoteTokenSymbol: QuoteToken.SALSA,
    quoteTokenAdresses: contracts.salsa,
  },
  {
    pid: 1,
    lpSymbol: 'KIWI-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDf8481f4ffb688d940f59F839c2613cc6C40a79E',
    },
    tokenSymbol: 'KIWI',
    tokenAddresses: {
      97: '',
      56: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'KIWI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x6254C5be216B7E17ff27E82d06e96BAdF799885B',
    },
    tokenSymbol: 'KIWI',
    tokenAddresses: {
      97: '',
      56: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
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
     56: '0xab2c09F73FB62B033C6B5CfDb929C422033B0619',
   },
   tokenSymbol: 'KIWI',
   tokenAddresses: {
     97: '',
     56: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
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
    56: '0xaC8532CD60CF37440e00c86c0EFDe31C1Dbcf099',
  },
  tokenSymbol: 'KIWI',
  tokenAddresses: {
    97: '',
    56: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
  },
  quoteTokenSymbol: QuoteToken.USDC,
  quoteTokenAdresses: contracts.usdc,
  isCommunity: false,
},
{
    pid: 6,
    lpSymbol: 'KIWI-CHS LP',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'KIWI',
    tokenAddresses: {
      97: '',
      56: '0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3',
    },
    quoteTokenSymbol: QuoteToken.CHS,
    quoteTokenAdresses: contracts.chs,
  },
  {
      pid: 6,
      lpSymbol: 'USDT-BNB LP',
      lpAddresses: {
        97: '',
        56: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD',
      },
      tokenSymbol: 'USDT',
      tokenAddresses: {
        97: '',
        56: '0x55d398326f99059fF775485246999027B3197955',
      },
      quoteTokenSymbol: QuoteToken.BNB,
      quoteTokenAdresses: contracts.wbnb,
    },
]

export default farms
