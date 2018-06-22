import styled, { css } from 'styled-components'

import { phoneOnly } from 'helpers/styleMixins/media'
import Card from 'App/shared/components/Card'

export const ItemHistoryCard = styled(Card)`
  display: block;
  max-width: 45rem;
  margin-bottom: 3rem;
  position: relative;
  ${phoneOnly(css`
    display:none;
  `)}
`
