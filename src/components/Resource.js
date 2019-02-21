import React, { useState } from 'react'
import ResourceList from './ResourceList'

const Resource = () => {
  // Following uses array destructuring.
  // The first element is the value. The second element is a setter.
  // Finally, useState('posts') is the initial value.
  const [resourceType, setResourceType] = useState('posts')

  return (
    <div>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('todos')}>Todos</button>
      </div>
      <ResourceList resourceType={resourceType}/>
    </div>
  )
}

export default Resource
