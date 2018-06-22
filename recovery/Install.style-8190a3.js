import styled, { css } from 'styled-components'

import {
  mobileOnly,
  phoneOnly,
  widescreenOnly
} from 'helpers/styleMixins/media'
import { shadow2dp } from 'helpers/styleMixins/shadows.style'
import theme from 'theme'

export const InventoryCard = styled.div`
  ${shadow2dp()}
  border-radius: 3px;
  background: white;
  width: 556px;
  max-width: 100%;
  ${mobileOnly(css`
    width: calc(100% + 2rem);
    max-width: none;
    margin: 0 -1rem;
    border-radius: 0;
    padding-bottom: 2rem;
  `)};
`

export const InventoryCardHeader = styled.div`
  border-bottom: 1px solid ${theme.colorFaint};
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0 1.5rem;
  ${phoneOnly(css`
    display: block;
    height: auto;
    padding: 1.5rem 1rem 1.5rem 1rem;
  `)};
`

export const InventoryCardBody = styled.div`
  padding: 2rem 1.5rem;
  ${phoneOnly(css`
    padding: 1.5rem 1rem;
  `)};
`

export const InventoryCardHeaderDivider = styled.div`
  width: 1rem;
  flex-shrink: 0;
  ${phoneOnly(css`
    width: 0;
    height: 0.75rem;
  `)};
`

export const MakeModelInput = styled.input`
  margin: 0;
  font-weight: normal;
  display: block;
  box-shadow: none;
  border-radius: 0;
  border: 0;
  font-family: ${theme.preferredFont};
  color: ${theme.colorDark};
  outline: none;
  padding: 0 0.5rem;
  flex: 1;
  width: 100px;
  font-size: 1rem;
  letter-spacing: 0.04em;
  height: 2rem;
  background-color: ${theme.colorOffWhite};
`

export const EquipmentIdInputWrap = styled.div`
  margin-bottom: 1.5rem;
`

export const InstallWrap = styled.div`
  ${widescreenOnly(css`
    display: flex;
    align-items: flex-start;
  `)}
`
