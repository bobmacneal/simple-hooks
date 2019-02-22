import { getResources } from '../services/resourcesService'
import { ID_FIELD } from '../constants'
import PropTypes from 'prop-types'
import React from 'react'
import { withStyles } from '@material-ui/core'

const ItemList = ({ classes, resourceType, fields }) => {
  const resources = getResources(resourceType)

  const renderRow = (resourceItem) => {
    const row = []
    fields.map(
      (field, index) => {
        let className
        let style
        if (field === ID_FIELD) {
          className = classes.idField
          style = {width: '50px'}
        } else {
          className = classes.textField
          style = {width: `${Math.round( 100 / fields.length )}%`}
        }
        return (
          row.push(
            <div
              className={className}
              key={index}
              style={style}
            >
              {resourceItem[field]}
            </div>
          )
        )
      }
    )
    return row
  }

  return (
    <React.Fragment>
      {resources.map(
        (resource) => {
          return (
            <div className={classes.list} key={resource.id}>
              {renderRow(resource)}
            </div>
          )
        }
      )}
    </React.Fragment>
  )
}

ItemList.propTypes = {
  classes: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  resourceType: PropTypes.string.isRequired,
}

const styles = theme => ({
  list: {
    borderBottom: 'solid 1px silver',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
  idField: {
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
  },
  textField: {
    flexGrow: 1,
    overflow: 'hidden',
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    minWidth: '20%',
  },
})

export default withStyles(styles)(ItemList)
