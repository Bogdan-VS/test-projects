import styled from 'styled-components'

import { StyledControlBtn } from '@/components/ControlPanelBtn/components'

export const StyledCalculator = styled.div`
  height: 100%;
`

export const StyledWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${({ isHistoryOpen }) =>
    isHistoryOpen ? '65% 33%' : '98% 33%'};
  column-gap: 2%;
  padding-top: 2%;
  transition: all ease 1s;
  overflow: hidden;
`

export const StyledSwitchHistory = styled(StyledControlBtn)``
