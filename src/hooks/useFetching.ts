import { useState } from 'react'

export const useFetching = (callback: (...args: any) => Promise<any>) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async (...args: any) => {
    try {
      setIsLoading(true)
      await callback(...args)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error] as const
}
