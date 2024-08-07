import { useEffect, useRef } from 'react'

interface IUseObserver {
  ref: React.RefObject<HTMLElement>
  canLoad: boolean
  isLoading: boolean
  callback: () => void
}

export const useObserver = ({ ref, canLoad, isLoading, callback }: IUseObserver): void => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (isLoading) return

    if (observer.current) observer.current.disconnect()

    const callbackObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && canLoad) {
          callback()
        }
      })
    }

    observer.current = new IntersectionObserver(callbackObserver)
    if (ref.current) observer.current.observe(ref.current)
  }, [isLoading, canLoad, callback, ref])
}
