import styled from 'styled-components'

import setDisplayName from 'components/higherOrderComponents/setDisplayName'

export const LoadingWrap = setDisplayName('LoadingWrap')(styled.div`
  margin: 60px auto;
  text-align: center;
`)
