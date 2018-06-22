import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { listOf, recordOf } from 'react-immutable-proptypes'
import PropTypes from 'prop-types'
import React from 'react'

import {
  MSEFilterTitle,
  MSEFilterTitleRow,
} from 'App/routes/InventoryPage/routes/ViewAllMSE/routes/MSEFilters/MSEFilters.style'
import {
  addInventoryItemFilter,
  applyInventoryItemFilters,
  clearInventoryItemFilters,
  editInventoryItemFilter,
  removeInventoryItemFilter,
  revertInventoryItemFilters,
} from 'store/inventoryItems/inventoryItems.actions'
import { selectPendingInventoryItemFilters } from 'store/inventoryItems/inventoryItems.selectors'
import Button from 'App/shared/components/Button'
import Card from 'App/shared/components/Card'
import Container from 'App/shared/components/Container'
import Fill from 'App/shared/components/Fill'
import MSEFilterRow from 'App/routes/InventoryPage/routes/ViewAllMSE/routes/MSEFilters/MSEFilterRow'
import MSEFiltersMessages from 'App/routes/InventoryPage/routes/ViewAllMSE/routes/MSEFilters/messages'
import Offset from 'App/shared/components/Offset'
import SVGIcon from 'App/shared/components/SVGIcon'

export const MSEFiltersBase = ({
  addInventoryItemFilter,
  clearInventoryItemFilters,
  removeInventoryItemFilter,
  editInventoryItemFilter,
  revertInventoryItemFilters,
  applyInventoryItemFilters,
  onRequestClose,
  pendingFilters,
  ...props
}) => (
  <Container>
    <Card>
      <MSEFilterTitleRow>
        <MSEFilterTitle>
          <FormattedMessage {...MSEFiltersMessages.title} />
        </MSEFilterTitle>
        <Fill />
        <Button
          onClick={clearInventoryItemFilters}
          data-test-id="clear-filters"
        >
          <FormattedMessage {...MSEFiltersMessages.clearFilters} />
        </Button>
      </MSEFilterTitleRow>
      {pendingFilters.map((filter, i) => (
        <MSEFilterRow
          isLast={i === pendingFilters.size - 1}
          key={i} // eslint-disable-line react/no-array-index-key
          filter={filter}
          onEditField={field =>
            editInventoryItemFilter(i, filter.set('field', field))
          }
          onEditOperator={operator =>
            editInventoryItemFilter(i, filter.set('operator', operator))
          }
          onEditValue={value =>
            editInventoryItemFilter(i, filter.set('value', value))
          }
          onClickDelete={() => removeInventoryItemFilter(i)}
        />
      ))}
      <Offset horizontal={-1}>
        <Button
          data-test-id="add-filter"
          primary
          onClick={addInventoryItemFilter}
        >
          <SVGIcon forButtonLeft name="content.add" />
          <FormattedMessage {...MSEFiltersMessages.addFilter} />
        </Button>
      </Offset>
      <Card.Actions>
        <Button.Raised
          accent
          data-test-id="apply-filters"
          onClick={() => {
            applyInventoryItemFilters()
            onRequestClose()
          }}
        >
          <FormattedMessage {...MSEFiltersMessages.apply} />
        </Button.Raised>
        <Fill />
        <Button
          data-test-id="revert-filters"
          onClick={() => {
            revertInventoryItemFilters()
            onRequestClose()
          }}
        >
          <FormattedMessage {...MSEFiltersMessages.cancel} />
        </Button>
      </Card.Actions>
    </Card>
  </Container>
)

MSEFiltersBase.propTypes = {
  addInventoryItemFilter: PropTypes.func,
  clearInventoryItemFilters: PropTypes.func,
  removeInventoryItemFilter: PropTypes.func,
  editInventoryItemFilter: PropTypes.func,
  revertInventoryItemFilters: PropTypes.func,
  applyInventoryItemFilters: PropTypes.func,
  onRequestClose: PropTypes.func,
  pendingFilters: listOf(
    recordOf({
      field: PropTypes.string,
      operator: PropTypes.string,
      value: PropTypes.any,
    }),
  ),
}

export default connect(
  state => ({
    pendingFilters: selectPendingInventoryItemFilters(state),
  }),
  {
    clearInventoryItemFilters,
    removeInventoryItemFilter,
    editInventoryItemFilter,
    addInventoryItemFilter,
    revertInventoryItemFilters,
    applyInventoryItemFilters,
  },
)(MSEFiltersBase)
rs,
  },
)(MSEFiltersBase)
