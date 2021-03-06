import React from 'react'
import * as reduxForm from 'redux-form/immutable'

import { InstallPage, mapStateToProps } from 'containers/InventoryPage/Install'
import { required } from 'helpers/validators'
import { shallow } from 'enzyme'
import ErrorText from 'components/UI/ErrorText'
import messages from 'containers/InventoryPage/Install/messages'

describe('<AddEquipmentCodeModal>', () => {
  let component
  let props

  beforeEach(() => {
    props = {
      handleSubmit: jest.fn(),
      submitting: false,
      invalid: false,
      error: null,
    }
    component = shallow(<InstallPage {...props} />)
  })

  it('displays errors', () => {
    expect(component.find(ErrorText)).not.toBePresent()
    component.setProps({ error: 'boom!' })
    expect(component.find(ErrorText)).toBePresent()
    expect(component.find(ErrorText)).toHaveInnerText('boom!')
  })

  it('can not be submitted twice', () => {
    expect(component.find({ 'data-test-id': 'submitInstall' })).toHaveProp(
      'disabled',
      false,
    )
    component.setProps({ submitting: true })
    expect(component.find({ 'data-test-id': 'submitInstall' })).toHaveProp(
      'disabled',
      true,
    )
  })

  it('changes the button text to indicate that the form is being submitted', () => {
    expect(component.find({ 'data-test-id': 'submitInstall' })).toHaveMessage(
      messages.install,
    )
    component.setProps({ submitting: true })
    expect(component.find({ 'data-test-id': 'submitInstall' })).toHaveMessage(
      messages.installing,
    )
  })

  it('can be submitted', () => {
    component.find('form').simulate('submit', 'foo')
    expect(props.handleSubmit).toHaveBeenCalledWith('foo')
  })

  describe('fields', () => {
    describe('install location input', () => {
      it('is present', () => {
        expect(component.find({ name: 'installLocation' })).toBePresent()
      })
      it('is required', () => {
        expect(
          component.find({ name: 'installLocation' }).prop('validate'),
        ).toContain(required)
      })
    })
    describe('equipmentCode input', () => {
      it('is present', () => {
        expect(component.find({ name: 'equipmentCode' })).toBePresent()
      })
      it('is required', () => {
        expect(
          component.find({ name: 'equipmentCode' }).prop('validate'),
        ).toContain(required)
      })
    })
    describe('make input', () => {
      it('is present', () => {
        expect(component.find({ name: 'manufacturer' })).toBePresent()
      })
      it('is required', () => {
        expect(
          component.find({ name: 'manufacturer' }).prop('validate'),
        ).toContain(required)
      })
    })
    describe('model input', () => {
      it('is present', () => {
        expect(component.find({ name: 'product' })).toBePresent()
      })
      it('is required', () => {
        expect(component.find({ name: 'product' }).prop('validate')).toContain(
          required,
        )
      })
    })
    describe('equipmentId input', () => {
      it('is present', () => {
        expect(component.find({ name: 'serialNumber' })).toBePresent()
      })
      it('is required', () => {
        expect(
          component.find({ name: 'serialNumber' }).prop('validate'),
        ).toContain(required)
      })
    })
  })

  describe('InventoryPage Install mapStateToProps', () => {
    it('sets selectedMakeId prop', () => {
      const installForm = jest.fn()
      reduxForm.formValueSelector = jest.fn(() => installForm)

      const state = 'fakeState'

      const result = mapStateToProps(state)
    })
  })

})
