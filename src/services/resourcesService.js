import {FETCH_LIMIT, JSON_PLACEHOLDER_API_URL} from "../constants"
import {useEffect, useState} from 'react'
import axios from 'axios'

export function getResources (resource) {
  const [resources, setResources] = useState([])

  async function getData() {
    const response = await axios.get(`${JSON_PLACEHOLDER_API_URL}/${resource}`)
    setResources(response.data)
  }

  useEffect(() => {
    getData()
  }, [resource])

  return resources.slice(0, FETCH_LIMIT) // limit to FETCH_LIMIT records
}
