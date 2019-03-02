import {useEffect, useState} from 'react'
import axios from 'axios'

export function useAxiosGetItems(url) {
  const [listItems, setListItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const requestData = async () => {
    setError(false)
    setLoading(true)
    try {
      const response = await axios.get(url)
      setListItems(response.data)
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    requestData()
  }, [url])

  return {listItems, loading, error}
}
