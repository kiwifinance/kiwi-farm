import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserBalance, updateUserPendingReward } from 'state/actions'
import { salsahHarvest, salsahHarvestBnb, harvest } from 'utils/callHelpers'
import { useMasterchef, useSalsaChef } from './useContract'

export const useHarvest = (farmPid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const txHash = await harvest(masterChefContract, farmPid, account)
    dispatch(fetchFarmUserDataAsync(account))
    return txHash
  }, [account, dispatch, farmPid, masterChefContract])

  return { onReward: handleHarvest }
}

export const useAllHarvest = (farmPids: number[]) => {
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    const harvestPromises = farmPids.reduce((accum, pid) => {
      return [...accum, harvest(masterChefContract, pid, account)]
    }, [])

    return Promise.all(harvestPromises)
  }, [account, farmPids, masterChefContract])

  return { onReward: handleHarvest }
}

export const useSalsaHarvest = (salsaId, isUsingBnb = false) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const salsaChefContract = useSalsaChef(salsaId)
  const masterChefContract = useMasterchef()

  const handleHarvest = useCallback(async () => {
    if (salsaId === 0) {
      await harvest(masterChefContract, 0, account)
    } else if (isUsingBnb) {
      await salsahHarvestBnb(salsaChefContract, account)
    } else {
      await salsahHarvest(salsaChefContract, account)
    }
    dispatch(updateUserPendingReward(salsaId, account))
    dispatch(updateUserBalance(salsaId, account))
  }, [account, dispatch, isUsingBnb, masterChefContract, salsaChefContract, salsaId])

  return { onReward: handleHarvest }
}
