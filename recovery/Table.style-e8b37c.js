import get from 'lodash/fp/get'
import styled, { css } from 'styled-components'

import { desktopOnly } from 'helpers/styleMixins/media'
import { materialAnimationDefault } from 'helpers/styleMixins/animations.style'
import { typoBody2 } from 'helpers/styleMixins/type.style'
import SVGIcon from 'App/shared/components/SVGIcon'
import ifProp from 'helpers/ifProp'
import setAlpha from 'helpers/setAlpha'
import theme from 'theme'

const dataTableHeaderFontSize = 12
const dataTableHeaderSortIconSize = 16
const dataTableHeaderColor = theme.colorMedium
const dataTableRowHeight = 48
const dataTableColumnSpacing = 36
const dataTableCardPadding = 24
const dataTableDividers = '1px solid #dedede'
const dataTableColumnPadding = dataTableColumnSpacing / 2
const dataTableCellTop = dataTableCardPadding / 2

export const TableBody = styled.tbody`
  background-color: #f5f5f5;
`

const cellBase = css`
  padding: 0 ${dataTableColumnPadding}px 12px ${dataTableColumnPadding}px;
  text-align: right;
  width: ${ifProp('width', get('width'), 'auto')};
  max-width: ${ifProp('maxWidth', get('maxWidth'), 'none')};
  min-width: ${ifProp('minWidth', get('minWidth'), '0')};
  &:first-child {
    border-left: ${dataTableDividers};
  }
  &:last-child {
    border-right: ${dataTableDividers};
  }

  &:first-of-type {
    padding-left: 24px;
    ${desktopOnly(css`
      padding-left: 48px;
    `)}
  }

  &:last-of-type {
    padding-right: 24px;
    ${desktopOnly(css`
      padding-right: 48px;
    `)}
  }

  ${({ nonNumeric }) => nonNumeric && css`
    text-align: left;
  `}
`

export const Cell = styled.td`
  ${cellBase}
  position: relative;
  vertical-align: middle;
  height: ${dataTableRowHeight}px;
  border-bottom: ${dataTableDividers};
  padding-top: ${dataTableCellTop}px;
  box-sizing: border-box;
  ${materialAnimationDefault('0.2s')}
  transition-property: background-color;
  overflow: hidden;
  text-overflow: ellipsis;
  ${ifProp('sorted', css`
    background-color: ${setAlpha(theme.colorPrimaryAlt, 0.07)};
    border-bottom-color: ${setAlpha(theme.colorPrimaryAlt, 0.4)};
  `)}
`

export const HeaderCell = styled.th`
  ${cellBase}
  position: relative;
  vertical-align: bottom;
  text-overflow: ellipsis;
  ${typoBody2()}
  text-transform: uppercase;
  letter-spacing: 0.04em;
  height: ${dataTableRowHeight}px;
  font-size: ${dataTableHeaderFontSize}px;
  color: ${dataTableHeaderColor};
  padding-bottom: 8px;
  box-sizing: border-box;
  border-bottom: ${dataTableDividers};
  background-color: #f5f5f5;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  ${ifProp('sorted', css`
    background-color: ${setAlpha(theme.colorPrimaryAlt, 0.07)};
    border-bottom-color: ${setAlpha(theme.colorPrimaryAlt, 0.4)};
  `)}
`

export const Row = styled.tr`
  position: relative;
  height: ${dataTableRowHeight}px;
  ${materialAnimationDefault('0.28s')};
  transition-property: background-color;
  background-color: white;
  ${({ isSelected }) => isSelected && css`
    background-color: ${theme.colorOffWhite};
  `}
  ${ifProp('hoverable', css`
    cursor: pointer;
    &:hover {
      ${Cell} {
        background-color: ${theme.colorOffWhite};
      }
    }
  `)}x
`

export const TableFooter = styled.tfoot`
  position: relative;
  border-top: 1px solid #dedede;
  margin-top: -1px;
  ${Row} {
    height: 56px;
  }
`

export const TableHeader = styled.thead`
  padding-bottom: 3px;
  ${ifProp('sticky', css`
    ${HeaderCell} {
      position: static;
      position: sticky;
      top: ${p => p.top || -1}px;
      z-index: 1;
      box-shadow: 0 1px #dedede;
    }
  `)}
`

export const Table = styled.table`
  background-color: #fff;
  ${ifProp('maxHeight', css`
    max-height: ${get('maxHeight')}px;
  `)}
  position: relative;
  border-collapse: collapse;
  font-size: 13px;
  background-color: #fff;
  width: 100%;
  max-width: 100%;
  ${ifProp('fullWidth', css`
    width: 100%;
    ${Cell}:first-child, ${HeaderCell}:first-child {
      border-left: 0px;
    }
    ${Cell}:last-child, ${HeaderCell}:last-child {
      border-right: 0px;
    }
  `)}
`

export const TableIcon = styled(SVGIcon)`
  &:not(:last-child) {
    margin-right: 5px;
  }
  vertical-align: bottom;
`

TableIcon.defaultProps = {
  size: dataTableHeaderSortIconSize,
}
