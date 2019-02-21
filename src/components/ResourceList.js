import React from 'react'
import { getResources } from "../services/resourcesService"

const ResourceList = ({ resourceType }) => {
  const resourcesArray = getResources(resourceType)
  return (
    <ul>
      {
        resourcesArray.map(
          (item, index) => {
            return <li key={index}>{item.title}</li>
          }
        )
      }
    </ul>
  )
}

export default ResourceList
