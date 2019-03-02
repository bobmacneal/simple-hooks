import {CircularProgress, Typography, withStyles} from '@material-ui/core'
import {getResources} from '../services/resourcesService'
import {ID_FIELD} from '../constants'
import {PropTypes} from 'prop-types'
import React from 'react'

function ItemList ({classes, resourceType, fields}) {
  const {listItems, loading, error} = getResources(resourceType)

  const renderRow = (resourceItem) => {
    const row = []
    fields.map(
      (field, index) => {
        let className
        let style
        if (field === ID_FIELD) {
          className = classes.idField
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

  if (loading) {
    return (
      <div className={classes.progressContainer}>
        <CircularProgress disableShrink={Boolean(true)} />
      </div>
    )
  } else if (error) {
    return (
      <div className={classes.errorContainer}>
        <Typography color="error">{error}</Typography>
      </div>
    )
  } else {
    return (
      <div className={classes.listContainer}>
        {listItems.map(
          (item, index) => {
            return (
              <div className={classes.listItem} key={index}>
                {renderRow(item)}
              </div>
            )
          }
        )}
      </div>
    )
  }
}

ItemList.propTypes = {
  classes: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  resourceType: PropTypes.string.isRequired,
}

const styles = theme => ({
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: theme.spacing.unit * 5,
  },
  idField: {
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    width: theme.spacing.unit * 8,
  },
  listContainer: {
    marginTop: theme.spacing.unit * 6,
  },
  listItem: {
    borderBottom: 'solid 1px silver',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
  progressContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    height: theme.spacing.unit * 5,
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
