import styled from 'styled-components'

import {
  FloatingInputStyle,
} from 'App/shared/components/FloatingInput/FloatingInput.style'
import SVGIcon from 'App/shared/components/SVGIcon'
import theme from 'theme'

export const SearchWrap = styled.div`
  padding: 0.5rem;
  background-color: ${theme.colorOffWhite};
  position: relative;
`

export const SearchInput = styled(FloatingInputStyle)`
  padding-left: 48px;
`

export const SearchIcon = styled(SVGIcon).attrs({
  name: 'action.search',
})`
  position: absolute;
  left: 1rem;
  top: 1rem;
`
