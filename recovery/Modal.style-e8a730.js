import styled, { css, keyframes } from 'styled-components'

import { shadow24dp } from 'helpers/styleMixins/shadows.style'
import theme from 'theme'

const flyIn = keyframes`
  from {
    transform: translate(0, 0);
    @media(min-width: ${theme.desktopBreakpoint}) {
      transform: translate(0, 5vh);
    }
  }
  to {
    transform: translate(0, 0);
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

export const ModalStyle = styled.div`
  background: white;
  ${shadow24dp()}
  overflow: ${p => p.overflow || 'auto'};
  animation: ${fadeIn} 0.3s ${theme.animationCurveDefault} forwards,
    ${flyIn} 0.3s ${theme.animationCurveLinearOutSlowIn} forwards;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media (min-width: ${theme.desktopBreakpoint}px) {
    height: auto;
    margin-top: -15vh;
    width: ${({ size }) => `${parseInt(size || 5, 10) * 56}px`};
    max-width: calc(100vw - 144px);
    max-height: 80vh;
    border-radius: 3px;
  }
`

export const ModalTitle = styled.h1`
  padding: 40px;
  font-size: 24px;
  font-weight: normal;
  margin: 0;
  background-color: ${theme.colorOffWhite};
  display: flex;
  align-items: center;
  @media (min-width: ${theme.desktopBreakpoint}px) {
    font-size: 20px;
    padding: 16px 24px;
  }
`

export const ModalContent = styled.div`
  padding: 20px 40px 24px;
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colorDark};
  flex: 1;
  overflow: ${p => p.overflow || 'auto'};
  @media(min-width: ${theme.desktopBreakpoint}px) {
    flex: auto;
    padding: 20px 24px 24px;
  }
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

export const ModalForm = styled.form``
