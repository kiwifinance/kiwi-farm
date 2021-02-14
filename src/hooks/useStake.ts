import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, salsaStake, salsaStakeBnb } from 'utils/callHelpers'
import { useMasterchef, useSalsaChef } from './useContract'

const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export const useSalsaStake = (salsaId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()
  const salsaChefContract = useSalsaChef(salsaId)

  const handleStake = useCallback(
    async (amount: string) => {
      if (salsaId === 0) {
        await stake(masterChefContract, 0, amount, account)
      } else if (isUsingBnb) {
        await salsaStakeBnb(salsaChefContract, amount, account)
      } else {
        await salsaStake(salsaChefContract, amount, account)
      }
      dispatch(updateUserStakedBalance(salsaId, account))
      dispatch(updateUserBalance(salsaId, account))
    },
    [account, dispatch, isUsingBnb, masterChefContract, salsaChefContract, salsaId],
  )

  return { onStake: handleStake }
}

export default useStake
