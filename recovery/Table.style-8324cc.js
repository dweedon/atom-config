import PropTypes from 'prop-types'
import React from 'react'
import get from 'lodash/fp/get'
import styled, { css } from 'styled-components'

import { desktopOnly } from 'helpers/styleMixins/media'
import { materialAnimationDefault } from 'helpers/styleMixins/animations.style'
import { typoBody2 } from 'helpers/styleMixins/type.style'
import SVGIcon from 'App/shared/components/SVGIcon'
import ifProp from 'helpers/ifProp'
import theme from 'theme'

const dataTableHeaderFontSize = 13
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

const cellPadding = css`
  padding: 0 ${dataTableColumnPadding}px 12px ${dataTableColumnPadding}px;
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
`
const cellBase = css`
  text-align: left;
  width: ${ifProp('width', get('width'), 'auto')};
  max-width: ${ifProp('maxWidth', get('maxWidth'), 'none')};
  min-width: ${ifProp('minWidth', get('minWidth'), '0')};
  &:first-child {
    border-left: ${dataTableDividers};
  }
  &:last-child {
    border-right: ${dataTableDividers};
  }
  ${({ numeric }) => numeric && css`
    text-align: right;
  `}
`

export const Cell = styled.td`
  ${cellBase}
  ${cellPadding}
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
`

export const HeaderCellOuter = styled.th`
  ${cellBase}
  position: relative;
  vertical-align: bottom;
  text-overflow: ellipsis;
  ${typoBody2()}
  letter-spacing: 0.04em;
  height: ${dataTableRowHeight}px;
  font-size: ${dataTableHeaderFontSize}px;
  color: ${dataTableHeaderColor};
  box-sizing: border-box;
  border-bottom: ${dataTableDividers};
  padding: 0;
  background-color: #f5f5f5;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 500;
  box-shadow: 0 1px #dedede;
  ${ifProp('sorted', css`
    color: black;
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
        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          background-color: ${theme.colorOffWhite};
        }
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
    ${HeaderCellOuter} {
      position: static;
      position: sticky;
      top: ${p => p.top || -1}px;
      z-index: 1;
    }
  `)}
`

export const HeaderCellInner = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  height: 48px;
  padding-bottom: 8px;
  ${ifProp('numeric', css`
    flex-direction: row-reverse;
  `)}
  padding: 0 ${dataTableColumnPadding}px 8px ${dataTableColumnPadding}px;
  ${HeaderCellOuter}:first-of-type & {
    padding-left: 24px;
    ${desktopOnly(css`
      padding-left: 48px;
    `)}
  }

  ${HeaderCellOuter}::last-of-type & {
    padding-right: 24px;
    ${desktopOnly(css`
      padding-right: 48px;
    `)}
  }
`

export const HeaderCell = props => (
  <HeaderCellOuter {...props}>
    <HeaderCellInner numeric={props.numeric} sorted={props.sorted}>
      {props.sorted && (
        <Table.Icon
          flip={props.sortDirection === 'desc'}
          name="navigation.arrow_upward"
        />
      )}
      {props.children}
    </HeaderCellInner>
  </HeaderCellOuter>
)

HeaderCell.propTypes = {
  children: PropTypes.node,
  numeric: PropTypes.bool,
  sorted: PropTypes.bool,
  sortDirection: PropTypes.oneOf(['desc', 'asc'])
}

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
    ${Cell}:first-child, ${HeaderCellOuter}:first-child {
      border-left: 0px;
    }
    ${Cell}:last-child, ${HeaderCellOuter}:last-child {
      border-right: 0px;
    }
  `)}
`

export const TableIcon = styled(SVGIcon)`
  &:not(:last-child) {
    margin-right: 5px;
  }
  height: 24px;
  width: 24px;
  transition: transform 0.3s ${theme.materialAnimationDefault};
  will-change: transform;
  ${ifProp('flip', css`
    transform: translate3d(0, -1px, 0) rotate3d(0,0,1,180deg);
  `)}
`

TableIcon.defaultProps = {
  size: dataTableHeaderSortIconSize,
}
