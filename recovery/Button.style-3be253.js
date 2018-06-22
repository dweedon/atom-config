import { transparentize } from 'polished'
import get from 'lodash/fp/get'
import styled, { css } from 'styled-components'

import {
  RippleEffect,
  RippleWrap,
} from 'App/shared/components/Ripple/Ripple.style'
import { SVGIconWrap } from 'App/shared/components/SVGIcon/SVGIcon.style'
import {
  focusShadow,
  shadow2dp,
  shadow4dp,
} from 'helpers/styleMixins/shadows.style'
import { typoButton } from 'helpers/styleMixins/type.style'
import ifProp from 'helpers/ifProp'
import setDisplayName from 'App/shared/higherOrderComponents/setDisplayName'
import theme from 'theme'

const buttonSize = 2.25
const buttonFabSize = 3.5
const buttonFabSizeMini = 2.5
const buttonIconSize = 2
const buttonIconSizeMini = 1.5

export const FlatButtonBase = setDisplayName('FlatButton')(
  styled.button`
    background: transparent;
    border: none;
    border-radius: 0.12rem;
    color: ${theme.colorDark};
    position: relative;
    height: ${buttonSize}rem;
    line-height: ${buttonSize}rem;
    margin: 0;
    min-width: 4rem;
    padding: 0 1rem;
    white-space: nowrap;
    display: inline-flex;
    ${typoButton()}
    overflow: hidden;
    will-change: box-shadow;
    text-decoration: none;
    transition:
      box-shadow 0.2s ${theme.animationCurveFastOutLinearIn},
      background-color 0.2s ${theme.animationCurveDefault},
      color 0.2s ${theme.animationCurveDefault};
    outline: none;
    cursor: pointer;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.04em;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
    &::-moz-focus-inner {
      border: 0;
    }
    &:hover {
      background-color: ${theme.colorOffWhite};
    }
    &:focus, &:active {
      background-color: ${theme.colorFaint};
    }
    ${RippleEffect} {
      background-color: rgba(0,0,0,0.3);
    }
    ${SVGIconWrap} {
      position: relative;
      top: -1px;
      font-size: 1.5em;
    }
    &:disabled {
      color: ${theme.colorLight};
      &:hover, &:focus, &:active {
        background: transparent;
      }
    }
    ${ifProp('inverse', css`
      color: white;
      &:hover,
      &:focus:not(:active) {
        color: white;
        background-color: rgba(255,255,255,0.1);
      }

      &:active:active {
        color: white;
        background-color: rgba(255,255,255,0.2);
      }
      &:disabled {
        color: rgba(255,255,255,0.5)
      }
    `)}
    ${ifProp('danger', css`
      color: ${theme.colorDanger};
      &:hover,
      &:active,
      &:focus:not(:active) {
        background-color: ${transparentize(0.9, theme.colorDanger)};
      }
      ${RippleEffect} {
        background-color: ${transparentize(0.5, theme.colorDanger)};
      }
      &:disabled {
        color: ${transparentize(0.5, theme.colorDanger)};
      }
    `)}
   ${ifProp('primary', css`
      color: ${theme.colorPrimaryAlt};
      &:hover,
      &:active,
      &:focus:not(:active) {
        background-color: ${transparentize(0.9, theme.colorPrimaryAlt)};
      }
      ${RippleEffect} {
        background-color: ${transparentize(0.5, theme.colorPrimaryAlt)}
      }
      &:disabled {
        color: ${transparentize(0.5, theme.colorPrimaryAlt)}
      }
    `)}
    ${ifProp('accent', css`
      color: ${theme.colorAccent};
      &:hover,
      &:active,
      &:focus:not(:active) {
        background-color: ${transparentize(0.9, theme.colorAccent)};
      }
      ${RippleEffect} {
        background-color: ${transparentize(0.5, theme.colorAccent)}
      }
      &:disabled {
        color: ${transparentize(0.5, theme.colorAccent)}
      }
    `)}
  `)

export const RaisedButtonBase = setDisplayName('RaisedButton')(
  FlatButtonBase.extend`
    background-color: ${theme.colorOffWhite};
    ${shadow2dp()} &:hover, &:active:active, &:focus:focus:not(:active) {
      background-color: ${theme.colorFaint};
    }
    &:active {
      ${shadow4dp()};
    }
    &:focus:not(:active) {
      ${focusShadow()};
    }
    &:disabled:disabled {
      box-shadow: none;
      background-color: ${theme.colorOffWhite};
      color: ${theme.colorLight};
      &:hover,
      &:focus,
      &:active {
        background-color: ${theme.colorOffWhite};
      }
    }
    ${ifProp(
      'accent',
      css`
        color: ${theme.colorAccentContrast};
        background-color: ${theme.colorAccent};
        &:hover,
        &:active:active,
        &:focus:focus:not(:active):not(:active) {
          background-color: ${theme.colorAccent};
        }
        ${RippleEffect} {
          background-color: white;
        }
        &:disabled {
          background-color: ${transparentize(0.5, theme.colorAccent)};
        }
      `,
    )} ${ifProp(
        'primary',
        css`
          color: ${theme.colorPrimaryContrast};
          background-color: ${theme.colorPrimary};
          &:hover,
          &:active:active,
          &:focus:focus:not(:active):not(:active) {
            background-color: ${theme.colorPrimary};
          }
          ${RippleEffect} {
            background-color: white;
          }
          &:disabled {
            background-color: ${transparentize(0.5, theme.colorPrimary)};
          }
        `,
      )};
  `,
)

export const FabBase = setDisplayName('Fab')(
  RaisedButtonBase.extend`
    border-radius: 50%;
    font-size: 1.5rem;
    height: ${buttonFabSize}rem;
    margin: auto;
    min-width: ${buttonFabSize}rem;
    width: ${buttonFabSize}rem;
    padding: 0;
    overflow: hidden;
    position: relative;
    line-height: normal;
    &:active {
      ${shadow4dp()} background-color: ${theme.colorFaint};
    }
    &:focus:not(:active) {
      ${focusShadow()} background-color: ${theme.colorFaint};
    }
    ${ifProp(
      'mini',
      css`
        text-align: center;
        height: ${buttonFabSizeMini}rem;
        min-width: ${buttonFabSizeMini}rem;
        width: ${buttonFabSizeMini}rem;
      `,
    )} ${RippleWrap} {
      border-radius: 50%;
      -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
    }

    ${SVGIconWrap} {
      top: 0;
      margin-right: 0;
      margin-left: 0;
      font-size: inherit;
    }
  `,
)

export const IconButtonBase = setDisplayName('IconButtonBase')(
  FlatButtonBase.extend`
    border-radius: 50%;
    font-size: 1.5rem;
    height: ${buttonIconSize}rem;
    margin-left: 0;
    margin-right: 0;
    min-width: ${buttonIconSize}rem;
    width: ${buttonIconSize}rem;
    padding: 0;
    overflow: hidden;
    color: ${theme.colorMedium};
    line-height: normal;
    &:after {
      display: block;
      content: ${get('text')}
    }
    &:focus {
      color: ${theme.colorDark};
    }
    ${ifProp('inverse', css`
      color: white;
    `)}
    ${ifProp('mini', css`
      height: ${buttonIconSizeMini}rem;
      min-width: ${buttonIconSizeMini}rem;
      width: ${buttonIconSizeMini}rem;
    `)}
    ${RippleWrap} {
      border-radius: 50%;
      -webkit-mask-image: -webkit-radial-gradient(circle, white, black);
    }
    ${SVGIconWrap} {
      top: 0;
      margin-right: 0;
      margin-left: 0;
      font-size: inherit;
    }
  `,
)

export const ButtonInner = setDisplayName('ButtonInner')(
  styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
)
