import React from 'react'

import { Login } from 'App/containers/LoginWrap'
import { shallow } from 'enzyme'

describe('LoginWrap', () => {
  it('shows children when logged in', () => {
    const wrapper = shallow(<Login isLoggedIn>foo</Login>)
    expect(wrapper).toIncludeText('foo')
  })
})
