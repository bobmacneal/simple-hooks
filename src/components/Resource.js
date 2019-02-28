import React, {useState} from 'react'
import {Tab, Tabs} from '@material-ui/core'
import ItemList from './ItemList'
import PhotoIcon from '@material-ui/icons/Photo'
import PostIcon from '@material-ui/icons/Notes'
import {resourceCategory} from '../constants'
import TodoIcon from '@material-ui/icons/EventNote'
import UserIcon from '@material-ui/icons/PeopleOutline'

function Resource () {
  const [resourceType, setResourceType] = useState(resourceCategory.TODOS)
  const [resourceFields, setResourceFields] = useState(['id', 'title'])

  function handleSwitchTab (event, value) {
    setResourceType(value)

    switch(value) {
      case resourceCategory.USERS:
        setResourceFields(['id', 'name', 'email'])
        break;
      case resourceCategory.POSTS:
        setResourceFields(['id', 'title', 'body'])
        break;
      case resourceCategory.PHOTOS:
        setResourceFields(['id', 'title', 'url'])
        break;
      default: // resourceCategory.TODOS
        setResourceFields(['id', 'title'])
    }
  }

  return (
    <React.Fragment>
      <Tabs
        indicatorColor="primary"
        onChange={handleSwitchTab}
        textColor="inherit"
        value={resourceType}
      >
        <Tab
          icon={<TodoIcon />}
          label="Todos"
          value={resourceCategory.TODOS}
        />
        <Tab
          icon={<PostIcon />}
          label="Posts"
          value={resourceCategory.POSTS}
        />
        <Tab
          icon={<PhotoIcon />}
          label="Photos"
          value={resourceCategory.PHOTOS}
        />
        <Tab
          icon={<UserIcon />}
          label="Users"
          value={resourceCategory.USERS}
        />
      </Tabs>
      <div>
        <ItemList
          resourceType={resourceType}
          fields={resourceFields}
        />
      </div>
    </React.Fragment>
  )
}

export default Resource
