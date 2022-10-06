import React, { useEffect, useState } from 'react'
import axios from '../Http/axios'

const useFetch = (url: string, params: any = {}) => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [shouldRefresh, refresh] = useState<any>({})

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      try {
        const { data: res } = await axios.get(url, {
          params
        })
        setData(res)
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [url, shouldRefresh])

  return [data, isLoading, refresh]
}

export default useFetch
