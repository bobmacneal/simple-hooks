import {JSON_PLACEHOLDER_API_URL} from "../constants"
import {useAxiosGetItems} from './hooks/useAxiosGetItems'

export function getResources (resource) {
  const {listItems, loading, error} = useAxiosGetItems(`${JSON_PLACEHOLDER_API_URL}/${resource}`)
  return {listItems, loading, error}
}
