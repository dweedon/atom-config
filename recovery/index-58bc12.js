import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'
import compose from 'lodash/fp/flowRight'

import { getEquipmentCodes } from 'ducks/equipmentCodes'
import { isDesktop } from 'helpers/screenForm'
import { selectIsNavOpen, setNavOpen as setNavOpen_ } from 'ducks/app'
import { withAlertError } from 'helpers/errorHandlers'
import AppNav from 'components/MSE/AppNav'
import EquipmentCodePage from 'containers/EquipmentCodePage'
import ErrorProvider from 'containers/ErrorProvider'
import InventoryPage from 'containers/InventoryPage'
import MessageProvider from 'containers/MessageProvider'
import onMount from 'components/higherOrderComponents/onMount'
import onScreenFormChange from 'helpers/onScreenFormChange'

import { PageWrap } from './App.style'

export function App({ isNavOpen, setNavOpen }) {
  return (
    <React.Fragment>
      <AppNav
        isOpen={isNavOpen}
        closeNav={() => setNavOpen(false)}
        openNav={() => setNavOpen(true)}
      >
        <AppNav.Link to="/inventory">Inventory</AppNav.Link>
        <AppNav.Link to="/equipment_codes">Equipment Codes</AppNav.Link>
      </AppNav>
      <AppNav.Offset isNavOpen={isNavOpen}>
        <ErrorProvider>
          <PageWrap>
            <Switch>
              <Redirect exact from="/" to="inventory" />
              <Route path="/equipment_codes" component={EquipmentCodePage} />
              <Route path="/inventory" component={InventoryPage} />
            </Switch>
          </PageWrap>
        </ErrorProvider>
        <MessageProvider />
      </AppNav.Offset>
    </React.Fragment>
  )
}

App.propTypes = {
  isNavOpen: PropTypes.bool,
  setNavOpen: PropTypes.func,
}

export const handleAppNav = setNavOpen => {
  const shouldNavBeOpen = isDesktop(window)
  setNavOpen(shouldNavBeOpen)
}

export default compose(
  withRouter,
  connect(
    state => ({
      isNavOpen: selectIsNavOpen(state),
    }),
    {
      setNavOpen: setNavOpen_,
      dispatchGetEquipmentCodes: compose(withAlertError, getEquipmentCodes),
    },
  ),
  onMount(({ setNavOpen, dispatchGetEquipmentCodes }) => {
    onScreenFormChange(() => handleAppNav(setNavOpen))
    dispatchGetEquipmentCodes()
  }),
)(App)
