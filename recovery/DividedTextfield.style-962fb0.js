import styled, { css } from 'styled-components'

import { phoneOnly } from 'helpers/styleMixins/media'
import ifProp from 'helpers/ifProp'
import setAlpha from 'helpers/setAlpha'
import theme from 'theme'

const boxWidth = 25
const boxSpacing = 2
const boxWidthMobile = 16
const combinedWidth = boxWidth + boxSpacing
const combinedWidthMobile = boxWidthMobile + boxSpacing
const height = '2rem'

export const BoxInputStyle = styled.div`
  position: relative;
  ${ifProp('hasError', css`
    margin-bottom: 2rem;
  `)}
`

const boxWidth = p => p.boxWidth

export const BoxInputWrapper = styled.div`
  position: relative;
  width: ${p => p.maxLength * (combinedWidth) + 8}px;
  margin-right: -8px;
  overflow: hidden;
  height: ${height};
  background: repeating-linear-gradient(
    to right,
    ${theme.colorOffWhite},
    ${theme.colorOffWhite} ${boxWidth}px,
    rgba(255, 255, 255, 0) ${boxWidth}px,
    rgba(255, 255, 255, 0) ${combinedWidth}px
  );
  &:before {
    content: '';
    width: ${8 + boxSpacing}px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${p => p.bgColor || 'white'};
  }
  ${phoneOnly(css`
    width: ${p => p.maxLength * (combinedWidthMobile) + 8}px;
    background: repeating-linear-gradient(
      to right,
      ${theme.colorOffWhite},
      ${theme.colorOffWhite} ${boxWidthMobile}px,
      rgba(255, 255, 255, 0) ${boxWidthMobile}px,
      rgba(255, 255, 255, 0) ${combinedWidthMobile}px
    );
  `)}
  ${ifProp('hasError', css`
    background: repeating-linear-gradient(
      to right,
      ${setAlpha(theme.colorDanger, 0.1)},
      ${setAlpha(theme.colorDanger, 0.1)} ${boxWidth}px,
      rgba(255, 255, 255, 0) ${boxWidth}px,
      rgba(255, 255, 255, 0) ${combinedWidth}px
    );
    ${phoneOnly(css`
      background: repeating-linear-gradient(
        to right,
        ${setAlpha(theme.colorDanger, 0.1)},
        ${setAlpha(theme.colorDanger, 0.1)} ${boxWidthMobile}px,
        rgba(255, 255, 255, 0) ${boxWidthMobile}px,
        rgba(255, 255, 255, 0) ${combinedWidthMobile}px
      );
    `)}
  `)}
`

export const BoxInput = styled.input`
  font-weight: normal;
  box-shadow: none;
  border-radius: 0;
  border: 0;
  color: ${theme.colorDark};
  outline: none;
  font-size: 1.25rem;
  line-height: ${height};
  height: ${height};
  font-family: ${theme.monoFont};
  width: ${p => p.maxLength * (combinedWidth) + 8}px;
  padding: 0;
  letter-spacing: 15px;
  text-indent: 6px;
  background: transparent;
  position: relative;
  ${phoneOnly(css`
    font-size: 1.125rem;
    width: ${p => p.maxLength * (combinedWidthMobile) + 8}px;
    letter-spacing: 7.18px;
    text-indent: 2.25px;
  `)}
`

export const DividedTextfieldLabel = styled.label`
  display: block;
  font-size: 14px;
  color: ${theme.colorDark};
  font-weight: 500;
  margin-bottom: 0.5rem;
  ${ifProp('hasError', css`
    color: ${theme.colorDanger};
  `)}
`
