import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Button, Modal } from '@kiwifinancebsc/uikit'
import { getFullDisplayBalance } from 'utils/formatBalance'
import TicketInput from 'components/TicketInput'
import ModalActions from 'components/ModalActions'
import { useMultiBuyLottery, useMaxNumber } from 'hooks/useBuyLottery'
import useI18n from 'hooks/useI18n'

interface BuyTicketModalProps {
  max: BigNumber
  onConfirm?: (amount: string, numbers: Array<number>) => void
  onDismiss?: () => void
  tokenName?: string
}

const BuyTicketModal: React.FC<BuyTicketModalProps> = ({ max, onDismiss }) => {
  const [val, setVal] = useState('1')
  const [pendingTx, setPendingTx] = useState(false)
  const [, setRequestedBuy] = useState(false)
  const TranslateString = useI18n()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const maxTickets = useMemo(() => {
     return parseInt(getFullDisplayBalance(max.div(new BigNumber(0.1))))
   }, [max])

   const handleChange = (e: React.FormEvent<HTMLInputElement>) => setVal(e.currentTarget.value)

   const { onMultiBuy } = useMultiBuyLottery()
   const maxNumber = useMaxNumber()
   const handleBuy = useCallback(async () => {
     try {
       setRequestedBuy(true)
       const length = parseInt(val)
       // @ts-ignore
       // eslint-disable-next-line prefer-spread
       const numbers = Array.apply(null, { length }).map(() => [
         Math.floor(Math.random() * maxNumber) + 1,
         Math.floor(Math.random() * maxNumber) + 1,
         Math.floor(Math.random() * maxNumber) + 1,
         Math.floor(Math.random() * maxNumber) + 1,
       ])
       const txHash = await onMultiBuy('0.1', numbers)
       // user rejected tx or didn't go thru
       if (txHash) {
         setRequestedBuy(false)
       }
     } catch (e) {
       console.error(e)
     }
   }, [onMultiBuy, setRequestedBuy, maxNumber, val])

  const handleSelectMax = useCallback(() => {
    if (Number(maxTickets) > 100) {
      setVal('100')
    } else {
      setVal(maxTickets.toString())
    }
  }, [maxTickets])

  const kiwiCosts = (amount: string): number => {
    return +amount * 0.1
  }
  return (
    <Modal title={TranslateString(450, 'Enter amount of tickets to buy')} onDismiss={onDismiss}>
      <TicketInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol="PSLT Ticket"
        availableSymbol="KIWI"
      />
      <div>
        <Tips>{TranslateString(456, 'Your amount must be a multiple of 0.1 KIWI')}</Tips>
        <Tips>{TranslateString(458, '1 Ticket = 0.1 KIWI')}</Tips>
      </div>
      <div>
        <Announce>
          {TranslateString(
            478,
            'Ticket purchases are final. Your KIWI cannot be returned to you after buying tickets.',
          )}
        </Announce>
        <Final>{TranslateString(460, `You will spend: ${kiwiCosts(val)} KIWI`)}</Final>
      </div>
      <ModalActions>
        <Button fullWidth variant="secondary" onClick={onDismiss}>
          {TranslateString(462, 'Cancel')}
        </Button>
        <Button
          id="lottery-buy-complete"
          fullWidth
          disabled={pendingTx || parseInt(val) > Number(maxTickets) || parseInt(val) > 50 || parseInt(val) < 1}
          onClick={null}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default BuyTicketModal

const Tips = styled.div`
  margin-left: 0.4em;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`

const Final = styled.div`
  margin-top: 1em;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`
const Announce = styled.div`
  margin-top: 1em;
  margin-left: 0.4em;
  color: #ed4b9e;
`
