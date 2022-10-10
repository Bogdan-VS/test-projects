import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StyledBtnBox = styled.div`
  display: flex;
  margin: 10px;
  column-gap: 10px;
`

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin: 10px auto;
`

export const StyledInput = styled.input`
  height: 27px;
`

export const StyledTitle = styled.span`
  color: #fff;
  font-size: 16px;
`

export const StyledPositionWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`

export const StyledPosition = styled.select`
  display: flex;
  height: 27px;
  margin: 5px;
`

export const StyledInputNum = styled.input`
  width: 50px;
  height: 27px;
`

export const StyledPositionOpt = styled.option``

export const StyledBtn = styled.button`
  background-color: orange;
  width: 65px;
  padding: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.7;
  color: #fff;

  &:hover {
    opacity: 1;
  }
`
