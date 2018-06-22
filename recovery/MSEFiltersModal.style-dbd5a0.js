import styled from 'styled-components'

import theme from 'theme'

export const MSEFilterTitleRow = styled.header`
  display: flex;
  align-items: center;
  padding: 40px;
  padding: 2rem 0.5rem 1.5rem 1.5rem;
`

export const MSEFilterTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
  color: ${theme.colorDark};
`

export const MSEFilterRow = styled.div`
  display: flex;
  align-items: center;
`

export const MSEFilterField = styled.div`
  flex: 1;
  margin-right: 0.625rem;
`

export const MSEFilterOperator = styled.div`
  flex: 1;
  margin-right: 0.625rem;
`

export const MSEFilterValue = styled.div`
  flex: 1.5;
`
