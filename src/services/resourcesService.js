import axios from 'axios'
import {JSON_PLACEHOLDER_API_URL} from "../constants"
import { useEffect, useState } from 'react'

export const getResources = resource => {
  const [resources, setResources] = useState([])
  // useEffect only runs async function when the resource prop changes (similar to componentDidUpdate
  // lifecycle method where we used to compare a prop to a prevProps.prop before invoking a function)
  useEffect(
    () => {
      (async resource => {
        const response = await axios.get(`${JSON_PLACEHOLDER_API_URL}/${resource}`)
        setResources(response.data)
      })(resource) // syntax here is to define async function "resource" then invoke it. That is: (define)(invoke)
    },
    [resource] // useEffect needs this to determine if function should be run (won't run if [resource] hasn't changed).
  )
  return resources
}
