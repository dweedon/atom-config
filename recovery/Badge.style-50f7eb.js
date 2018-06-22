import T from 'lodash/fp/stubTrue'
import add from 'lodash/fp/add'
import always from 'lodash/fp/constant'
import compose from 'lodash/fp/flowRight'
import cond from 'lodash/fp/cond'
import divide from 'lodash/fp/divide'
import negate from 'lodash/fp/negate'
import subtract from 'lodash/fp/subtract'

import ifProp from 'helpers/ifProp'
import setDisplayName from 'App/shared/higherOrderComponents/setDisplayName'

export const BadgeWrap = setDisplayName('BadgeWrap')(styled.div`
  position: relative;
  white-space: nowrap;
  display: inline-block;
  margin-right: ${cond([
    [overlap, call(subtract, badgeSize, badgeOverlap)],
    [forButton, call(subtract, badgeSize, always(14))],
    [T, call(add, badgeSize, badgePadding)],
  ])}px;
`)

export const BadgeText = setDisplayName('BadgeText')(styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  top: ${ifProp('forButton', -10, call(divide, badgeSize, always(-2)))}px;
  right: ${cond([
    [forButton, always(-10)],
    [overlap, call(compose(negate, subtract), badgeSize, badgeOverlap)],
    [T, call(compose(negate, add), badgeSize, badgePadding)],
  ])}px;
  font-family: ${preferredFont};
  font-weight: 600;
  font-size: ${badgeFontSize}px;
  width: ${badgeSize}px;
  height: ${badgeSize}px;
  border-radius: 50%;
  color: ${ifProp('background', badgeColor, badgeColorInverse)};
  background: ${ifProp('background', badgeBackground, badgeBackgroundInverse)};
  box-shadow: ${ifProp('background', 'none', '0 0 1px gray')};
`)
