import React from 'react'
import styled from 'styled-components'

import { shadow16dp } from 'helpers/styleMixins/shadows.style'
import theme from 'theme'

export const EmptyMessageText = styled.div`
  padding: 64px 0;
  text-align: center;
  font-size: 24px;
  color: ${theme.colorLight};
  border: 0;
`

const Outer = styled.div`
  text-align: center;
  font-size: 24px;
  color: ${theme.colorLight};
  border: 0;
  z-index: 100;
  position: relative;
  padding: 0;
  text-align: center;
  position: absolute;
  width: 100%;
  position: sticky;
  top: 100px;
  z-index: 1;
`

const Inner = styled.div`
  margin-top: 64px;
  height: 64px;
  width: 64px;
  background: white;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:after {
    opacity: 0.5;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    ${shadow16dp()};
  }
`

export const SpinnerWrap = props => <Outer><Inner {...props} /></Outer>
