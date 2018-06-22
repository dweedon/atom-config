import styled, { css, keyframes } from 'styled-components'

import { mobileOnly, phoneOnly } from 'helpers/styleMixins/media'
import { shadow24dp } from 'helpers/styleMixins/shadows.style'
import ifProp from 'helpers/ifProp'
import theme from 'theme'

const flyIn = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
    @media(min-width: ${theme.desktopBreakpoint}) {
      transform: translate3d(0, 5vh, 0);
    }
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

const flyInShort = keyframes`
  from {
    transform: translate3d(0, 5vh, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const mobileNonAlert = fn => ifProp(p => !p.alert, mobileOnly(fn))

export const ModalTitle = styled.h1`
  font-size: 1.5rem;
  height: 4rem;
  padding: 1rem 1.5rem;
  font-weight: normal;
  margin: 0;
  background-color: ${theme.colorOffWhite};
  display: flex;
  align-items: flex-end;
  ${mobileOnly(css`
    align-items: center;
    font-size: 1.25rem;
  `)}
`

export const ModalStyle = styled.div`
  background: white;
  ${shadow24dp()}
  outline: none;
  overflow: ${p => p.overflow || 'auto'};
  animation: ${fadeIn} 0.3s ${theme.animationCurveDefault} forwards,
    ${flyInShort} 0.3s ${theme.animationCurveLinearOutSlowIn} forwards;
  height: auto;
  width: ${({ size }) => `${parseInt(size || 5, 10) * 56}px`};
  margin-top: -15vh;
  max-width: calc(100vw - 144px);
  max-height: 80vh;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  will-change: transform;
  position: relative;
  ${phoneOnly(css`
    width: 90vw;
    max-width: 90vw;
  `)}
  ${mobileNonAlert(css`
    height: 100%;
    width: 100%;
    margin-top: 0;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0;
    animation:
      ${flyIn} 0.4s ${theme.animationCurveLinearOutSlowIn} forwards;
    ${ModalTitle} {
      padding: 1.25rem 1.5rem;
      line-height: 1.5rem;
      font-size: 18px;
      color: white;
      background-color: ${theme.colorPrimary};
    }
  `)}
`

export const MobileModalClose = styled.div`
  display: none;
  ${mobileOnly(css`
    display: block;
    position: absolute;
    z-index: 100;
    top: 1rem;
    right: 1rem;
  `)}
`

export const ModalContent = styled.div`
  padding: 20px 24px 24px;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colorDark};
  flex: auto;
  overflow: ${p => p.overflow || 'auto'};
  ${ifProp('center', css`
    text-align: center;
  `)}
  ${mobileNonAlert(css`
    flex: 1;
    padding: 1.5rem;
  `)}
`

export const ModalActions = styled.div`
  position: relative;
  padding: 8px 0 8px 0;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  > * {
    &:last-child {
      margin-left: 8px;
    }
    margin-right: 8px;
    height: 36px;
  }
  border-top: 1px solid #dedede;
  @media (min-width: ${theme.desktopBreakpoint}px) {
    border-top: 0;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      padding: 0 0 8px 0;
      right: 0;
      > * {
        height: 48px;
        flex: 0 0 auto;
        width: 100%;
        padding-right: 16px;
        margin-right: 0;
        text-align: right;
        justify-content: flex-end;
        border-radius: 0;
      }
    `};
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: ${p => p.overflow || 'auto'};
  width: 100%;
`
