import ItemList from './ItemList'
import PostIcon from '@material-ui/icons/Notes'
import PhotoIcon from '@material-ui/icons/Photo'
import UserIcon from '@material-ui/icons/PeopleOutline'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { RESOURCE_TYPE } from '../constants'
import { Tab, Tabs, withStyles } from '@material-ui/core'
import TodoIcon from '@material-ui/icons/EventNote'

const Resource = ({classes}) => {
  // Following uses array destructuring.
  // The first element is the value. The second element is a setter.
  // Finally, useState(RESOURCE_TYPE.POSTS) is the initial value.
  const [resourceType, setResourceType] = useState(RESOURCE_TYPE.TODOS)
  const [resourceFields, setResourceFields] = useState(['id', 'title'])

  const handleChangeTab = (event, value) => {
    setResourceType(value)

    switch(value) {
      case RESOURCE_TYPE.USERS:
        setResourceFields(['id', 'name', 'username', 'email'])
        break;
      case RESOURCE_TYPE.POSTS:
        setResourceFields(['id', 'title', 'body'])
        break;
      case RESOURCE_TYPE.PHOTOS:
        setResourceFields(['id', 'title', 'url'])
        break;
      default: // RESOURCE_TYPE.TODOS
        setResourceFields(['id', 'title'])
    }
  }

  return (
    <React.Fragment>
      <Tabs
        indicatorColor="primary"
        onChange={handleChangeTab}
        textColor="inherit"
        value={resourceType}
      >
        <Tab
          icon={<TodoIcon />}
          label="Todos"
          value={RESOURCE_TYPE.TODOS}
        />
        <Tab
          icon={<PostIcon />}
          label="Posts"
          value={RESOURCE_TYPE.POSTS}
        />
        <Tab
          icon={<PhotoIcon />}
          label="Photos"
          value={RESOURCE_TYPE.PHOTOS}
        />
        <Tab
          icon={<UserIcon />}
          label="Users"
          value={RESOURCE_TYPE.USERS}
        />
      </Tabs>
      <div className={classes.mainContent}>
        <ItemList
          resourceType={resourceType}
          fields={resourceFields}
        />
      </div>
    </React.Fragment>
  )
}

Resource.propTypes = {
  classes: PropTypes.object.isRequired,
}

const styles = theme => ({
  mainContent: {
    paddingTop: theme.spacing.unit * 3,
  },
})

export default withStyles(styles)(Resource)
