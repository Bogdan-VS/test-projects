import styled from 'styled-components'

export const StyledKeypad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    'fullClear percent openBracket closeBracket'
    'seven eight nine plus'
    'four five six minus'
    'one two three multi'
    'dott zeroo zeroo divide'
    'clearr clearr equal equal';
  gap: 15px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  padding: 10px;
`
