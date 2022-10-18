import styled from 'styled-components'

interface StyledProps {
  bg: string | null
}

export const MainWrapperStyled = styled.div`
  width: 100vw;
  height: 100%;
  background: ${({ bg }: StyledProps) => `100% 100% / cover url('./assets/background/${bg}.jpg')`};
`
