import {JSON_PLACEHOLDER_API_URL} from "../constants"
import {useAxiosGet} from './hooks/useAxiosGet'

export function getResources (resource) {
  const {data, loading, error} = useAxiosGet(`${JSON_PLACEHOLDER_API_URL}/${resource}`)
  return {data, loading, error}
}
