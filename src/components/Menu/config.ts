import { MenuEntry } from '@kiwifinancebsc/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://farm.kiwiswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://kiwiswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://kiwiswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://info.cheeseswap.app',
      },
      {
        label: 'Tokens',
        href: 'https://info.cheeseswap.app/token/0xcfdf8a80fecaeecc144fa74c0df8691bfd0e26e3',
      },
      {
        label: 'Pairs',
        href: 'https://info.cheeseswap.app/pair/0xdf8481f4ffb688d940f59f839c2613cc6c40a79e',
      },
      {
        label: 'Accounts',
        href: 'https://info.cheeseswap.app/accounts',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/kiwifinance',
      },
    ],
  },
]

export default config
