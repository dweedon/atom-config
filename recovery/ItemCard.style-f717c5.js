import styled, { css } from 'styled-components'

import { desktopOnly, mobileOnly, phoneOnly } from 'helpers/styleMixins/media'
import Card from 'components/UI/Card'

export const ItemCardBase = styled(Card)`
  max-width: 60rem;
  ${phoneOnly(css`
    margin: 0 -1rem;
    padding: 1.5rem 1rem;
  `)}
`

export const ItemCardTitle = styled(Card.Title)`
  ${phoneOnly(css`
    text-align: center;
  `)}
`

export const FlexGroup = styled.div`
  display: flex;
  align-items: top;
  ${mobileOnly(css`
    display: block;
  `)}
`


export const ItemCardTitleGroup = styled.div`
  flex: 1;
  align-self: flex-start;
  margin-top: 1rem;
  ${phoneOnly(css`
    text-align: center;
  `)}
  ${mobileOnly(css`
    margin-bottom: 1.5rem;
    margin-top: 0;
  `)}
`

export const ItemCardInfoGroup = styled.div`
  display: flex;
  flex: 1;
  align-items: top;
  justify-content: space-around;
  margin-top: 1rem;
  ${desktopOnly(css`
    max-width: 25rem;
    margin-left: 3.5rem;
  `)}
`
