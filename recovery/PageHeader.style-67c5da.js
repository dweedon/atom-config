import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { desktopOnly, tabletUp } from 'helpers/styleMixins/media'
import {
  materialAnimationDefault,
} from 'helpers/styleMixins/animations.style'
import { shadow4dp } from 'helpers/styleMixins/shadows.style'
import ifProp from 'helpers/ifProp'
import theme from 'theme'
import withRipple from 'App/shared/higherOrderComponents/withRipple'


export const PageHeaderBar = styled.header`
  background-color: ${theme.colorPrimary};
  ${shadow4dp()};
  color: white;
  padding: 0 24px 0 72px;
  transition-property: padding;
  position: relative;
  z-index: 10;
  ${materialAnimationDefault('0.3s')};
  ${ifProp('isNavOpen', widescreenOnly(css`
    padding-left: 48px;
  `))}
`

export const PageHeaderRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const PageHeaderNavToggle = styled.div`
  position: absolute;
  ${materialAnimationDefault('0.3s')}
  transition-property: transform, opacity;
  left: 12px;
  display: flex;
  height: 48px;
  width: 48px;
  top: 8px;
  align-items: center;
  justify-content: center;

  ${ifProp('isNavOpen', desktopOnly(css`
    transform: translateX(-100%);
    overflow: hidden;
    user-select: none;
    pointer-events: none;
    opacity: 0;
  `))}
`

export const PageHeaderTitle = styled.h1`
  font-size: 18px;
  margin: 0;
  padding-left: 0;
  font-weight: 500;
  height: 4rem;
  line-height: 4rem;
`

export const PageHeaderTabs = styled.nav`
  display: flex;
  width: calc(100% + 6rem);
  margin: 0 -1.5rem 0 -4.5em;
  overflow: auto;
  ${tabletUp(css`
    width: calc(100% + 0.75rem);
    margin: 0 -0.75rem;
  `)}
  ${desktopOnly(css`
    width: calc(100% + 3rem);
    margin: 0 -1.5rem;
  `)}
`

const activeClassName = 'nav-tab-active'

export const PageHeaderTab = withRipple()(styled(NavLink).attrs({
  activeClassName,
})`
  position: relative;
  height: 3rem;
  display: flex;
  text-transform: uppercase;
  align-items: center;
  padding: 0 0.5rem;
  font-size: 0.6875rem;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  ${materialAnimationDefault('0.3s')}
  transition-property: color;
  flex-grow: 2;
  justify-content: center;
  white-space: nowrap;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  ${tabletUp(css`
    flex-shrink: 0;
    flex-grow: 0;
    font-size: 0.825rem;
    padding: 0 0.75rem;
  `)}
  ${desktopOnly(css`
    font-size: 0.875rem;
    padding: 0 1.5rem;
  `)}
  &:after {
    content: "";
    height: 2px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colorPrimaryAlt};
    transform: scaleX(0.001);
    opacity: 0;
    ${materialAnimationDefault('0.3s')}
    transition-property: transform, scale;
  }
  &.${activeClassName} {
    color: white;
    &:after {
      opacity: 1;
      transform: scaleX(1);
    }
  }
`)
