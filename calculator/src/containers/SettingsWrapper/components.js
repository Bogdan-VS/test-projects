import { StyledClearAllHistory } from '@/components/ClearAllHistory/components'
import styled from 'styled-components'

export const StyledSettingsWrapper = styled.div``

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 30px;
  padding: 20px;
`

export const StyledSwitchComponentsBtn = styled(
  StyledClearAllHistory,
)``
