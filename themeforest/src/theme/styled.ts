import styled from 'styled-components'

interface IProps {
  color?: string
  colorHover?: string
  colorDisabled?: string
  disabled?: boolean
}

export const SvgStyled = styled.svg``

export const PathStyled = styled.path`
  fill: ${({ disabled, colorDisabled, color }: IProps) => (disabled ? colorDisabled : color)};
  transition: 0.3s;

  &:hover {
    fill: ${({ colorHover, disabled }: IProps) => !disabled && colorHover};
  }
`
