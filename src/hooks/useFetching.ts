import axios, { AxiosError } from 'axios'
import { useState } from 'react'

export const useFetching = (callback: (...args: any) => Promise<any>) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching = async (...args: any) => {
    try {
      setIsLoading(true)
      await callback(...args)
    } catch (err) {
      const errors = err as Error | AxiosError
      if (!axios.isAxiosError(error)) {
        setError(errors.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error] as const
}
