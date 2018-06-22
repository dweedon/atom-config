import styled from 'styled-components'

import theme from 'theme'

export const DatePickerStyle = styled.input`
  height: 36px;
  border: 2px solid ${theme.colorFaint};
  border-radius: 4px;
  padding: 0 0.5rem;
  font-size: 1rem;
  font-family: ${theme.monoFont};
  &::-webkit-datetime-edit-text {
    color: ${theme.colorMedium};
  }

`

DatePickerStyle.defaultProps = {
  type: 'date',
}
