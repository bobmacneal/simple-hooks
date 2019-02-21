import PostIcon from '@material-ui/icons/Notes'
import PhotoIcon from '@material-ui/icons/Photo'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import ResourceList from './ResourceList'
import { RESOURCE_TYPE } from '../constants'
import { Tab, Tabs, withStyles } from '@material-ui/core'
import TodoIcon from '@material-ui/icons/EventNote'

const Resource = ({classes}) => {
  // Following uses array destructuring.
  // The first element is the value. The second element is a setter.
  // Finally, useState(RESOURCE_TYPE.POSTS) is the initial value.
  const [resourceType, setResourceType] = useState(RESOURCE_TYPE.TODOS)

  const handleChangeTab = (event, value) => {
    setResourceType(value)
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
      </Tabs>
      <div className={classes.mainContent}>
        <ResourceList resourceType={resourceType}/>
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
