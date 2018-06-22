import { NavLink } from 'react-router-dom'
import styled, { css, keyframes } from 'styled-components'

import {
  desktopOnly,
  mobileOnly,
  widescreenOnly,
} from 'helpers/styleMixins/media'
import {
  materialAnimationDefault,
} from 'helpers/styleMixins/animations.style'
import {
  shadow16dp,
  shadow2dp,
} from 'helpers/styleMixins/shadows.style'
import Button from 'App/shared/components/Button'
import ifProp from 'helpers/ifProp'
import theme from 'theme'
import withRipple from 'App/shared/higherOrderComponents/withRipple'

const navWidthSmall = '11.25rem'
const navWidth = '16rem'

export const AppNavMain = styled.aside`
  position: fixed;
  top: -500px;
  bottom: -500px;
  padding-top: 500px;
  padding-bottom: 500px;
  left: -${navWidth};
  width: ${navWidth};
  ${desktopOnly(css`
    left: -${navWidthSmall};
    width: ${navWidthSmall};
  `)}
  ${widescreenOnly(css`
  left: -${navWidth};
  width: ${navWidth};
  `)}
  background: white;
  z-index: 3;
  box-shadow: none;
  ${materialAnimationDefault('0.3s')}
  transition-property: left, box-shadow;
  ${ifProp('isNavOpen', css`
    left: 0;
    ${shadow16dp()};
    ${desktopOnly(css`
      left: 0;
      ${shadow2dp()}
    `)}
    ${widescreenOnly(css`
      left: 0;
    `)}
  `)}
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const AppNavBackdrop = styled.div`
  display: none;
  ${ifProp('isVisible', mobileOnly(css`
    cursor: pointer;
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    animation: ${fadeIn} 0.2s ${theme.animationCurveDefault};
  `))}
`

export const AppNavSection = styled.div`
  padding: 0 18px;
`

export const AppNavOffset = styled.div`
  position: relative;
  padding-left: 0;
  transition-property: padding-left;
  ${materialAnimationDefault('0.3s')}
  z-index: 1;
  ${ifProp('isNavOpen', css`
    ${desktopOnly(css`padding-left: ${navWidthSmall};`)}
    ${widescreenOnly(css`padding-left: ${navWidth};`)}
  `)}
`

export const AppNavToggle = styled(Button.Icon)`
  display: none;
  ${desktopOnly(css`
    display: block;
    position: absolute;
    right: 16px;
    top: calc(500px + 0.75rem);
    margin: 0.25rem;
    z-index: 2;
  `)}
`

export const AppLogo = styled.h1`
  display: flex;
  align-items: center;
  padding: 0 18px;
  width: 16rem;
  height: 64px;
  font-size: 28px;
  z-index: 1;
  color: ${theme.colorPrimary};
  pointer-events: none;
  user-select: none;
  margin-bottom: 48px;
`

const activeClassName = 'nav-item-active'

export const AppNavLink = withRipple({ dark: true })(styled(NavLink).attrs({
  activeClassName,
})`
  position: relative;
  height: 3rem;
  display: flex;
  align-items: center;
  padding-left: 1.125rem;
  font-size: 0.875rem;
  color: ${theme.colorDark};
  text-decoration: none;
  &.${activeClassName} {
    background-color: ${theme.colorOffWhite};
    font-weight: bold;
    letter-spacing: 0.48px;
    word-spacing: 1px;
  }
`)
