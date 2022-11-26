import styled from 'styled-components'

interface IProps {
  color?: string
  colorHover?: string
}

export const SvgStyled = styled.svg``

export const PathStyled = styled.path`
  fill: ${({ color }: IProps) => color};
  transition: 0.3s;

  &:hover {
    fill: ${({ colorHover }: IProps) => colorHover};
  }
`
