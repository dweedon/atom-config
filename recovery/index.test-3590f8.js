import React from 'react'
import findLast from 'lodash/fp/findLast'
import isEqual from 'lodash/fp/isEqual'
import last from 'lodash/fp/last'
import * as reduxForm from 'redux-form/immutable'

import { InstallPage, mapStateToProps } from 'containers/InventoryPage/Install'
import { required } from 'helpers/validators'
import { shallow } from 'enzyme'
import ErrorText from 'components/UI/ErrorText'
import messages from 'containers/InventoryPage/Install/messages'

describe('<InventoryPage>', () => {
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
    xit('sets selectedMakeId prop', () => {
      const installForm = jest.fn()
      reduxForm.formValueSelector = jest.fn(() => installForm)

      const state = 'fakeState'

      const result = mapStateToProps(state)
    })
  })

  it.only('test', async () => {
    const mockFunction = jest.fn()
    jest.when(mockFunction, 1, 2).thenReturn(3)
    jest.when(mockFunction, 'foo').thenReturn('bar')
    jest.when(mockFunction, 'foo').thenResolve('baz')
    jest.when(mockFunction, 'bad').thenThrow(new Error('bad'))
    expect(mockFunction(1, 2)).toEqual(3)
    expect(await mockFunction('foo')).toEqual('baz')
    expect(() => mockFunction('bad')).toThrow(new Error('bad'))
    expect(mockFunction('something else')).toEqual(undefined)
  })
})

jest.when = (mockfn, ...expectedArgs) => {
  if (!mockfn.mockImplementations) {
    mockfn.mockImplementations = []
  }

  const thisMock = { args: expectedArgs, returns: undefined }

  mockfn.mockImplementations.push(thisMock)

  mockfn.mockImplementation((...args) => {
    const match = findLast(
      mock => isEqual(mock.args, args),
      mockfn.mockImplementations,
    )

    return match ? match.returns : undefined
  })

  return {
    thenReturn(val) {
      thisMock.returns = val
    },
    thenResolve(val) {
      thisMock.returns = Promise.resolve(val)
    },
    thenReject(val) {
      thisMock.returns = Promise.reject(val)
    },
    thenThrow(val) {
      Object.defineProperty(thisMock, 'returns', {
        get() {
          throw val
        },
      })
    },
  }
}
