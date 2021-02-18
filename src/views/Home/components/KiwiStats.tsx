import React from 'react'
import { Card, CardBody, Heading, Text } from '@kiwifinancebsc/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getKiwiAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledKiwiStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const KiwiStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getKiwiAddress())
  const kiwiSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0

  return (
    <StyledKiwiStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Kiwi Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total KIWI Supply')}</Text>
          {kiwiSupply && <CardValue fontSize="14px" value={kiwiSupply} />}
        </Row>
          <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total KIWI Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New KIWI/block')}</Text>
          <CardValue fontSize="14px" decimals={4} value={0.020} />
        </Row>
      </CardBody>
    </StyledKiwiStats>
  )
}

export default KiwiStats
