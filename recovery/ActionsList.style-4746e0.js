import styled from 'styled-components'

import Card from 'App/shared/components/Card'
import theme from 'theme'

const ActionsList = styled(Card)`

`

const ActionListItem = styled.div`
  display: flex;
  padding: 2rem 1.5rem;
  display: flex;
  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colorFaint};
  }
`

const ActionListItemTitle = styled.div`
  font-size: 1rem;
  color: ${theme.colorPrimary};
`

const ActionListItemDescription = styled.div`
  font-size: 0.875rem;
  color: ${theme.colorMedium};

`
