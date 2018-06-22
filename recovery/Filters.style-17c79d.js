import styled from 'styled-components'

import theme from 'theme'

export const FilterTitleRow = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem 0 1.5rem 0;
  margin-right: -1rem;
`

export const FilterTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
  color: ${theme.colorDark};
`

export const FilterRowStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.625rem;
`

export const FilterField = styled.div`
  flex: 1;
  padding-right: 0.625rem;
`

export const FilterOperator = styled.div`
  flex: 1;
  padding-right: 0.625rem;
`

export const FilterValue = styled.div`
  flex: 1.5;
  padding-right: 0.625rem;
`
