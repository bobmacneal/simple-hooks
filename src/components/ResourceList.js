import React from 'react'
import { getResources } from "../services/resourcesService"
import PropTypes from 'prop-types'
import { withStyles } from "@material-ui/core"
import {RESOURCE_TYPE} from '../constants'
import DoneIcon from '@material-ui/icons/Done';

const ResourceList = ({ classes, resourceType }) => {
  const resourcesArray = getResources(resourceType)

  const renderVariableColumn = (resourceType, item) => {
    if (resourceType === RESOURCE_TYPE.PHOTOS) {
      return (
        <div className={classes.cell}>
          <img alt="" src={item.thumbnailUrl} height="15" width="15" />
        </div>)
    } else if (resourceType === RESOURCE_TYPE.TODOS) {
      return (
        <div className={classes.cell}>
          {item.completed === true ? <DoneIcon/> : null}
        </div>
      )
    } else {
      return <div className={classes.cell}>{item.body}</div>
    }
  }

  return (
    <React.Fragment>
      {
        resourcesArray.map(
          (item, index) => {
            return (
              <div className={classes.list} key={index}>
                <div className={classes.cell} style={{maxWidth: 50}}>{item.id}</div>
                <div className={classes.cell}>{item.title}</div>
                {renderVariableColumn(resourceType, item)}
              </div>
            )
          }
        )
      }
    </React.Fragment>
  )
}

ResourceList.propTypes = {
  classes: PropTypes.object.isRequired,
  resourceType: PropTypes.string.isRequired,
}

const styles = theme => ({
  list: {
    borderBottom: 'solid 1px silver',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  cell: {
    boxSizing: 'borderBox',
    flexGrow: 1,
    overflow: 'hidden',
    paddingBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    width: '30%',
  },
})


export default withStyles(styles)(ResourceList)
